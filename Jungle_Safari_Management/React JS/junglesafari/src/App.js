
import './App.css';
import {Route,Link, BrowserRouter } from 'react-router-dom';
import Home  from './components/Home';
import Login from './components/Login';
import Services from './components/Services';
import Register from './components/Register';
import Contact from './components/Contact';
import Admin from './components/Admin';
import User from './components/User';
import Navbar from './components/Navbar';
import About from './components/About';
import SearchPackage from './components/SearchPackage';
import Timeslot from './components/Timeslot';
import Pack from './components/PackageDisplay';
import AdminDashbord from './components/AdminDashbord';
import Bookingsave from './components/BookingSave';



  function App() {
    return (
      <div>
        <BrowserRouter>
       
        <Navbar></Navbar>
        <div>
            <Route path="/" component={Home} exact/>
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
            <Route path="/services" component={Services} />
            <Route path="/about" component={About}/>
            <Route path="/adminhome/" component={Admin} />
            <Route path="/userhome/:pkg_id" component={User} />
            <Route path="/package/" component={SearchPackage}/>
            <Route path="/timeslot/" component={Timeslot}/>
            <Route path="/packagedisp/" component={Pack}/>
            <Route path="/admindashbord/" component={AdminDashbord}/>
            <Route path="/contact/" component={Contact}/>
            <Route path="/bookingsave/" component={Bookingsave}/>
            

        </div>
        </BrowserRouter>
        </div>
      
        ); 
    }
  export default App;
