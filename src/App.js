import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css';
import Sub from './Subscription/Sub';
import Dashboard from './Pages/Dashboard';
import DetailedPage from './Pages/Core/DetailedPage';
import Login from './Security/Login';
import Signup from './Security/Signup';
import OptionPage from './Pages/Core/OptionPage';
import ViewingPage from './Pages/Core/ViewingPage';
import DashboardAdd from './Pages/DashboardAdd';
import MainDBAdd from './Pages/Core/MainDBAdd';
import Cartslice from './Features/cartslice';
import Checkout from './Pages/Core/Checkout';
import ViewDelivery from './MyOrders/ViewDelivery';
import More from './MyOrders/More';
import PageBugFix from './BugFixer/PageBugFix';
import RefundRequests from './MyOrders/RefundRequests';
import OrderUpdates from './MyOrders/OrderUpdates';
import RefundStatus from './MyOrders/Status/RefundStatus';
import OrderStatus from './MyOrders/Status/OrderStatus';
import NikeCore from './Pages/Core/NikeCore';
import Separate from './Pages/Core/Separate';
import MostPopular from './Pages/Core/MostPopular';
import Headers from './Common/Headers';
import Delivery from './Common/Delivery';
import Tees from './Summer/Tees';
import Chatbot from './ChatBot/Chatbots';

function App() {
  return (
    <div>
    <BrowserRouter>
    <PageBugFix>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/dashboard/add" element={<DashboardAdd/>}/>
        <Route path="/nextstep/:id" element={<DetailedPage/>}/>
        <Route path="/most/:id" element={<MostPopular/>}/>
        <Route path='/section/:option' element={<OptionPage/>}/>
        <Route path='/mostpopular/:gender' element={<Separate/>}/>
        <Route path='/nextsteps/:id' element={<ViewingPage/>}/>
        <Route path='/allsection/mainadd' element={<MainDBAdd/>}/>
        <Route path='/wishlist' element={<Cartslice/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='/myorders/:id' element={<ViewDelivery/>}/>
        <Route path='/checking' element={<More/>}/>
        <Route path='/refund' element={<RefundRequests/>}/>
        <Route path='/orderupdate' element={<OrderUpdates/>}/>
        <Route path='/refundstatus/:refundid' element={<RefundStatus/>}/>
        <Route path='/orderstatus/:id' element={<OrderStatus/>}/>
        <Route path='/AirJordanXXXVI' element={<NikeCore/>}/>
        <Route path='/delivery' element={<Delivery/>}/>
        <Route path='/subscription' element={<Sub/>}/>
        <Route path='/trail' element={<Tees/>}/>
        <Route path='/nikesupport' element={<Chatbot/>}/>
      </Routes>
      </PageBugFix>
    </BrowserRouter>
    </div>
  );
}

export default App;
