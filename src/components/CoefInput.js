import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import "./CoefInput.css";
import Restrictions from "./Restrictions";
import ObjFun from "./ObjFun";

const CoefInput = forwardRef((props, ref) => {
  function zeros(m, n) {
    const matrix = [];
    for (let i = 0; i < m; i++) {
      matrix.push([]);
      for (let j = 0; j < n; j++) {
        matrix[i].push(0);
      }
    }
    return matrix;
  }

  function handleChange(i, j, value) {
    value = value === "" ? 0 : value;
    const newCoefficients = [...coefficients];
    newCoefficients[i][j] = parseInt(value) || 0;
    setCoefficients(newCoefficients);
  }

  function handleObjFunChange(i, value) {
    value = value === "" ? 0 : value;
    const newObjFunCoefficients = [...objFunCoefficients];
    newObjFunCoefficients[i] = parseInt(value) || 0;
    setObjFunCoefficients(newObjFunCoefficients);
  }

  function handleVarChange(value) {
    value = parseInt(value);
    value ||= 2;
    value = value < 2 ? 2 : value;
    setNumberVar(value);
  }

  function handleRestChange(value) {
    value = parseInt(value);
    value ||= 1;
    value = value < 1 ? 1 : value;
    setNumberRest(value);
  }

  useImperativeHandle(ref, () => ({
    restrictions: coefficients,
    objFun: objFunCoefficients,
  }));

  const [coefficients, setCoefficients] = useState([
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ]);

  const [objFunCoefficients, setObjFunCoefficients] = useState([0, 0, 0]);

  const [numberRest, setNumberRest] = useState(3);
  const [numberVar, setNumberVar] = useState(3);

  useEffect(() => {
    setCoefficients(zeros(numberRest, numberVar + 2));
    setObjFunCoefficients(Array.from({ length: numberVar }, () => 0));
  }, [numberRest, numberVar]);

  return (
    <div className="coef-input">
      <div className="parameters">
        <div className="parameter">
          <p>Variables</p>
          <input
            value={numberVar}
            onChange={(e) => handleVarChange(e.target.value)}
          />
        </div>
        <div className="parameter">
          <p>Restricciones</p>
          <input
            value={numberRest}
            onChange={(e) => handleRestChange(e.target.value)}
          />
        </div>
      </div>
      <p className="separator">Función Objetivo</p>
      <ObjFun handleChange={handleObjFunChange} values={objFunCoefficients} />
      <p className="separator">Restricciones</p>
      <Restrictions handleChange={handleChange} matrix={coefficients} />
    </div>
  );
});

export default CoefInput;
