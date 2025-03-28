import { MongoClient, ServerApiVersion } from "mongodb";

export async function connectToDatabase() {
  const client = await MongoClient.connect(process.env.MONGODB_URI, {
    serverApi: ServerApiVersion.v1,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    tls: true,
  });

  return client;
}

// 댓글 삽입
export async function insertDocument(client, collection, document) {
  const db = client.db();
  const result = await db.collection(collection).insertOne(document);
  return result;
}

// 댓글 조회
export async function getAllDocuments(client, collection, sort, filter = {}) {
  const db = client.db();
  const documents = await db
    .collection(collection)
    .find(filter) 
    .sort(sort)
    .toArray();
  return documents;
}
