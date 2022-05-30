import express from "express";

const app = express();
const port = process.env.PORT || 3000;
const secret = process.env.SECRET || "No Secret";

app.get("/", (req, res) => {
  res.send("hello world, this is a secret for you: " + secret);
});

app.listen(port, () => {
  console.log(`Server is upp an running on: http://localhost:${port}`);
});
