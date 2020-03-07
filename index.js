const express = require("express");
const app = express();

//Middleware

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Router Middleware
app.use("/", require("./routers/student"));

app.listen(147, () => console.log("Port is running"));
