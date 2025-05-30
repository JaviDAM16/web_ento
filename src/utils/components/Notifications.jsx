import { useState, useEffect } from "react";
import "./Notifications.scss";

export const Notifications = () => {
  const [message, setMessage] = useState("");
  const [visible, setVisible] = useState(false);

  // Listen to show-notification event to trigger the notification
  useEffect(() => {
    const showNotification = (data) => {
      setMessage(data.detail.message);
      setVisible(true);
      setTimeout(() => setVisible(false), 3000); // Hide notification after 3 seconds
    };

    window.addEventListener("show-notification", showNotification);

    return () => {
      window.removeEventListener("show-notification", showNotification);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className="notification">
      <p>{message}</p>
    </div>
  );
};
