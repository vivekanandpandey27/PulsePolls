import { useState } from 'react'
import './App.css'
import{Routes , Route} from 'react-router-dom';
import LoginPage from './components/LoginPage';
import Signup from './components/SignUp';
import HomePage from './components/HomePage';
import Myprofile from './components/MyProfile';
import Editprofile from  './components/editProfile'
import CreatPoll from './components/CreatePoll'


// import goToProfile from './components/goToProfile';
// import goToCompleted from './components/goToCompleted';
// import goToMyPolls from './components/goToMyPolls';
// import goToTrending from './components/goToTrending';


function App() {
return (<div>
    <Routes>
        { <Route path ="/" element = { <HomePage/>} />}
        <Route path ="/login" element = {<LoginPage/>}/>
        <Route path ="/signup" element = {<Signup/>}/>
        <Route path = "/profile" element = {<Myprofile/>}/>
        <Route path ="/editprofile"   element  = {<Editprofile/>}/>
        <Route path ="/creatpoll" element ={<CreatPoll/>}/>



        <Route path="/goToProfile" element={<goToProfile />} />
        <Route path="/goToTrending" element={<goToTrending />} />
        <Route path="/goToMyPolls" element={<goToMyPolls />} />
        <Route path="/goToCompleted" element={<goToCompleted />} />
        
    </Routes>

</div>)
}

export default App
