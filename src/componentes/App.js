import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './NavBar';

export default function App() {
    return (
        <BrowserRouter>
            <NavBar/>
            <Routes>
            </Routes>
        </BrowserRouter>
    );
}