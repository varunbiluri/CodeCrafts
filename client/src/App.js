import './App.css';
import Adminmain from './main/adminmain';
import Usermain from './main/usermain';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/admin/*' element={<Adminmain />} />
        <Route path='/*' element={<Usermain />} />
      </Routes>
    </div>
  );
}

export default App;
