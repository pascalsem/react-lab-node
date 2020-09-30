const express = require("express");
const app = express();

let rules = [
  {
    id: 1,
    title: "Respect",
    description: "Treat People and Property With Respect.",
    tags: [],
    likes: 0,
    dislikes: 0,
  },
  {
    id: 2,
    title: "Caution",
    description: "Knock on Closed Doors Before Entering.",
    tags: [],
    likes: 0,
    dislikes: 0,
  },
  {
    id: 3,
    title: "Care",
    description: "Pick up After Yourself.",
    tags: [],
    likes: 0,
    dislikes: 0,
  },
  {
    id: 4,
    title: "Wisdom",
    description: "Electronics Curfew.",
    tags: [],
    likes: 0,
    dislikes: 0,
  },
  {
    id: 5,
    title: "Amend",
    description: "Make Amends When You Hurt Someone.",
    tags: [],
    likes: 0,
    dislikes: 0,
  },
];

app.get("/rest/rules", (req, res) => {
  res.json(rules);
  res.end();
});

app.get("/rest/rules/:id", (req, res) => {
  res.json(rules.filter((rule) => rule.id === parseInt(req.params.id)));
  res.end();
});

app.post("/rest/likes/:id", (req, res) => {
  let rule = rules.find((rule) => rule.id === parseInt(req.params.id));
  rule.likes = rule.likes + 1;
  res.json(rule);
  res.end();
});

app.post("/rest/dislikes/:id", (req, res) => {
  let rule = rules.find((rule) => rule.id === parseInt(req.params.id));
  rule.dislikes = rule.dislikes + 1;
  res.json(rule);
  res.end();
});

const port = 4000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
