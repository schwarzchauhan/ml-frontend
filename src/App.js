import logo from './logo.svg';
import './assets/styles/sass/App.scss';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signin from './View/Authentication/Signin'
import Home from "./View/Home";
import ProtectedRoute from './components/ProtectedRoute'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route  
          path="/" 
          element={
            <ProtectedRoute>
                <Home />
            </ProtectedRoute>
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;
