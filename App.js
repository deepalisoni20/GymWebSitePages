import './App.css';
import { Navbar } from './Component/Navbar';
import { Footer } from './Component/Footer';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Header from './Pages/home/home';

const App = () => {
return (
    <>
    <Router>
            <Navbar/> 
            <Routes>
                <Route path="/" element={<Header/>}></Route>
             </Routes>
             <Footer/> 
    </Router>
   
    </>
);
};
export default App;