// My Modules
const authRouter = require("./routes/auth/auth");

// Node Modules
const path = require("path");

// Third Party Modules
const express = require("express");

// Config
const PORT = require("./configs/starter").PORT;

// Messages
const starterMessages = require("./helpers/messages/starter");

// Application Initialization
const app = express();
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", "views");

// Routing
app.use("/auth", authRouter);

app.listen(PORT, () => {
  console.log(starterMessages.serverStart);
});
