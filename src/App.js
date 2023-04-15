import "./App.css";
import Businesses from "./routes/Businesses";
import { Route, Routes } from "react-router-dom";
import Marketplaces from "./routes/Marketplaces";
import Company from "./routes/Company";
import Resources from "./routes/Resources";
import Signup from "./routes/Signup";
import SignupPatient from "./routes/Signuppatient";
import Listmynft from "./Listmynft";
import Dashboard from "./Dashboard";
import Transfernft from './Transfernft';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Businesses />} />
        <Route path="/marketplaces" element={<Marketplaces />} />
        <Route path="/company" element={<Company />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<SignupPatient />} />
        <Route path="/listmynft" element={<Listmynft />}></Route>
        <Route path="/profile" element={<Dashboard />}></Route>
        <Route path='/transfernft' element={<Transfernft/>}></Route>
      </Routes>
    </div>
  );
}
export default App;
