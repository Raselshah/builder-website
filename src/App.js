import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import TopBar from "./Components/Navbar/TopBar";
import { Routes, Route } from "react-router-dom";
import Property from "./Components/Home/Property/Property";
import Chat from "./Components/Chat/Chat";

function App() {
  return (
    <div className="App">
      <TopBar />

      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="property" element={<Property />} />
          <Route path="chat" element={<Chat />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
