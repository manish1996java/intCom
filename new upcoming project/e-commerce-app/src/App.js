import './App.css';
import {BrowserRouter ,Routes ,Route} from 'react-router-dom';
import Home from './layouts/Home';
import Cart from './layouts/Cart';
import { Provider } from 'react-redux';
import store from './store/store';


function App() {
  return (
    <Provider store={store}>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/cart' element={<Cart/>}/>
          </Routes>
        </BrowserRouter>  
      </div>  
    </Provider>
  );
}

export default App;
