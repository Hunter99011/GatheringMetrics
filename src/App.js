import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./views/Login";
import Home from "./views/Home";
import Sessions from "./views/Sessions";
import Analytics from "./views/Analytics";
import Management from "./views/Management";
import Settings from "./views/Settings";

function App() {
  return (
    <Router>
      <div className="App">

        <div className="content">
          <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/sessions" element={<Sessions/>}/>
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
