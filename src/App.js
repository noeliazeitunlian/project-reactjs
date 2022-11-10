import './styles.css';
import Cart from './components/Cart';
import "./components/NavBarStyles.css";
import Navbar from './components/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/itemListContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

export default function App(){
    return (
       <div className="App">
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path= '/' element={<ItemListContainer />} />
                <Route path= '/category/:id' element={<ItemListContainer />} />
                <Route path= '/cart' element={<Cart />} />
                <Route path= '/detail/:detailId' element={<ItemDetailContainer />} />
            </Routes>
           
            
           
        </BrowserRouter>
       
       </div>
    )
}