import { Outlet } from "react-router"
import MainNav from "../components/MainNav"

 {/* <Outlet/> ทำให้ component child ตามมา */}
const Layout = () => {
  return (
    <div>
        <MainNav/>
        <Outlet/>
    </div>
  )
}
export default Layout