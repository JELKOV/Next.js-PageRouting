import { useEffect, useState, useContext } from "react";

import CommentList from "./comment-list";
import NewComment from "./new-comment";
import classes from "./comments.module.css";
import NotificationContext from "../../store/notification-context";

function Comments(props) {
  const notificationCtx = useContext(NotificationContext);

  const { eventId } = props;

  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (showComments) {
      setIsLoading(true);
      fetch(`/api/comments/${eventId}`)
        .then((res) => res.json())
        .then((data) => {
          setComments(data.comments);
          setIsLoading(false);
        })
        .catch(() => setIsLoading(false));
    }
  }, [showComments, eventId]);

  function toggleCommentsHandler() {
    setShowComments((prevStatus) => {
      const newStatus = !prevStatus;

      // 댓글을 보이게 할 때만 fetch 다시 호출
      if (!prevStatus) {
        fetch(`/api/comments/${eventId}`)
          .then((res) => res.json())
          .then((data) => setComments(data.comments));
      }

      return newStatus;
    });
  }

  function addCommentHandler(commentData) {
    notificationCtx.showNotification({
      title: "Registering...",
      message: "Registering your comment.",
      status: "pending",
    });
  
    fetch(`/api/comments/${eventId}`, {
      method: "POST",
      body: JSON.stringify(commentData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          return res.json().then((data) => {
            throw new Error(data.message || "Something went wrong!");
          });
        }
        return response.json();
      })
      .then((data) => {
        notificationCtx.showNotification({
          title: "Success!",
          message: "Your comment was saved successfully.",
          status: "success",
        });
  
        // 새 댓글 등록 후 다시 댓글 목록 갱신
        return fetch(`/api/comments/${eventId}`);
      })
      .then((response) => response.json())
      .then((data) => setComments(data.comments))
      .catch((error) => {
        notificationCtx.showNotification({
          title: "Error!",
          message: error.message || "Failed to save comment.",
          status: "error",
        });
      });
  }

  return (
    <section className={classes.comments}>
      <button onClick={toggleCommentsHandler}>
        {showComments ? "Hide" : "Show"} Comments
      </button>
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {showComments && !isLoading &&<CommentList items={comments} />}
      {showComments && isLoading && <p>Loading comments...</p>}
    </section>
  );
}

export default Comments;
