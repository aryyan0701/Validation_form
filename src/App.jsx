import SignupForm from "./Components/SignupForm"
import Header from "./Components/Header"
import LoginForm from "./Components/LoginForm"
import { Routes, Route } from 'react-router-dom';


function App() {
 

  return (
    <>
    <Header/>
   
      <Routes>
        <Route path="/" element={<SignupForm/>}/>
        <Route path="/login" element={<LoginForm/>}/>
      </Routes>
   
    
      
    </>
  )
}

export default App
