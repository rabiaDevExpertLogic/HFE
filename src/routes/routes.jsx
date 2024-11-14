import { Routes , Route } from "react-router-dom"
import Home from "../pages/home"
import SignIn from "../pages/auth/sign-in"
import SignUp from "../pages/auth/sign-up"
import About from "../pages/about"
import ContactUs from "../pages/contact-us"


export default function AppRoutes() {
  return <>
    
        <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/sign-in" element={<SignIn />}/>
        <Route path="/sign-up" element={<SignUp />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact-us" element={<ContactUs />}/>
        </Routes>
    </>
}