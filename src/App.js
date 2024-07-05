import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import Analytics from "./Analytics";
import Management from "./Management";
import Settings from "./Settings";

function App() {
  return (
    <Router>
      <div className="App">

        <div className="content">
          <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/analytics" element={<Analytics/>}/>
            <Route path="/management" element={<Management/>}/>
            <Route path="/settings" element={<Settings/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
