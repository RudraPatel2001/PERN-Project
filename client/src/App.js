import './css/app.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Products from './components/Products';
import Register from './components/Register';
import Login from './components/Login';
import Cart from './components/Cart';
import Profile from './components/Profile';
import Users from './components/Users';
import Edit from './components/Edit';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import ErrorRoute from './components/ErrorRoute';
import ThankYou from './components/ThankYou';
import RateUs from './components/RateUs';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path='/profile' element={<Profile />} />
        <Route path="/users" element={<Users />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="/success" element={<ThankYou />} />
        <Route path="/rateus" element={<RateUs />} />
        <Route path="*" element={<ErrorRoute />} />
      </Routes>
    </Router>
  );
}

export default App;
