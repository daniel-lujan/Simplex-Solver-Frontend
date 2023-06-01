import { useRef } from "react";
import "./App.css";
import CoefInput from "./components/CoefInput";
import { useMutation } from "react-query";
import { solve } from "./api/fetchers";
import ErrorMessage from "./components/ErrorMessage";

function App() {
  const coefficients = useRef();

  const { mutate, isLoading, data, isError } = useMutation({
    mutationKey: "solve",
    mutationFn: solve,
  });

  return (
    <>
      <p className="title" style={{ marginBottom: "28px" }}>
        Simplex Solver
      </p>
      <CoefInput ref={coefficients} />
      <div style={{ display: "flex", gap: "24px" }}>
        <button
          onClick={() =>
            mutate({
              restrictions: coefficients.current.restrictions,
              objective: coefficients.current.objFun,
            })
          }
          disabled={isLoading}
        >
          Solucionar
        </button>
        <button
          onClick={() =>
            mutate({
              restrictions: coefficients.current.restrictions,
              objective: coefficients.current.objFun,
              as_image: true,
            })
          }
          disabled={isLoading}
        >
          Solucionar gráficamente
        </button>
      </div>
      {data instanceof Blob && (
        <img src={URL.createObjectURL(data)} alt="solution" />
      )}
      {Array.isArray(data) && (
        <div style={{ marginBottom: "36px" }}>
          {data.map((e, i) => (
            <p key={i}>
              {i !== data.length - 1 ? (
                <>
                  X<sub>{i + 1}</sub> = {e}
                </>
              ) : (
                <>Z = {e}</>
              )}
            </p>
          ))}
        </div>
      )}
      {isError && <ErrorMessage text="NO SE PUDO RESOLVER" />}
    </>
  );
}

export default App;
