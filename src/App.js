
import './App.css';
import {Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home'
import Product from './components/Product'
import Contact from './components/Contact'


function App() {
  return (
    <div className="App">

      <Navbar/>

      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/product' element={<Product/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
