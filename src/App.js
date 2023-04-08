import './App.css';
import Businesses from './routes/Businesses';
import {Route,Routes} from 'react-router-dom';
import Marketplaces from './routes/Marketplaces';
import Company from './routes/Company';
import Resources from './routes/Resources';
import Signup from "./routes/Signup"
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Businesses/>}/>
        <Route path="/marketplaces" element={<Marketplaces/>}/>
        <Route path="/company" element={<Company/>}/>
        <Route path="/resources" element={<Resources/>}/>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
    </div>
  );
}
export default App;
