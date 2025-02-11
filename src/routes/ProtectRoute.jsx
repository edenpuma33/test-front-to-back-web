import { useEffect, useState } from "react";
import useAuthStore from "../store/auth-store";
import { actionCurrentUser } from "../api/auth";

const ProtectRoute = ({ el, allows }) => {
  const [ok, setOk] = useState(null);
  const token = useAuthStore((state) => state.token);

  useEffect(() => {
    checkPermission();
  }, []);

  const checkPermission = async () => {
    try {
      const res = await actionCurrentUser(token);
    // Role from back-end
      const role = res.data.result.role;

      setOk(allows.includes(role))
    } catch (error) {
      console.log(error);
      setOk(false);
    }
  };
  console.log(ok);
  if (ok === null) {
    return <h1>Loading...</h1>;
  }
  if (!ok) {
    return <h1>Unauthorized!!!</h1>;
  }

  return el;
};
export default ProtectRoute;
