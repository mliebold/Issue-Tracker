// Imports Express Module
const express = require("express");

// Instantiate Web Server
const app = express();

// Create Middleware
const fileServerMiddleware = express.static("public");

// Mounts Middleware
app.use("/", fileServerMiddleware);

// Starts The Server
app.listen(3000, function() {
  console.log("App started on port 3000");
});
