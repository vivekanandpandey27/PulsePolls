import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

return (<div>
    <Routes>
        <Route path ="/" element = { <HomePage/>} />
        <Route path ="/login" element = {<LoginPage/>}/>
        <Route path ="/signup" element = {<SignUp/>}/>
        
    </Routes>

</div>)

}

export default App
