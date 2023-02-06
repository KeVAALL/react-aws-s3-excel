const express = require("express");
const { generateUploadURL } = require("./s3");
const app = express();
const port = 3000;

app.use(express.json());

app.get("/s3URL", async (req, res) => {
  const url = await generateUploadURL();
  res.send({ url });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
