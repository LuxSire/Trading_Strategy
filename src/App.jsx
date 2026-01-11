
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EmailAccess from './EmailAccess';
import Trading from './Trading';

function App() {
  return (
    <BrowserRouter basename={import.meta.env.MODE === 'production' ? '/LuxSire' : '/LuxSire'}>
      <Routes>
        <Route path="/" element={<Trading />} />
        <Route path="/performance" element={<Trading />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;