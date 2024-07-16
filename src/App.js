import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './com/home.js';
import Login from './com/login.js';

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path = '/' element={<Login> </Login>}></Route>
                    <Route path = '/home' element={<Home> </Home>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
