import express from "express";
import subjectRoute from "./routes/subject.route.js";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import path from "path";
import stdRoute from "./routes/std.route.js";
import pRouter from "./routes/professor.route.js";
import dbRouter from "./routes/dashboard.route.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use(subjectRoute);
app.use(stdRoute);
app.use(pRouter);
app.use(dbRouter);

app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));

app.get("/health", (req, res) => {
  res.json({ status: "OK" });
});

app.listen(process.env.PORT || 5000, () => {
  console.log("Server start at port : 5000");
});