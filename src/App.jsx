
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EmailAccess from './EmailAccess';
import Trading from './Trading_Strategy';

function App() {
  return (
    <BrowserRouter basename={import.meta.env.MODE === 'production' ? '/Trading_Strategy' : '/Trading_Strategy'}>
      <Routes>
        <Route path="/" element={<EmailAccess />} />
        <Route path="/performance" element={<Trading />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;