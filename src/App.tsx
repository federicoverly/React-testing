import "./App.css";
import { Greet } from "./components/Greet/Greet";
import { Application } from "./components/Application/Application";

function App() {
  return (
    <div className="App">
      <Greet />
      <Application />{" "}
    </div>
  );
}

export default App;
