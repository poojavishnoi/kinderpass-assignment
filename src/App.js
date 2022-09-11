import './App.css';
import { Route, Routes } from "react-router-dom";
import Signup from './pages/Signup';
import Login from './pages/Login';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
    <Header/>
    <Routes>
        <Route path="/" element={<Signup/>} />  
        <Route path="/login" element={<Login/>} />  
        <Route path="/home" element={<Home/>} />  

    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
