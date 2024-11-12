import { Routes , Route } from "react-router-dom"
import Home from "../pages/home"
import SignIn from "../pages/auth/sign-in"
import SignUp from "../pages/auth/sign-up"


export default function AppRoutes() {
  return <>
    
        <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/sign-in" element={<SignIn />}/>
        <Route path="/sign-up" element={<SignUp />}/>
        </Routes>
    </>
}