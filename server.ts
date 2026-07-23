// 1. Catch exceptions before doing anything else
process.on("uncaughtException", (err: Error) => {
  console.log("UNCAUGHT EXCEPTION! 💥 Shutting down...:");
  console.log(err.name, err.message);
  process.exit(1);
});

// 2. Load environment variables
import dotenv from "dotenv";
dotenv.config();

// 3. Import app and dependencies
import app from "./app";

// 4. Start the server
const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

// 5. Handle unhandled promise rejections
process.on("unhandledRejection", (err: Error) => {
  console.log("UNHANDLED REJECTION! 💥 Shutting down...:");
  console.log(err.name, err.message);

  server.close(() => {
    process.exit(1);
  });
});
