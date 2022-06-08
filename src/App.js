import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './Pages/Dashboard';
import DetailedPage from './Pages/Core/DetailedPage';
import Login from './Security/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/nextstep/:id" element={<DetailedPage/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
