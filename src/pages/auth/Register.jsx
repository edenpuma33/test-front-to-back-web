import { useState } from "react";
import axios from "axios";
import createAlert  from "../../utils/createAlert";

const Register = () => {
  // Javascript
  const obj = {
    email: "",
    firstname: "",
    lastname: "",
    password: "",
    confirmPassword: "",
  }
  const [value,setValue] = useState(obj)
  const hdlOnChange = (e) =>{
    // code body
    setValue({
      ...value,
      [e.target.name]: e.target.value
    })
  }

  const hdlSubmit = async(e) =>{
    e.preventDefault()
    try {
      const res = await axios.post("http://localhost:9999/api/register",value)
      console.log(res)
      createAlert("success","Register Success")
    } catch (error) {
      createAlert("info",error.response.data.message)
      console.log(error.response.data.message)
    }
  }

  return (
    <div className="flex w-full h-full justify-end">
      <div className="w-64 border p-4 rounded-md">
        <h1 className="text-xl font-bold text-center">Register</h1>

        {/* form */}
        <form onSubmit={hdlSubmit}>
          <div className="flex flex-col gap-2 py-4">
            <input 
            placeholder="Email"
            type="text"
            name="email"
            className="border w-full border-blue-800 rounded-md p-1 px-4"
            onChange = {hdlOnChange}
            />
            
            <input 
            placeholder="Firstname"
            type="text"
            name="firstname"
            className="border w-full border-blue-800 rounded-md p-1 px-4"
            onChange = {hdlOnChange}
            />
            <input 
            placeholder="Lastname"
            type="text"
            name="lastname"
            className="border w-full border-blue-800 rounded-md p-1 px-4"
            onChange = {hdlOnChange}
            />
            <input 
            placeholder="Password"
            type="text"
            name="password"
            className="border w-full border-blue-800 rounded-md p-1 px-4"
            onChange = {hdlOnChange}
            />
            <input 
            placeholder="Confirm Password"
            type="text"
            name="confirmPassword"
            className="border w-full border-blue-800 rounded-md p-1 px-4"
            onChange = {hdlOnChange}
            />
          </div>
          <div className="flex justify-center">
            <button className="bg-green-600 text-white px-2 py-1 rounded-md hover:cursor-pointer">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Register;
