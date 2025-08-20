import express from "express";
import authRoutes from "./routes/auth.route";
import messageRoutes from "./routes/message.route";
import dotenv from "dotenv";
import { connectDB } from "./lib/db";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

dotenv.config();

const PORT = process.env.PORT || 5001;

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

app.listen(PORT, () => {
  console.log("running on ", PORT);
  connectDB();
});
