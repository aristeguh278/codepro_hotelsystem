import express from "express";
import dotenv from "dotenv";
import roomRouter from "./routes/roomRouter.js";
import mongoose from "mongoose";
import userRouter from "./routes/userRouter.js";
dotenv.config();
const PORT = process.env.PORT || 5000;

const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", process.env.CLIENT_URL);
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE");
  res.setHeader("Access-Control-Allow-Headers", "X-Requested-With,Content-Type,Authorization");
  next();
});

app.use(express.json({ limit: "10mb" }));
app.use("/user", userRouter);
app.use("/room", roomRouter);
app.get("/", (req, res) => res.json({ message: "welcome" }));
app.use((req, res) => res.status(404).send("Notfound"));

const startServer = async () => {
  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
  try {
    mongoose.connect(process.env.DB_CONNECT, options, (err, db) => {
      if (err) console.error(err);
      else console.log(` database connection`);
    });
    app.listen(PORT, () => console.log(`server is running on ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

startServer();
