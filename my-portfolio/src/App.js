import './App.css';
import Header from './Pages/Header/Header'
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/'  element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
