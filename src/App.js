import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Navbar from './Components/Home/Navbar';
import Macbook from './Components/Product/Macbook/Macbook';
import Samsung from './Components/Product/Samsung/Samsung';
import Oneplus from './Components/Product/OnePlus/Oneplus';
import Iphone from './Components/Product/Iphone/Iphone';
import Watch from './Components/Product//Watch/Watch';
import Signup from './Components/Pages/Signup';


function App() {
  return (
    <div className="App bg-black">
      <Navbar></Navbar>
      <Routes>
        <Route path = '/' element = {<Home></Home>}></Route>
        <Route path = 'macbook' element = {<Macbook></Macbook>}></Route>
        <Route path = 'samsung' element = {<Samsung></Samsung>}></Route>
        <Route path = 'oneplus' element = {<Oneplus></Oneplus>}></Route>
        <Route path = 'iphone' element = {<Iphone></Iphone>}></Route>
        <Route path = 'watch' element = {<Watch></Watch>}></Route>
        <Route path = 'signup' element = {<Signup></Signup>}></Route>
      </Routes>
    </div>
  );
}

export default App;
