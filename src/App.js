
import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Navbar from './components/Navbar';
import {Provider} from 'react-redux'
import store from './store/store';
import LandingPage from './pages/LandingPage';
function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<LandingPage/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
      </Routes>
      </BrowserRouter>
      </Provider>
     
    </div>
  );
}

export default App;
