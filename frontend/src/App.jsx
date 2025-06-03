import { useState } from 'react'
import './App.css'
import SignupForm from './components/Signup'
import HomePage from './components/HomePage'
import Login from './components/Login'
import { Routes, Route } from 'react-router-dom';


function App() {

return (<div>
    <Routes>
        <Route path ="/" element = {<HomePage/>} />
        <Route path ="/login" element = {<Login/>}/>
        <Route path ="/signup" element = {<SignupForm/>}/>
    </Routes>

</div>)
}

export default App
