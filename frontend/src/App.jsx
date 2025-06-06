import { useState } from 'react'
import './App.css'
import{Routes , Route} from 'react-router-dom';
import LoginPage from './components/LoginPage';
import Signup from './components/SignUp';
import { PollBox } from './components/PollBox';
import { HomePage } from './components/HomePage';
import { CreatePoll } from './components/CreatePoll';

function App() {
return (<div>
    <Routes>
        <Route path ="/" element = { <PollBox/>} />
        <Route path = "/Poll" element = {<PollBox/>}/>
        <Route path ="/login" element = {<LoginPage/>}/>
        <Route path ="/signup" element = {<Signup/>}/>
        <Route path = "/CreatePoll" element = {<CreatePoll/>} /> 
        
    </Routes>

</div>)
}

export default App
