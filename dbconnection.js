import { MongoClient } from "mongodb";

const uri = "mongodb://localhost:27017";

const client = new MongoClient(uri);

async function run() {
  try {
    const database = await client.db("gci");
    const table = database.collection("users");
    const record = await table.findOne({
      firstName: "Jason",
    });
    console.log(record);
  } finally {
    client.close();
  }
}

run();
