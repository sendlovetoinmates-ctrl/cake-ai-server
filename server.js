  // server.js
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Debug root route
app.get("/", (req, res) => {
  res.send("✅ Your Render server is running!");
});

// Debug test API
app.get("/test", (req, res) => {
  res.json({
    message: "Hello from your Render server 🎉",
    time: new Date().toISOString(),
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

