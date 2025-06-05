import { useState } from 'react'
import './App.css'
import{Routes , Route} from 'react-router-dom';
import LoginPage from './components/LoginPage';
import Signup from './components/SignUp';

function App() {
return (<div>
    <Routes>
        {/* <Route path ="/" element = { <HomePage/>} /> */}
        <Route path ="/login" element = {<LoginPage/>}/>
        <Route path ="/signup" element = {<Signup/>}/>
        
    </Routes>

</div>)
}

export default App
