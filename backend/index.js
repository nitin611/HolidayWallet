const express = require("express");
const rootRouter=require('./routes/index')
const cors = require('cors')
const app=express();

// cors middleware for connecting frontend and backend -
app.use(cors());
app.use(express.json());

// app.use it to use also for routing-
app.use("/api/v1",rootRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));




