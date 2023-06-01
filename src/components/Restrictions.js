import IneqSelector from "./IneqSelector";

const Restriction = ({ values, handleChange, row }) => {
  function handleValueChange(i, value) {
    handleChange(row, i, value);
  }

  const var_coefs = values.slice(0, -2);
  const ineq = values.slice(-2, -1)[0];
  const var_results = values.slice(-1);

  return (
    <div className="restriction">
      {[...Array(var_coefs.length)].map((e, j) => (
        <input
          key={j}
          value={var_coefs[j]}
          onChange={(e) => handleValueChange(j, e.target.value)}
        />
      ))}
      <IneqSelector
        value={ineq}
        handleChange={(val) => handleValueChange(values.length - 2, val)}
      />
      <input
        value={var_results}
        onChange={(e) => handleValueChange(values.length - 1, e.target.value)}
      />
    </div>
  );
};

const Restrictions = ({ handleChange, matrix }) => {
  return (
    <div className="restrictions">
      {[...Array(matrix.length)].map((e, i) => (
        <Restriction
          key={i}
          handleChange={handleChange}
          row={i}
          values={matrix[i]}
        />
      ))}
    </div>
  );
};

export default Restrictions;
