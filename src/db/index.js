import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGO_URI}/${DB_NAME}`
    );
    console.log(
      `\n MONGODB connection SUCCESS!! DB HOST:${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.error("MONGODB connection ERR: ", error);
    process.exit(1);
  }
};

export default connectDB;
