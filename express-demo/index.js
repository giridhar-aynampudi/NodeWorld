const express = require("express");
const Joi = require("joi");
const app = express();

app.use(express.json());

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
  res.send(courses);
});

// app.post("/api/courses", (req, res) => {
//   const schema = {
//     name: Joi.string().min(3).required(),
//   };
//   const result = Joi.validate(req.body, schema);
//   //   console.log(result);
//   if (result.error) {
//     res.status(400).send(result.error.details[0].message);
//     return;
//   }
//   const course = {
//     id: courses.length + 1,
//     name: req.body.name,
//   };
//   courses.push(course);
//   res.send(course);
// });

app.put("/api/courses/:id", (req, res) => {
  //look up the course
  // if not existing return 404
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course) res.status(404).send("the course not found"); // 404
  res.send(course);

  // validate
  // if invalid, return 400 (bad request)
  const schema = {
    name: Joi.string().min(3).required(),
  };

  const result = Joi.ValidationError(req.body, schema);
  if (result.error) {
    res.status(400).send(result.error.details[0].message);
    return;
  }
  //update
  // return updated courses
  course.name = req.body.name;
  res.send(course);
});
app.get("/api/courses/:id", (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course) res.status(404).send("the course not found"); // 404
  res.send(course);
});

app.delete("/api/courses/:id", (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course) res.status(404).send("the course not found"); // 404

  const i = courses.indexOf(course);
  courses.splice(i, 1);

  res.send(course);
});

//port
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
