import "./App.css";
import { Routes, Route } from "react-router-dom";
import MainPage from "./features/main";
import Banner from "./features/banner";

function App() {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/banner" element={<Banner />} />
        </Routes>
    );
}

export default App;
