import { useState } from "react";
import "./CoefInput.css";
import Restrictions from "./Restrictions";

const CoefInput = () => {
  function handleChange(i, j, value) {
    value = value === "" ? 0 : value;
    const newCoefficients = [...coefficients];
    newCoefficients[i][j] = parseInt(value);
    setCoefficients(newCoefficients);
  }

  const [coefficients, setCoefficients] = useState([
    [1, 2, 3, 1, 4],
    [4, 5, 6, -1, 6],
    [7, 8, 9, 0, 8],
  ]);

  return (
    <div className="coef-input">
      <div className="parameters">
        <div className="parameter">
          <p>Variables</p>
          <input />
        </div>
        <div className="parameter">
          <p>Restricciones</p>
          <input />
        </div>
      </div>
      <Restrictions
        handleChange={handleChange}
        numberRest={2}
        matrix={coefficients}
      />
    </div>
  );
};

export default CoefInput;
