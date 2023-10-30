import {HashRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import NoPage from './pages/NoPage';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
function App() {
  return (
    <HashRouter basename='/'>
    <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="*" element={<NoPage/>}/>
      </Routes>
    <Footer/>
    </HashRouter>
  );
}

export default App;
