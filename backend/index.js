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
  origin: (origin, callback) => {
    // Agar request bina origin ke hai (jaise Postman) ya origin match karta hai
    const allowedOrigins = [
      "https://netflix-clone-mern-stack-ednq.vercel.app",
      "http://localhost:5173",
    ];

    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

// app.use(cors(corsOptions));
app.use(cors(corsOptions));

// routing
app.use("/api/v1/user", userRoute);

app.listen(process.env.PORT, () => {
  dataBaseConnect();
  console.log(`server is running on http://localhost:${process.env.PORT}`);
});
