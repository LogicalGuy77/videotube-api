import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`App is running on port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.error("MONGO db connection failed!!!: ", error);
  });

/*
import express from "express";
const app = express();
// iffy function to connect to the database
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);

    app.on("error", (error) => {
      console.error("ERR: ", error);
      throw error;
    });

    app.listen(process.env.PORT, () => {
      console.log(`App is running on port ${process.env.PORT}`);
    });
  } catch (error) {}
})();
*/
