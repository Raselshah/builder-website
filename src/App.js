import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import TopBar from "./Components/Navbar/TopBar";
import { Routes, Route } from "react-router-dom";
import Property from "./Components/Home/Property/Property";
import Chat from "./Components/Chat/Chat";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
import Dashboard from "./Components/Dashboard/Dashboard";

function App() {
  return (
    <div className="App">
      {/* <TopBar /> */}

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/navbar" element={<Navbar />}>
          <Route path="property" element={<Property />} />
          <Route path="chat" element={<Chat />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
