import express from "express";

const app = express();
const port = process.env.PORT || 3000;
const secret = process.env.SECRET || "No Secret";

app.get("/", (req, res) => {
  res.send("Hello world, this is a secret for you: " + secret + ". Don't tell anyone.");
});

app.listen(port, () => {
  console.log(`Server is upp an running on: http://localhost:${port}`);
});
