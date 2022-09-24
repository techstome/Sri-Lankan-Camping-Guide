import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Campsite from "./pages/campsite/Campsite";
import List from "./pages/list/List";
import Login from "./pages/login/Login";
import Event from "./pages/event/Event";
import Event_upcoming from "./pages/event_upcoming/event_upcoming";
import RegistrationForm from "./pages/registration/RegistrationForm";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/campsites" element={<List/>}/>
        <Route path="/campsites/:id" element={<Campsite/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/event" element={<Event/>}/>
        <Route path="/event_upcoming" element={<Event_upcoming/>}/>
        
        <Route path="/registration" element={<RegistrationForm/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;