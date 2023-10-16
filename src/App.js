import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import NoPage from './pages/NoPage';
import NavBar from './components/NavBar';
function App() {
  return (
    <Router>
    <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="*" element={<NoPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
