import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import TopBar from "./Components/Navbar/TopBar";
import { Routes, Route } from "react-router-dom";
import Property from "./Components/Home/Property/Property";
import Chat from "./Components/Chat/Chat";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
import Dashboard from "./Components/Dashboard/Dashboard";
import Lead from "./Components/Lead/Lead";
import Profile from "./Components/Profile/Profile";
import BasicInfo from "./Components/Upload/BasicInfo";
import BasicInformation from "./Components/Upload/BasicInformation";
import Plan from "./Components/Upload/Plan";
import Amenties from "./Components/Upload/Amenties";
import Legal from "./Components/Upload/Legal";
import Project from "./Components/Upload/Project";
import BuldierProfile from "./Components/Upload/BuldierProfile";
import Congratulation from "./Components/Upload/Congratulation";

function App() {
  return (
    <div className="App">
      {/* <TopBar /> */}

      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/dashboard" element={<Navbar />}>
          <Route index element={<Dashboard />} />
          <Route path="property" element={<Property />} />
          <Route path="chat" element={<Chat />} />

          <Route path="lead" element={<Lead />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="/userInfo" element={<BasicInfo />}>
          <Route index element={<BasicInformation />} />
          <Route path="plan" element={<Plan />} />
          <Route path="amenties" element={<Amenties />} />
          <Route path="legal" element={<Legal />} />
          <Route path="project" element={<Project />} />
          <Route path="builder" element={<BuldierProfile />} />
        </Route>
        <Route path="/congratulation" element={<Congratulation />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
