import { useContext } from "react";

import classes from "./notification.module.css";
import NotificationContext from "../../store/notification-context";

function Notification(props) {
  const notificationCtx = useContext(NotificationContext);

  function hideHandler() {
    notificationCtx.hideNotification();
  }

  const { title, message, status } = props;

  let statusClasses = "";

  if (status === "success") {
    statusClasses = classes.success;
  }

  if (status === "error") {
    statusClasses = classes.error;
  }

  if (status === "pending") {
    statusClasses = classes.pending;
  }

  const activeClasses = `${classes.notification} ${statusClasses}`;

  return (
    <div className={activeClasses} onClick={hideHandler}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  );
}

export default Notification;
