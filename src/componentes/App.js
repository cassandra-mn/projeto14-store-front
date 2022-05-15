import {BrowserRouter, Routes, Route} from 'react-router-dom';

import HomePage from './HomePage';
import CartPage from './CartPage';
import ProductPage from './ProductPage';
import CheckoutPage from './CheckoutPage';
import CollectionPage from './CollectionPage';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/cart' element={<CartPage />} />
                <Route path='/checkout' element={<CheckoutPage />} />
                <Route path='/product/:id' element={<ProductPage />} />
                <Route path='/collection/:id' element={<CollectionPage />} />
            </Routes>
        </BrowserRouter>
    );
}