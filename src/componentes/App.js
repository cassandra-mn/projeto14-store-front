import {BrowserRouter, Routes, Route} from 'react-router-dom';

import HomePage from './HomePage';
import ProductPage from './ProductPage';
import CollectionPage from './CollectionPage';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/product/:id' element={<ProductPage />} />
                <Route path='/collection/:id' element={<CollectionPage />} />
            </Routes>
        </BrowserRouter>
    );
}