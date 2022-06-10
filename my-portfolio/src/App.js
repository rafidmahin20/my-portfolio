import './App.css';
import Header from './Pages/Header/Header'
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home'
import Footer from './Pages/Footer/Footer';
import ContactMe from './Pages/Contact/ContactMe';
import AboutMe from './Pages/About/AboutMe';
import Blogs from './Pages/Blogs/Blogs';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/'  element={<Home/>}/>
        <Route path='/aboutme' element={<AboutMe/>}/>
        <Route path='/blogs' element={<Blogs/>}/>
        <Route path='/contactme' element={<ContactMe/>}/>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
