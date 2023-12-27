import { BrowserRouter, Route, Router } from 'react-router-dom';
import './App.css';
import Main from './pages/Main';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Router>
          <Route path='/' element={<Main/>} />
        </Router>
      </div>
    </BrowserRouter>
  );
}

export default App;
