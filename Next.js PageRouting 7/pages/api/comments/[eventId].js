import {
  connectToDatabase,
  insertDocument,
  getAllDocuments,
} from "../../../lib/db";

async function handler(req, res) {
  const eventId = req.query.eventId;
  let client;

  try {
    // 공통적으로 DB 연결
    client = await connectToDatabase();

    if (req.method === "POST") {
      const { email, name, text } = req.body;

      // 유효성 검사
      if (!email.includes("@") || !name?.trim() || !text?.trim()) {
        res.status(422).json({ message: "Invalid input." });
        return;
      }

      const newComment = {
        email,
        name,
        text,
        eventId,
      };

      // DB 삽입
      const result = await insertDocument(client, "comments", newComment);
      newComment._id = result.insertedId;

      res.status(201).json({ message: "Added comment", comment: newComment });
    }

    if (req.method === "GET") {
      // 특정 이벤트에 해당하는 댓글만 가져오기
      const comments = await getAllDocuments(
        client,
        "comments",
        { _id: -1 },
        { eventId: eventId } 
      );

      res.status(200).json({ comments });
    }
  } catch (error) {
    // 공통 에러 처리
    console.error("❌ API 처리 에러:", error);

    res.status(500).json({
      message:
        req.method === "POST"
          ? "Inserting comment failed!"
          : "Getting comments failed!",
    });
  } finally {
    // 무조건 연결 종료
    if (client) {
      client.close();
    }
  }
}

export default handler;
