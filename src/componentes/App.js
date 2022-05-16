import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Header from './Header';
import HomePage from './HomePage';
import SignInPage from './SignInPage';
import SignUpPage from './SignUpPage';
import CartPage from './CartPage';
import ProductPage from './ProductPage';
import CheckoutPage from './CheckoutPage';
import CollectionPage from './CollectionPage';
import CollectionsPage from './CollectionsPage';



export default function App() {
    return (
        <BrowserRouter>
            <Header/>.
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/signin' element={<SignInPage/>}/>
                <Route path='/signup' element={<SignUpPage/>}/>
                <Route path='/cart' element={<CartPage />} />
                <Route path='/checkout' element={<CheckoutPage />} />
                <Route path='/product/:id' element={<ProductPage />} />
                <Route path='/collections' element={<CollectionsPage />} />
                <Route path='/collection/:id' element={<CollectionPage />} />
            </Routes>
        </BrowserRouter>
    );
}