import express from "express";
import data from "./data/mock.json" assert { type: "json" };
import { getUsers, addUser } from "./dbconnection.js";

const app = express();

let PORT = process.env.PORT || 3000;
app.use(express.static("public"));
app.use(express.json());

app.get("/api", async (req, res) => {
  res.json(await getUsers());
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
  .delete((req, res) => {
    res.send("This is a DELETE request at /api/user/:id");
  });

app.post("/api", async (req, res) => {
  //res.send("This is a POST request at /api");
  const user = req.body;
  const acknowledged = await addUser(user);
  acknowledged
    ? res.send("User added successfully!")
    : res.status(500).send("Sorry, user could not be added.");
});

app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).send("Something went wrong, please try again later");
});

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
