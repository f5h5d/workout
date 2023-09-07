import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import SignUp from './pages/SignUp';
import 'bootstrap/dist/css/bootstrap.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/signup" exact element={<SignUp />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
