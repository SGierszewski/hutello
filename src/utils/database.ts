import { MongoClient } from "mongodb";

export const connectDatabase = async (url: string): Promise<void> => {
  const client = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  await client.connect();
  const databasesList = await client.db().admin().listDatabases();
  console.log(databasesList);
};
