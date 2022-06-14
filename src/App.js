import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './Pages/Dashboard';
import DetailedPage from './Pages/Core/DetailedPage';
import Login from './Security/Login';
import Signup from './Security/Signup';
import OptionPage from './Pages/Core/OptionPage';
import ViewingPage from './Pages/Core/ViewingPage';
import DashboardAdd from './Pages/DashboardAdd';
import MainDBAdd from './Pages/Core/MainDBAdd';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/dashboard/add" element={<DashboardAdd/>}/>
        <Route path="/nextstep/:id" element={<DetailedPage/>}/>
        <Route path='/section/:option' element={<OptionPage/>}/>
        <Route path='/nextsteps/:id' element={<ViewingPage/>}/>
        <Route path='/allsection/mainadd' element={<MainDBAdd/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
