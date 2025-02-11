import { Outlet, Route, Routes } from "react-router";
import Layout from "../layouts/Layout";
import Home from "../pages/Home";
import Login from "../pages/auth/Login";
import Manage from "../pages/admin/Manage";
import Dashboard from "../pages/admin/Dashboard";
import HomeUser from "../pages/user/HomeUser";
import NotFound from "../pages/NotFound";
import Register1 from "../pages/auth/Register1";
import ProtectRoute from "./ProtectRoute";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        {/* Public */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<Login />} />
          <Route path="register" element={<Register1 />} />
          <Route path="login" element={<Login />} />
        </Route>

        {/* Private [USER] */}
        <Route
          path="user"
          element={<ProtectRoute el={<Layout />} allows={["USER"]} />}
        >
          <Route index element={<HomeUser />} />
        </Route>

        {/* Private [ADMIN] */}
        <Route
          path="admin"
          element={<ProtectRoute el={<Layout />} allows={["ADMIN"]} />}
        >
          <Route index element={<Dashboard />} />
          <Route path="manage" element={<Manage />} />
        </Route>

        <Route
          path="*"
          element={
            <h1>
              <NotFound />
            </h1>
          }
        />
      </Routes>
    </>
  );
};
export default AppRoutes;
