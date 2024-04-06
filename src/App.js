import Headers from './components/Headers';
import CartDetails from './components/CartDetails';
import Home from './components/Home';
import './App.css';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import { Route, Routes } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div>
        <Headers/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/cart' element={<CartDetails/>} />
          <Route path='/signup' element={<SignUp/>} />
          <Route path='/signin' element={<SignIn/>} />
        </Routes>
        <Toaster/>
    </div>
  );
}

export default App;
