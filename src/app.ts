import express, { Application } from "express";
import cors from "cors";
import dotenv from "dotenv";
import fileRoute from "./routes/file.route";

const app: Application = express();

dotenv.config();
app.use(cors());
app.use(express.json({ limit: '100gb' }));
app.use(express.urlencoded({ limit: '100gb', extended: true }));

const { PORT } = process.env;

app.use("/api/files", fileRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
