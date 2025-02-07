import { Link } from "react-router"

const MainNav = () => {
  return (
    <nav className="bg-green-800 text-white p-10 flex justify-between
    font-semibold px-8 py-2 rounded-md shadow">
        <div className="flex gap-10">
            <Link to = "/">Home</Link>
            <Link to = "/about">About</Link>
        </div>
        <div className="flex gap-10">
            <Link to = "/register">Register</Link>
            <Link to = "/login">Login</Link>
        </div>
    </nav>
  )
}
export default MainNav