import {HashRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import './css/index.css';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import WishList from './pages/WishList';
import NoPage from './pages/NoPage';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
function App() {
  return (
    <div className='App'>
      <HashRouter basename='/'>
        <NavBar/>
        <div className='page-content'>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/wish-list" element={<WishList/>}/>
            <Route path="*" element={<NoPage/>}/>
          </Routes>
        </div> 
        <Footer/>
      </HashRouter>
    </div>
  );
}

export default App;
