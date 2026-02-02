import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Cart from './pages/Cart';
import Navbar from './components/Navbar';

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route element={<Home/>} path='/'></Route>
          <Route element={<Cart/>} path='/cart'></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
