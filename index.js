import express from "express";
import data from "./data/mock.json" assert { type: "json" };
//console.log(data);
const app = express();

let PORT = process.env.PORT || 3000;

app.get("/api", (req, res) => {
  res.send(data);
});

app.put("/api/update", (req, res) => {
  res.send("This is a PUT request at /update");
});

app.post("/api/create", (req, res) => {
  res.send("This is a POST request at /create");
});

app.delete("/api/delete", (req, res) => {
  res.send("This is a DELETE request at /delete");
});

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
