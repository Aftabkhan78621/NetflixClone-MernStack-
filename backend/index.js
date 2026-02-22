//  1. step 1
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import userRoute from "./routing/router.js";
import dataBaseConnect from "./utlis/db.js";
dotenv.config({
  path: ".env",
});
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
const corsOptions = {
  origin: ["https://netflix-clone-mern-stack-d6sf.vercel.app", "http://localhost:5173"],
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
};
app.use(cors(corsOptions));

// routing
app.use("/api/v1/user", userRoute);

app.listen(process.env.PORT, () => {
  dataBaseConnect();
  console.log(`server is running on http://localhost:${process.env.PORT}`);
});
