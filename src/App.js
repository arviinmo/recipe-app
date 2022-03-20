import Catagory from "./components/Catagory";
import Pages from "./pages/Pages";
import { BrowserRouter } from "react-router-dom";
import Search from "./components/Search";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Search />
        <Catagory />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
