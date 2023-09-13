// app.js

const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");

const app = express();
const port = 3000; // You can change this to any port you prefer

// Middleware to parse JSON request bodies
app.use(bodyParser.json());

// Route to handle POST requests
app.post("/api/post", (req, res) => {
  const requestData = req.body;
  console.log("Received POST request with data:", requestData);

  // Save the JSON data to a local file
  fs.writeFile("data.json", JSON.stringify(requestData, null, 2), (err) => {
    if (err) {
      console.error("Error saving data:", err);
      res.status(500).json({ error: "Error saving data" });
    } else {
      console.log("Data saved to data.json");
      res.json({ message: "Data saved successfully!" });
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
