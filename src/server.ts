// Import the Express app instance from the app.js file
import app from "./app.js";

// Import Request and Response types from Express for type safety
import { Request, Response } from "express";

// Import and configure dotenv to load environment variables from a .env file
import dotenv from "dotenv";
dotenv.config();

// Define the port number from environment variables or use the default value of 3000
const PORT = process.env.PORT || 3000;

// Define a basic route for the root URL that sends a welcome message
app.get("/", (_: Request, res: Response) => {
  res.send("Welcome to the Task Manager API!");
});

// Start the server and listen on the specified port, logging a message when it's running
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
