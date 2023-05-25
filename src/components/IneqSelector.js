import "./IneqSelector.css";

const IneqSelector = ({ value, handleChange }) => {
  return (
    <div className="selector">
      <div
        className={"ineq" + (value === -1 ? " selected" : "")}
        onClick={() => handleChange(-1)}
      >
        &#60;=
      </div>
      <div
        className={"ineq" + (value === 0 ? " selected" : "")}
        onClick={() => handleChange(0)}
      >
        =
      </div>
      <div
        className={"ineq" + (value === 1 ? " selected" : "")}
        onClick={() => handleChange(1)}
      >
        &#62;=
      </div>
    </div>
  );
};

export default IneqSelector;
