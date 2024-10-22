const express = require('express');
const mongoose = require('mongoose');
const { authMiddleware } = require('../middleware');
const { Account } = require("../db");
const zod = require('zod');
const router = express.Router();

// Define a Zod schema for the transfer request
const transferSchema = zod.object({
    amount: zod.number().positive("Amount must be positive"), // Ensures positive amount
    to: zod.string().nonempty("Recipient userId is required") // Ensures recipient ID is not empty
});

// Route to transfer funds
router.post("/transfer", authMiddleware, async (req, res) => {
    // Validate the input using zod
    const { success, error } = transferSchema.safeParse(req.body);

    if (!success) {
        return res.status(400).json({
            message: error.errors[0].message // Send the first validation error message
        });
    }

    const { amount, to } = req.body;
    const session = await mongoose.startSession();

    try {
        session.startTransaction();

        // Fetch the sender's account
        const account = await Account.findOne({ userId: req.userId }).session(session);
        if (!account || account.balance < amount) {
            await session.abortTransaction();
            return res.status(400).json({
                message: "Insufficient balance"
            });
        }

        // Fetch the receiver's account
        const toAccount = await Account.findOne({ userId: to }).session(session);
        if (!toAccount) {
            await session.abortTransaction();
            return res.status(400).json({
                message: "Invalid recipient account"
            });
        }

        // Perform the transfer
        await Account.updateOne({ userId: req.userId }, { $inc: { balance: -amount } }).session(session);
        await Account.updateOne({ userId: to }, { $inc: { balance: amount } }).session(session);

        // Commit the transaction
        await session.commitTransaction();
        res.json({
            message: "Transfer successful"
        });
    } catch (err) {
        await session.abortTransaction();
        res.status(500).json({
            message: "Internal server error"
        });
    } finally {
        session.endSession(); // Always end the session
    }
});

module.exports = router;
