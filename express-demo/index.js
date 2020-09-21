const express = require("express");

const app = express();

//methods corresponds to HTTP methods
// app.get()
// app.post()
// app.put()
// app.delete()

const courses = [
  { id: 1, name: "c1" },
  { id: 2, name: "c2" },
  { id: 3, name: "c3" },
];

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/api/courses", (req, res) => {
  res.send([1, 2, 3]);
});

app.get("/api/courses/:id", (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course) res.status(404).send("the course not found"); // 404
  res.send(course);
});

//port
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
