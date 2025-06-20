import { useState } from 'react'
import './App.css'
import{Routes , Route, Router} from 'react-router-dom';
import LoginPage from './components/LoginPage';
import Signup from './components/Signup'
import HomePage from './components/HomePage';
import Myprofile from './components/MyProfile';
import Editprofile from  './components/editProfile'
import CreatePoll from './components/CreatePoll';
import { MyPolls } from './components/myPolls';
import { Completed_Poll } from './components/Completed_Poll';
import { Header_box } from './components/Header_box';
import { useSelector,useDispatch } from 'react-redux';
import OthersProfile from './components/OthersProfile';
import { useLocation } from 'react-router-dom';



function App() {

    const location = useLocation();
    const pathname = location.pathname;
    //console.log("Location: ",location);

return (<div>
    {
        pathname === "/OthersProfile" ? (null) : (    <Header_box className="min-h-screen min-w-full bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white"/>)
    }
    
    <Routes>
          <Route path ="/" element = { <HomePage/>} />
          <Route path ="/login" element = {<LoginPage/>}/>
          <Route path ="/signup" element = {<Signup/>}/>
          <Route path = "/profile" element = {<Myprofile/>}/>
          <Route path ="/editprofile"  element  = {<Editprofile/>}/>
          <Route path ="/CreatePoll"  element  = {<CreatePoll/>}/>
          <Route path = "/myPolls" element = {<MyPolls/>}/>
          <Route path="/Completed_Poll" element={<Completed_Poll/>} />
          <Route path ="/OthersProfile" element = {<OthersProfile/>}/>


          <Route path="/goToProfile" element={<goToProfile />} />
          <Route path="/goToTrending" element={<goToTrending />} />
          <Route path="/goToMyPolls" element={<goToMyPolls />} />
          
        
    </Routes>

</div>)
}

export default App
