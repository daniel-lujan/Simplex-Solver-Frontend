import "./App.css";
import CoefInput from "./components/CoefInput";

function App() {
  return (
    <>
      <p className="title" style={{ position: "absolute", top: "70px" }}>
        Simplex Solver
      </p>
      <CoefInput />
    </>
  );
}

export default App;
