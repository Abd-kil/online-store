import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import NoPage from './pages/NoPage';
import NavBar from './components/NavBar';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<NavBar/>}>
          <Route index element={<Home/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="*" element={<NoPage/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
  );
}

export default App;
