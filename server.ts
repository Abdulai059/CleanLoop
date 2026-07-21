import dotenv from "dotenv";
dotenv.config();

import app from "./app";

process.on("uncaughtException", (err: Error) => {
  console.log("UNCAUGHT EXCEPTION! 💥 Shutting down...:");
  console.log(err.name, err.message);
  process.exit(1);
});

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

process.on("unhandledRejection", (err: Error) => {
  console.log("UNHANDLED REJECTION! 💥 Shutting down...:");
  console.log(err.name, err.message);

  server.close(() => {
    process.exit(1);
  });
});
