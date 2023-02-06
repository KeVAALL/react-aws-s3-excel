const express = require("express");
const { generateUploadURL } = require("./s3");
const app = express();
const cors = require("cors");
const port = 4000;

app.use(cors());
app.use(express.json());

app.get("/s3URL", async (req, res) => {
  const url = await generateUploadURL();
  console.log(url);
  res.send({ url });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
