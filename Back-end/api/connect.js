import { MongoClient } from "mongodb";

const URI = process.env.MONGODB_URI;

if (!URI) {
  throw new Error("Defina MONGODB_URI no arquivo Back-end/.env.");
}

const client = new MongoClient(URI, { serverSelectionTimeoutMS: 10_000 });

export const db = client.db(process.env.MONGODB_DB_NAME || "spotifyAula");
