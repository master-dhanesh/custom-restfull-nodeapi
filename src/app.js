const cors = require("cors");
const express = require("express");
const app = express();
const indexRouter = require("./routes/index.routes");

app.use(cors({ origin: true, credentials: true }));

app.use("/api/v1", indexRouter);

module.exports = app;
