import express from "express"; // Import the Express framework for building web applications
import cors from "cors"; // Import CORS middleware to enable Cross-Origin Resource Sharing
import { taskRouter, statusRouter } from "./routes/index.route.js"; // Import the task router for handling task-related routes
import errorHandler from "./errorHandler/index.errorHandler.js"; // Import the custom error handler middleware

const app = express(); // Create an instance of the Express application

// Middleware to enable CORS for all incoming requests
app.use(cors());

// Middleware to parse incoming JSON requests
app.use(express.json());

// Route all requests starting with "/api/v1" to the taskRouter
app.use("/api/v1", taskRouter);
app.use("/api/v1", statusRouter);

// Middleware to handle errors globally
app.use(errorHandler);

export default app; // Export the Express app instance for use in other parts of the application
