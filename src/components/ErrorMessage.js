import "./ErrorMessage.css";

const ErrorMessage = ({ text }) => {
  return (
    <div className="error">
      <p>{text}</p>
    </div>
  );
};

export default ErrorMessage;
