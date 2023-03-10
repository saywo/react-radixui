import "./App.css";
import { Popover } from "./components/Popover";
import { Slider } from "./components/Slider";

function App() {
  return (
    <div className="App">
      <h1>Radix UI</h1>
      <section>
        <h2>Popover</h2>
        <div className="Content">
          <Popover />
        </div>
      </section>
      <section>
        <h2>Slider</h2>
        <div className="Content">
          <Slider />
        </div>
      </section>
    </div>
  );
}

export default App;
