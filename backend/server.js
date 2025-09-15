import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import ConnectToDb from "./config/db.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
ConnectToDb();

app.get("/", (req, res) => {
  res.send("<h1> HELlo </h1>");
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is up on PORT${process.env.PORT || 3000}😁`);
});
