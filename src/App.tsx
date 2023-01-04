import "./App.css";
import { Greet } from "./components/Greet/Greet";
import { Application } from "./components/Application/Application";
import { Counter } from "./components/Counter/Counter";
import { AppProviders } from "./providers/AppProviders";
import { MuiMode } from "./components/mui/MuiMode";

function App() {
  return (
    <AppProviders>
      <div className="App">
        <Greet />
        <Application />
        <Counter />
        <MuiMode />
      </div>
    </AppProviders>
  );
}

export default App;
