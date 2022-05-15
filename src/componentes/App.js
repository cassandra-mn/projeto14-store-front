import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {useState} from 'react';

import HomePage from './HomePage';
import CartPage from './CartPage';
import ProductPage from './ProductPage';
import CheckoutPage from './CheckoutPage';
import CollectionPage from './CollectionPage';
import AmountContext from '../context/AmountContext';

export default function App() {
    const [amount, setAmount] = useState(1);

    return (
        <AmountContext.Provider value={{amount, setAmount}}>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/cart' element={<CartPage />} />
                <Route path='/checkout' element={<CheckoutPage />} />
                <Route path='/product/:id' element={<ProductPage />} />
                <Route path='/collection/:id' element={<CollectionPage />} />
            </Routes>
        </BrowserRouter>
        </AmountContext.Provider>
    );
}