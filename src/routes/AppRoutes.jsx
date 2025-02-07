import { Outlet, Route, Routes } from "react-router"
import Layout from "../layouts/Layout"
import Home from "../pages/Home"
import Login from "../pages/auth/Login"
import Register from "../pages/auth/Register"
import Manage from "../pages/admin/Manage"
import Dashboard from "../pages/admin/Dashboard"
import HomeUser from "../pages/user/HomeUser"
import NotFound from "../pages/NotFound"

const AppRoutes = () => {
  return (
    <>
     <Routes>
        {/* Public */}
        <Route path ="/" element={<Layout/>}>
            <Route index element = {<h1><Home/></h1>}/> 
            <Route path = "about" element = {<h1><Login/></h1>}/> 
            <Route path = "register" element = {<h1><Register/></h1>}/>
            <Route path = "login" element = {<h1><Login/></h1>}/> 
        </Route>
        

        {/* Private [USER] */}
        <Route path = "user" element={<Layout/>}>
            <Route index element = {<h1><HomeUser/></h1>} /> 
        </Route>

        {/* Private [ADMIN] */}
        <Route path ="admin" element={<Layout/>}>
            <Route index element = {<h1><Dashboard/></h1>}/> 
            <Route path = "manage" element = {<h1><Manage/></h1>}/> 
        </Route>

        <Route path = "*" element = {<h1><NotFound/></h1>}/> 
     </Routes>  
    </>
  )
}
export default AppRoutes