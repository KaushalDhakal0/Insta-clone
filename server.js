import express from "express";
import mongoose from "mongoose";
// import Data from "./data.js";
import dbModel from "./dbModel.js";

// app config
const app = express();
const port = process.env.PORT || 9000;

// middlewares
app.use(express.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"),
    res.setHeader("Access-Control-Allow-Headers", "*"),
    next();
});

// Db Config

const connecction_url =
  "mongodb+srv://admin:<password>@cluster0.rewlg.mongodb.net/tiktok?retryWrites=true&w=majority";

mongoose.connect(connecction_url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

//api endpoints

app.get("/", (req, res) => {
  res.status(200).send("If u see this then backend is completed.");
});

app.get("/v1/posts", (req, res) => {
  dbModel.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      console.log(data);
      res.status(200).send(data);
    }
  });
});

app.get("/v2/posts", (req, res) => {
  // retrieves data from collections of mongoDb.
  dbModel.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      console.log(data);
      res.status(200).send(data);
    }
  });
});

app.post("/v2/posts", (req, res) => {
  //It lets video document to be added in the collection in mongodb.
  console.log(req.body);
  const dbVideos = req.body;

  dbModel.create(dbVideos, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

//listen on port
app.listen(port, () => console.log(`listening on port : ${port}`));
