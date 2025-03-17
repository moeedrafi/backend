const express = require("express");
const app = express();
const port = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/jokes", (req, res) => {
  const jokes = [
    { id: 1, title: "A joke", content: "This is a joke" },
    { id: 2, title: "A joke 2", content: "This is a joke 2" },
    { id: 3, title: "A joke 3", content: "This is a joke 3" },
    { id: 4, title: "A joke 4", content: "This is a joke 4" },
    { id: 5, title: "A joke 5", content: "This is a joke 5" },
  ];

  res.send(jokes);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
