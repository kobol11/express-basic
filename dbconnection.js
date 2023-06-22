import { MongoClient } from "mongodb";

const uri = "mongodb://localhost:27017";

export async function getUsers() {
  const client = new MongoClient(uri);
  try {
    const database = client.db("gci");
    const table = database.collection("users");
    const records = await table
      .find({}, { projection: { _id: 0 }, sort: { firstName: 1 } })
      .toArray();
    return records;
  } finally {
    client.close();
  }
}

export async function addUser(user) {
  const client = new MongoClient(uri);
  try {
    const database = client.db("gci");
    const table = database.collection("users");
    if (user) {
      const record = await table.insertOne({
        firstName: user.firstName || "",
        lastName: user.lastName || "",
        email: user.email || "",
      });
      console.log(record);
      return record.insertedId;
    }
  } finally {
    client.close();
  }
}

export async function removeUser(email) {
  const client = new MongoClient(uri);
  try {
    const database = client.db("gci");
    const table = database.collection("users");
    const user = await table.findOne({ email });
    if (user) {
      const record = await table.deleteOne({
        email,
      });
      console.log(record);
      return record.deletedCount;
    }
  } finally {
    client.close();
  }
}
