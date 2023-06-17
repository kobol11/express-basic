import express from "express";

const app = express();

let PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
