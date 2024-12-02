const express = require("express");
const app = express();
const cookieParser=require("cookie-parser");
const userApi = require("./routers/user");
const CatApi = require("./routers/categories");
const podcastApi = require("./routers/podcast");

require("dotenv").config(); // Load environment variables
const conn = require("./conn/conn"); // Import DB connection function

// Connect to the database
conn();

// Middleware to parse JSON
app.use(express.json());
app.use(cookieParser());

// Register routes
app.use("/api/v1", userApi);
app.use("/api/v1", CatApi);
app.use("/api/v1", podcastApi);
// Define the PORT
const PORT = process.env.PORT || 3002;

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});
