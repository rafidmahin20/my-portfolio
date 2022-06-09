import './App.css';
import Header from './Pages/Header/Header'
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home'
import Footer from './Pages/Footer/Footer';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/'  element={<Home/>}/>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
