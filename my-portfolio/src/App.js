import './App.css';
import Header from './Pages/Header/Header'
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home'
import Footer from './Pages/Footer/Footer';
import ContactMe from './Pages/Contact/ContactMe';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/'  element={<Home/>}/>
        <Route path='/contactme' element={<ContactMe/>}/>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
