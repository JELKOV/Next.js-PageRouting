import { connectToDatabase, insertDocument } from "../../lib/db";

async function handler(req, res) {
  if (req.method === "POST") {
    const userEmail = req.body.email;

    if (!userEmail || !userEmail.includes("@")) {
      res.status(422).json({ message: "Invalid email address" });
      return;
    }

    let client;

    try {
      // DB 연결 시도
      client = await connectToDatabase();
    } catch (error) {
      console.error("❌ MongoDB 연결 실패:", error);
      res.status(500).json({ message: "Connecting to the database failed!!" });
      return;
    }

    try {
      // DB 삽입 시도 (이메일 삽입)
      await insertDocument(client, "emails", { email: userEmail });
      res.status(201).json({ message: "Successfully Signed up" });
    } catch (error) {
      console.error("❌ 문서 삽입 실패:", error);
      res.status(500).json({ message: "Inserting Data Failed!" });
    }

    client.close(); // 연결 종료
  }
}

export default handler;
