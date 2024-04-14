import Navbar from "./navbar";
import Home from "./Home";
import Remember from "./rem";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content"></div>
      <Home />
      <Remember />
    </div>
  );
}
export default App;
