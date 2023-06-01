const ObjFun = ({ values, handleChange }) => {
  function handleValueChange(i, value) {
    handleChange(i, value);
  }

  return (
    <div className="restriction">
      {[...Array(values.length)].map((e, j) => (
        <input
          key={j}
          value={values[j]}
          onChange={(e) => handleValueChange(j, e.target.value)}
        />
      ))}
    </div>
  );
};

export default ObjFun;
