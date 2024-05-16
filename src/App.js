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
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import About from './pages/About';
import CheckOut from './pages/CheckOut';
import ScrollToTop from './ScrollToTop';
import ProductDetails from './pages/ProductDetails';
import { AuthProvider } from './context/AuthProvider';
function App() {
  
  return (
    <AuthProvider>
    <div className='App'>
      <HashRouter basename='/'>
        <ScrollToTop/>
        <NavBar/>
        <div className='page-content'>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path="/sign-up" element={<SignUp/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/wish-list" element={<WishList/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/check-out" element={<CheckOut/>}/>
            <Route path='/product-details' element={<ProductDetails/>}/>
            <Route path="*" element={<NoPage/>}/>
          </Routes>
        </div> 
        <Footer/>
      </HashRouter>
    </div>
    </AuthProvider>
  );
}

export default App;
