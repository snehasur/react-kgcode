import { useEffect } from "react";

const SuccessMessage = ({ message, type, onClose }) => {
  // Automatically close the message after 3 seconds
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        onClose(); // Call the onClose prop to clear the message
      }, 3000); // Change time as needed (e.g., 3000ms = 3 seconds)

      return () => clearTimeout(timer); // Clear the timer on component unmount
    }
  }, [message, onClose]);

  if (!message) return null;

  const alertType = type === "success" ? "alert-success" : "alert-danger";

  return (
    <div
      className={`alert ${alertType} alert-dismissible fade show`}
      role="alert">
      {message}
      <button
        type="button"
        className="btn-close"
        aria-label="Close"
        onClick={onClose}></button>
    </div>
  );
};

export default SuccessMessage;
