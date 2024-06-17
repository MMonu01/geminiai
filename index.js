const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config();
const express = require("express");
const markdownit = require("markdown-it");

const app = express();
app.use(express.json());

const port = 9000;

app.post("/geminiai", (req, res, next) => {
  const { question } = req.body;
  const genAI = new GoogleGenerativeAI(process.env.gemini_api_key);

  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  model
    .generateContent([question])
    .then((result) => {
      const md = markdownit();
      const response = md.render(result.response.text());
      res.send({ response });
    })
    .catch((err) => {
      next(err);
    });
});

app.listen(port, () => {
  console.log(`server is running at port ${port}`);
});
