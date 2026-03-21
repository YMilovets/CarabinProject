import { MongoClient } from "mongodb";

export default async function connectDB(database: string) {
  const client = new MongoClient(
    new URL(database, process.env.DB_HOST).toString()
  );

  await client.connect();
  return client;
}
