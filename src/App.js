
import './App.css';
import { Routes, Route } from "react-router-dom";
import "./assets/scss/style.scss";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import HomePage from './pages/HomePage';
import About from './pages/About';

function App() {
  return (
  
      <Routes>
                <Route exact path='/' element={< HomePage />}></Route>
                <Route exact path='/about' element={< About />}></Route>
        </Routes>

  );
}

export default App;
