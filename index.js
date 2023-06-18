import express from "express";
import data from "./data/mock.json" assert { type: "json" };
//console.log(data);
const app = express();

let PORT = process.env.PORT || 3000;
app.use(express.static("public"));

app.get("/api", (req, res) => {
  res.send(data);
});

app
  .route("/api/user/:id")
  .get((req, res) => {
    const userId = parseInt(req.params.id);
    const user = data.find((user) => user.id === userId);
    res.send(user);
  })
  .put((req, res) => {
    res.send("This is a PUT request at /api/user/:id");
  })
  .post((req, res) => {
    res.send("This is a POST request at /api/user/:id");
  })
  .delete((req, res) => {
    res.send("This is a DELETE request at /api/user/:id");
  });

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
