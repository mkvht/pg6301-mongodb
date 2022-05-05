import express from "express";
import * as path from "path";
import { MoviesApi } from "./moviesApi.js";
// import { MoviesApi } from "./moviesApi.js";
// import { MongoClient } from "mongodb";
// import dotenv from "dotenv";

const app = express();

app.use("/api/movies", MoviesApi());

app.use(express.static("../client/dist/"));

app.use((req, res, next) => {
  if (req.method === "GET" && !req.path.startsWith("/api")) {
    res.sendFile(path.resolve("../client/dist/index.html"));
  } else {
    next();
  }
});

const server = app.listen(process.env.PORT || 3000, () => {
  console.log(`Started on http://localhost:${server.address().port}`);
});
