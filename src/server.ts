import express from "express";

const app = express();
const port = process.env.PORT || 3000;
const secret = process.env.SECRET || "";

app.get("/", (req, res) => {
  res.send("hello world " + secret);
});

app.listen(port, () => {
  console.log(`Server is upp an running on: http://localhost:${port}`);
});
