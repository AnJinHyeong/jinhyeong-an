import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './pages/Main';

import './css/common.css'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Main/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
