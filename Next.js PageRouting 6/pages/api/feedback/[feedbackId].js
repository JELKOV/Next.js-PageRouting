import { buildFeedbackPath, extractFeedback } from '../feedback/index';

function handler(req, res) {
  const feedbackId = req.query.feedbackId; // URL의 동적 세그먼트

  const filePath = buildFeedbackPath();
  const feedbackData = extractFeedback(filePath);

  const selectedFeedback = feedbackData.find((feedback) => feedback.id === feedbackId);

  res.status(200).json({ feedback: selectedFeedback });
}

export default handler;
