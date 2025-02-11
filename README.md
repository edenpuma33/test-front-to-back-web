# Client

### Step 1 Install React-Router
https://reactrouter.com/start/library/installation

```bash
npm i react-router
```

import { BrowserRouter } from 'react-router' 

### main.jsx
```js
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
```

### Step 2 Create Folder routes

/routes/AppRoutes.jsx
```js
import { Route, Routes } from "react-router"

const AppRoutes = () => {
  return (
    <>
     <Routes>
        {/* Public */}
        <Route path = "/" element = {<h1>Home</h1>}/> 
        <Route path = "about" element = {<h1>About</h1>}/>  
        <Route path = "register" element = {<h1>Register</h1>}/> 
        <Route path = "login" element = {<h1>Login</h1>}/> 
        

        {/* Private [USER] */}
        <Route path = "user" element = {<h1>Home User</h1>} /> 

        {/* Private [ADMIN] */}
        <Route path = "dashboard" element = {<h1>Dashboard</h1>}/> 
        <Route path = "manage" element = {<h1>Manage</h1>}/> 

        <Route path = "*" element = {<h1>404 Not Found</h1>}/> 
     </Routes>  
    </>
  )
}
export default AppRoutes
```


### Step 3 Update App.jsx

### App.jsx
```js
import AppRoutes from "./routes/AppRoutes"

const App = () => {
  return (
    <>
        <AppRoutes/>
    </>
  )
}
export default App
```

### Step 4 Update AppRoutes.jsx

/routes/AppRoutes.jsx

### AppRoutes.jsx
```js
import { Outlet, Route, Routes } from "react-router"
import Layout from "../layouts/Layout"
import Home from "../pages/Home"
import Login from "../pages/auth/Login"
import Register from "../pages/auth/Register"

const AppRoutes = () => {
  return (
    <>
     <Routes>
        {/* Public */}
        <Route path="/" element={<Layout/>}>
            <Route index element = {<h1><Home/></h1>}/> 
            <Route path = "about" element = {<h1><Login/></h1>}/> 
            <Route path = "register" element = {<h1><Register/></h1>}/>
            <Route path = "login" element = {<h1><Login/></h1>}/> 
        </Route>
        

        {/* Private [USER] */}
        <Route path = "user">
            <Route index element = {<h1>Home User</h1>} /> 
        </Route>

        {/* Private [ADMIN] */}
        <Route path="admin">
            <Route index element = {<h1>Dashboard</h1>}/> 
            <Route path = "manage" element = {<h1>Manage</h1>}/> 
        </Route>

        <Route path = "*" element = {<h1>404 Not Found</h1>}/> 
     </Routes>  
    </>
  )
}
export default AppRoutes
```
### Step 5 Create Folder layouts
/layouts/Layout.jsx

```js
import { Outlet } from "react-router"

 {/* <Outlet/> ทำให้ component child ตามมา */}
const Layout = () => {
  return (
    <div>
        Layout
        <hr/>
        <Outlet/>
        <hr/>
        <h1>Footer</h1>
    </div>
  )
}
export default Layout
```

### Step 6 Create Folder pages
/pages/Home.jsx

/pages/About.jsx


### Step 7 Create Folder auth
/pages/auth/Login.jsx

/pages/auth/Register.jsx

### Step 8 Update AppRoutes.jsx

### AppRoutes.jsx

```js
import { Outlet, Route, Routes } from "react-router"
import Layout from "../layouts/Layout"
import Home from "../pages/Home"
import Login from "../pages/auth/Login"
import Register from "../pages/auth/Register"
import Manage from "../pages/admin/Manage"
import Dashboard from "../pages/admin/Dashboard"
import HomeUser from "../pages/user/HomeUser"

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

        <Route path = "*" element = {<h1>404 Not Found</h1>}/> 
     </Routes>  
    </>
  )
}
export default AppRoutes
```


## Step 9 Create Folder component

/src/components/MainNav.jsx

## Step 10 Update Layout.jsx

### Layout.jsx

```js
import { Outlet } from "react-router"
import MainNav from "../components/MainNav"

 {/* <Outlet/> ทำให้ component child ตามมา */}
const Layout = () => {
  return (
    <div>
        <MainNav/>
        <hr/>
        <Outlet/>
        <hr/>
        <h1>Footer</h1>
    </div>
  )
}
export default Layout
```

## Step 11 Update MainNav.jsx

### MainNav.jsx

```js
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
```

## Step 12 Update Layout.jsx
### Layout.jsx
```js
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
```

## Step 13 Update Register.jsx
/pages/auth/Register.jsx

### Register.jsx

```js
import { useState } from "react";

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

  const hdlSubmit = (e) =>{
    e.preventDefault()
    console.log(value)
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
```

## Step 14 Install axios

```bash
npm i axios
```
## Step 15 Update Register.jsx

### Register.jsx
```js
import { useState } from "react";
import axios from "axios";

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
    } catch (error) {
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
```

## Step 16 Install Sweetalert2

```bash
npm install sweetalert2
```
import Swal from "sweetalert2";

## Step 17 Update Register.jsx
```js
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

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
      Swal.fire({
        icon: "success",
        text: "Register Success",
        timer: 2000
       });
    } catch (error) {
      Swal.fire({
     icon: "info",
     text: error.response.data.message,
     timer: 2000
    });
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

```
## Step 18 Create Folder utils
/utils/createAlert.jsx

```js
import Swal from "sweetalert2";

const createAlert = (icon, text) => {
  return Swal.fire({
    icon: icon || "info",
    text: text || "Something wrong!!!",
    timer: 2000,
  });
};
export default createAlert;
```

### Step 19 Update Register.jsx


import and use createAlert
### Register.jsx
```js
import { useState } from "react";
import axios from "axios";
import createAlert from "../../utils/createAlert";

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
```

## Step 20 React-Hook-form

http://react-hook-form.com

```bash
npm install react-hook-form
```

## Step 21 Create Register1.jsx

/pages/auth/Register1.jsx

```js
import { useState } from "react";
import axios from "axios";
import createAlert  from "../../utils/createAlert";

const Register1 = () => {
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
        <h1 className="text-xl font-bold text-center">Register1</h1>

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
            <button className="bg-green-600 text-white px-2 py-1 rounded-md hover:cursor-pointer">Register1</button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Register1;
```

update AppRoutes.jsx

### AppRoutes.jsx

```js
import { Outlet, Route, Routes } from "react-router"
import Layout from "../layouts/Layout"
import Home from "../pages/Home"
import Login from "../pages/auth/Login"
import Register from "../pages/auth/Register"
import Manage from "../pages/admin/Manage"
import Dashboard from "../pages/admin/Dashboard"
import HomeUser from "../pages/user/HomeUser"
import NotFound from "../pages/NotFound"
import Register1 from "../pages/auth/Register1"

const AppRoutes = () => {
  return (
    <>
     <Routes>
        {/* Public */}
        <Route path ="/" element={<Layout/>}>
            <Route index element = {<h1><Home/></h1>}/> 
            <Route path = "about" element = {<h1><Login/></h1>}/> 
            <Route path = "register" element = {<h1><Register1/></h1>}/>
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
```

## Step 21 Update Register1.jsx

/auth/Register.jsx

### Register.jsx

```js
import { useState } from "react";
import axios from "axios";
import createAlert  from "../../utils/createAlert";
import { useForm } from "react-hook-form"

const Register1 = () => {
  // Javascript

  const {register, handleSubmit} = useForm();

  const hdlSubmit = async(value) =>{

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
        <h1 className="text-xl font-bold text-center">Register1</h1>

        {/* form */}
        <form onSubmit={handleSubmit(hdlSubmit)}>
          <div className="flex flex-col gap-2 py-4">
            <input 
            placeholder="Email"
            type="text"
            {...register("email")}
            className="border w-full border-blue-800 rounded-md p-1 px-4"
            />
            
            <input 
            placeholder="Firstname"
            type="text"
            {...register("firstname")}
            className="border w-full border-blue-800 rounded-md p-1 px-4"
            />
            <input 
            placeholder="Lastname"
            type="text"
            {...register("lastname")}
            className="border w-full border-blue-800 rounded-md p-1 px-4"
            />
            <input 
            placeholder="Password"
            type="text"
            {...register("password")}
            className="border w-full border-blue-800 rounded-md p-1 px-4"
            />
            <input 
            placeholder="Confirm Password"
            type="text"
            {...register("confirmPassword")}
            className="border w-full border-blue-800 rounded-md p-1 px-4"
            />
          </div>
          <div className="flex justify-center">
            <button className="bg-green-600 text-white px-2 py-1 rounded-md hover:cursor-pointer">Register1</button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Register1;
```

## Step 22 Create folder form

create FormInput.jsx

/components/form/FormInput.jsx

### FormInput.jsx
```js
const FormInput = () => {
  return (
    <input 
    placeholder="Email"
    type="text"
    {...register("email")}
    className="border w-full border-blue-800 rounded-md p-1 px-4"
    />
  )
}
export default FormInput
```

Update Register1.jsx
เปลี่ยนมาใช้ FormInput
### Register1.jsx
```js
import { useState } from "react";
import axios from "axios";
import createAlert  from "../../utils/createAlert";
import { useForm } from "react-hook-form"
import FormInput from "../../components/form/FormInput";

const Register1 = () => {
  // Javascript

  const {register, handleSubmit} = useForm();

  const hdlSubmit = async(value) =>{

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
        <h1 className="text-xl font-bold text-center">Register1</h1>

        {/* form */}
        <form onSubmit={handleSubmit(hdlSubmit)}>
          <div className="flex flex-col gap-2 py-4">
            
          <FormInput register={register} name="email"/>
          <FormInput register={register} name="firstname"/>
          <FormInput register={register} name="lastname"/>
          <FormInput register={register} name="password"/>
          <FormInput register={register} name="confirmPassword"/>

          </div>
          <div className="flex justify-center">
            <button className="bg-green-600 text-white px-2 py-1 rounded-md hover:cursor-pointer">Register1</button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Register1;
```

## Step 23 Create Buttons.jsx

```js
const Buttons = ({isSubmitting,label}) => {
  return (
    <button className="bg-green-600 text-white px-2 py-1 rounded-md hover:cursor-pointer">
    {
        isSubmitting
        ? <p>Loading ...</p>
        : <p>{label}</p>
    }
    </button>
  )
}
export default Buttons
```

## Step 24 Update Register1.jsx

### Register.jsx
```js
import { useState } from "react";
import axios from "axios";
import createAlert  from "../../utils/createAlert";
import { useForm } from "react-hook-form"
import FormInput from "../../components/form/FormInput";
import Buttons from "../../components/form/Buttons";

const Register1 = () => {
  // Javascript

  const { register, handleSubmit, formState } = useForm();
  const { isSubmitting } = formState;

  console.log(isSubmitting);
  const hdlSubmit = async(value) =>{
    // Delay
    await new Promise((resolve)=> setTimeout(resolve,2000))

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
        <h1 className="text-xl font-bold text-center">Register1</h1>

        {/* form */}
        <form onSubmit={handleSubmit(hdlSubmit)}>
          <div className="flex flex-col gap-2 py-4">

          <FormInput register={register} name="email"/>
          <FormInput register={register} name="firstname"/>
          <FormInput register={register} name="lastname"/>
          <FormInput register={register} name="password"/>
          <FormInput register={register} name="confirmPassword"/>

          </div>
          <div className="flex justify-center">
            <Buttons isSubmitting={isSubmitting} label="Register"/>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Register1;
```

## Step 25 Install lucide

```bash
npm install lucide-react
```

## Step 26 Update Buttons.jsx
/component/form/Buttons.jsx

### Buttons.jsx
```js
import { Loader } from "lucide-react"

const Buttons = ({isSubmitting,label}) => {
  return (
    <button className="bg-green-600 text-white px-2 py-1 rounded-md hover:cursor-pointer">
    {
        isSubmitting
        ? <div className="flex gap-2">
            <Loader className="animate-spin"/>
           <p>Loading ...</p> 
        </div>
        : <p>{label}</p>
    }
    </button>
  )
}
export default Buttons
```

## Step 27 Install @hookform/resolvers & Zod

```bash
npm install @hookform/resolvers
npm i zod
```

## Step 28 Create file validators.jsx
test error in front-end

/utils/validators.jsx

copy exports.registerSchema from SERVER --> middlewares/validator.js and edit
### validator.jsx

```js
import { z } from "zod"

export const registerSchema = z.object({
    email: z.string().email("Email is invalid"),
    firstname: z.string().min(3,"Firstname must be more than 3 character"),
    lastname: z.string().min(3,"Lastname must be more than 3 chareacter"),
    password: z.string().min(6, "Password must be more than 6 character"),
    confirmPassword: z.string().min(6, "Confirm Password must be more than 6 character")
}).refine((data)=>data.password === data.confirmPassword,{
    message:"Confirm Password not match",
    path:["confirmPassword"]
})
```

## Step 29 Update Register1.jsx

/pages/auth/Register1.jsx

```js
import axios from "axios";
import createAlert  from "../../utils/createAlert";
import { useForm } from "react-hook-form"
import FormInput from "../../components/form/FormInput";
import Buttons from "../../components/form/Buttons";

// Validator
import { registerSchema } from "../../utils/validators";
import { zodResolver } from '@hookform/resolvers/zod'

const Register1 = () => {
  // Javascript
  const { register, handleSubmit, formState } = useForm({
    resolver:zodResolver(registerSchema)
  });
  const { isSubmitting,errors } = formState;

  console.log(errors);
  const hdlSubmit = async(value) =>{
    // Delay
    await new Promise((resolve)=> setTimeout(resolve,2000))

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
        <h1 className="text-xl font-bold text-center">Register1</h1>

        {/* form */}
        <form onSubmit={handleSubmit(hdlSubmit)}>
          <div className="flex flex-col gap-2 py-4">

          <FormInput register={register} name="email" errors={errors}/>
          <FormInput register={register} name="firstname" errors={errors}/>
          <FormInput register={register} name="lastname" errors={errors}/>
          <FormInput register={register} name="password" errors={errors}/>
          <FormInput register={register} name="confirmPassword" errors={errors}/>

          </div>
          <div className="flex justify-center">
            <Buttons isSubmitting={isSubmitting} label="Register"/>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Register1;
```

## Step 30 Update FormInput.jsx

/component/form/FormInput.jsx

### FormInput.jsx

```js
const FormInput = ({register, name, errors}) => {
  // console.log(errors[name].message)
  // || first true && first false
  return (
    <div>
      <input 
      placeholder={name}
      type="text"
      {...register(name)}
      className="border w-full border-blue-800 rounded-md p-1 px-4"
      />
      {
        errors[name] && <p className="text-sm text-red-500">{errors[name].message}</p>
      }
    </div>
  )
}
export default FormInput
```
## Step 31 Create folder api & auth.jsx

/src/api/auth.jsx

### auth.jsx

```js
import axios from "axios";

export const actionRegister = async (value) => {
    return await axios.post('http://localhost:9999/api/register',value)
}
```

## Step 32 Update Register1.jsx
/src/pages/Register.jsx

add actionRegister(value) in try

add rest in useForm เมื่อกด register สำเร็จจะ clear form
### Register.jsx
```js
import createAlert  from "../../utils/createAlert";
import { useForm } from "react-hook-form"
import FormInput from "../../components/form/FormInput";
import Buttons from "../../components/form/Buttons";

// Validator
import { registerSchema } from "../../utils/validators";
import { zodResolver } from '@hookform/resolvers/zod'
import { actionRegister } from "../../api/auth";

const Register1 = () => {
  // Javascript
  const { register, handleSubmit, formState, reset } = useForm({
    resolver:zodResolver(registerSchema)
  });
  const { isSubmitting,errors } = formState;

  console.log(errors);
  const hdlSubmit = async(value) =>{
    // Delay
    await new Promise((resolve)=> setTimeout(resolve,2000))

    try {
      const res = await actionRegister(value)
      console.log(res)
      reset()
      createAlert("success","Register Success")
    } catch (error) {
      createAlert("info",error.response?.data?.message)
      console.log(error.response?.data?.message)
    }
  }

  return (
    <div className="flex w-full h-full justify-end">
      <div className="w-64 border p-4 rounded-md">
        <h1 className="text-xl font-bold text-center">Register1</h1>
        
        {/* form */}
        <form onSubmit={handleSubmit(hdlSubmit)}>
          <div className="flex flex-col gap-2 py-4">

          <FormInput register={register} name="email" errors={errors}/>
          <FormInput register={register} name="firstname" errors={errors}/>
          <FormInput register={register} name="lastname" errors={errors}/>
          <FormInput register={register} name="password" errors={errors} type={"password"}/>
          <FormInput register={register} name="confirmPassword" errors={errors} type={"password"}/>

          </div>
          <div className="flex justify-center">
            <Buttons isSubmitting={isSubmitting} label="Register"/>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Register1;
```

## Step 33 Update FormInput.jsx
เพิ่ม type และ set type default = 'text'
```js
const FormInput = ({register, name, type="text", errors}) => {
  // console.log(errors[name].message)
  // || first true && first false
  return (
    <div>
      <input 
      placeholder={name}
      type={type}
      {...register(name)}
      className="border w-full border-blue-800 rounded-md p-1 px-4"
      />
      {
        errors[name] && <p className="text-sm text-red-500">{errors[name].message}</p>
      }
    </div>
  )
}
export default FormInput
```

## Step 34 Update Login.jsx

ย้าย code จาก Register1.jsx มาใส่ แล้วเปลี่ยนชื่อป็น Login
### Login.jsx 

```js
import createAlert  from "../../utils/createAlert";
import { useForm } from "react-hook-form"
import FormInput from "../../components/form/FormInput";
import Buttons from "../../components/form/Buttons";

// Validator
import { registerSchema } from "../../utils/validators";
import { zodResolver } from '@hookform/resolvers/zod'
import { actionRegister } from "../../api/auth";

const Login = () => {
  // Javascript
  const { register, handleSubmit, formState, reset } = useForm({
    resolver:zodResolver(registerSchema)
  });
  const { isSubmitting,errors } = formState;

  console.log(errors);
  const hdlSubmit = async(value) =>{
    // Delay
    await new Promise((resolve)=> setTimeout(resolve,2000))

    try {
      const res = await actionRegister(value)
      console.log(res)
      reset()
      createAlert("success","Register Success")
    } catch (error) {
      createAlert("info",error.response?.data?.message)
      console.log(error.response?.data?.message)
    }
  }

  return (
    <div className="flex w-full h-full justify-end">
      <div className="w-64 border p-4 rounded-md">
        <h1 className="text-xl font-bold text-center">Login</h1>
        
        {/* form */}
        <form onSubmit={handleSubmit(hdlSubmit)}>
          <div className="flex flex-col gap-2 py-4">

          <FormInput register={register} name="email" errors={errors}/>
          <FormInput register={register} name="password" errors={errors} type={"password"}/>
    

          </div>
          <div className="flex justify-center">
            <Buttons isSubmitting={isSubmitting} label="Login"/>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
```
## Step 35 Copy LoingSchema from SERVER --> middlewares/validators.js

นำไปใส่ใน validator.jsx
/src/utils/validators.js

```js
import { z } from "zod"

export const registerSchema = z.object({
    email: z.string().email("Email is invalid"),
    firstname: z.string().min(3,"Firstname must be more than 3 character"),
    lastname: z.string().min(3,"Lastname must be more than 3 chareacter"),
    password: z.string().min(6, "Password must be more than 6 character"),
    confirmPassword: z.string().min(6, "Confirm Password must be more than 6 character")
}).refine((data)=>data.password === data.confirmPassword,{
    message:"Confirm Password not match",
    path:["confirmPassword"]
})

export const loginSchema = z.object({
    email: z.string().email("Email is error"),
    password: z.string().min(6, "Password must be more than 6 character"),
})
```

## Step 36

## Step 37 Update auth.jsx

```js
import axios from "axios";

export const actionRegister = async (value) => {
    return await axios.post('http://localhost:9999/api/register',value)
}

export const actionLogin = async (value) => {
    return await axios.post('http://localhost:9999/api/login',value)
}
```

## Step 38 Update Login.jsx

import loginSchema and actionLogin ทำเหมือนขั้นตอน Register แค่เปลี่ยนตัวแปร

import useNavigate

ใช้ roleRedirect เพื่อ login ให้ไปตามที่กำหนดใน Role
```js
import createAlert  from "../../utils/createAlert";
import { useForm } from "react-hook-form"
import FormInput from "../../components/form/FormInput";
import Buttons from "../../components/form/Buttons";
import { useNavigate } from "react-router";

// Validator
import { loginSchema } from "../../utils/validators";
import { zodResolver } from '@hookform/resolvers/zod'
import { actionLogin } from "../../api/auth";

const Login = () => {
  // Javascript
  const { register, handleSubmit, formState, reset } = useForm({
    resolver:zodResolver(loginSchema)
  });
  const { isSubmitting,errors } = formState;

  console.log(errors);
  const hdlSubmit = async(value) =>{
    // Delay
    await new Promise((resolve)=> setTimeout(resolve,2000))

    try {
      const res = await actionLogin(value)
      const role = res.data.payload.role
      console.log(role)
      // reset()
      createAlert("success","Login Success")
    } catch (error) {
      createAlert("info",error.response?.data?.message)
      console.log(error.response?.data?.message)
    }
  }

  return (
    <div className="flex w-full h-full justify-end">
      <div className="w-64 border p-4 rounded-md">
        <h1 className="text-xl font-bold text-center">Login</h1>
        
        {/* form */}
        <form onSubmit={handleSubmit(hdlSubmit)}>
          <div className="flex flex-col gap-2 py-4">

          <FormInput register={register} name="email" errors={errors}/>
          <FormInput register={register} name="password" errors={errors} type={"password"}/>
    

          </div>
          <div className="flex justify-center">
            <Buttons isSubmitting={isSubmitting} label="Login"/>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
```

## Step 39
### install zustand
```bash
npm install zustand
```

## Step 40
### Create folder store ===> auth-store.jsx
```js
import { create } from "zustand";
import { actionLogin } from "../api/auth";
import { persist } from "zustand/middleware"; //ช่วยเก็บข้อมูลไว้ใน Local Storage

// Step 1 Create Store
const authStore = (set) => ({
  user: [],
  token: null,
  actionLoginWithZustand: async (value) => {
    try {
      const res = await actionLogin(value);
      const { payload, token } = res.data;
      set({ user: payload, token: token });

      return { success: true, role: payload.role };
    } catch (error) {
      return { success: false, error: error.response.data.message };
    }
  },
});


// Step 2 Exports Store
const useAuthStore = create(persist(authStore,{name: 'auth-store'}));

export default useAuthStore;
```

## Step 40
### import auth-store.jsx in Login.jsx
พร้อมส่ง valueและรับตัวแปร

```js
import createAlert from "../../utils/createAlert";
import { useForm } from "react-hook-form";
import FormInput from "../../components/form/FormInput";
import Buttons from "../../components/form/Buttons";
import { useNavigate } from "react-router";

// Validator
import { loginSchema } from "../../utils/validators";
import { zodResolver } from "@hookform/resolvers/zod";
import { actionLogin } from "../../api/auth";
import useAuthStore from "../../store/auth-store";

const Login = () => {
  // Javascript
  // zustand
  const actionLoginWithZustand = useAuthStore(
    (state) => state.actionLoginWithZustand
  );

  const navigate = useNavigate();
  const { register, handleSubmit, formState, reset } = useForm({
    resolver: zodResolver(loginSchema),
  });
  const { isSubmitting, errors } = formState;

  console.log(errors);
  const hdlSubmit = async (value) => {
    const res = await actionLoginWithZustand(value);
    console.log(res);
    if (res.success) {
      roleRedirect(res.role);
      reset;
      createAlert("success", "Welcome, back");
    } else {
      createAlert("info", "Something Wrong!!!");
    }
  };

  const roleRedirect = (role) => {
    if (role === "ADMIN") {
      navigate("/admin");
    } else {
      navigate("/user");
    }
  };

  return (
    <div className="flex w-full h-full justify-end">
      <div className="w-64 border p-4 rounded-md">
        <h1 className="text-xl font-bold text-center">Login</h1>

        {/* form */}
        <form onSubmit={handleSubmit(hdlSubmit)}>
          <div className="flex flex-col gap-2 py-4">
            <FormInput register={register} name="email" errors={errors} />
            <FormInput
              register={register}
              name="password"
              errors={errors}
              type={"password"}
            />
          </div>
          <div className="flex justify-center">
            <Buttons isSubmitting={isSubmitting} label="Login" />
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
```

## Step 41 Create ProtectRoute.jsx in folder Routes

สร้างเพื่อไม่ให้คนที่ไม่ใช่ Admin เข้าไปในส่วน Admin ได้

```js
import useAuthStore from "../store/auth-store";

const ProtectRoute = ({ el }) => {
  console.log("Hello, Protect Route");
  const user = useAuthStore((state) => state.user);
  const token = useAuthStore((state) => state.token);
  console.log(user.role);
  console.log(token);
  return el;
};
export default ProtectRoute;

```

## Step 42 AppRoute.jsx

import ProtectRoute

change Layout ===> ProtectRoute in {Private[admin]}

ส่ง props เป็น el = <Layout/>

```js
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
        <Route path="user" element={<Layout />}>
          <Route index element={<HomeUser />} />
        </Route>

        {/* Private [ADMIN] */}
        <Route path="admin" element={<ProtectRoute el={<Layout />} />}>
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
```

## Step 43 Update auth.jsx
folder api ===> auth.jsx

เพิ่ม  fuction actionCurrentUser
```js
import axios from "axios";

export const actionRegister = async (value) => {
  return await axios.post("http://localhost:9999/api/register", value);
};

export const actionLogin = async (value) => {
  return await axios.post("http://localhost:9999/api/login", value);
};

export const actionCurrentUser = async (token) => {
  return await axios.get("http://localhost:9999/api/current-user", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
```

## Step 44 Update ProtectRoute.jsx
Folder routes ===> ProtectRoute.jsx

```js
import { useEffect, useState } from "react";
import useAuthStore from "../store/auth-store";
import { actionCurrentUser } from "../api/auth";

const ProtectRoute = ({ el }) => {
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
      console.log(role);
    } catch (error) {
      console.log(error);
    }
  };

  return el;
};
export default ProtectRoute;
```

## Step 45 Update AppRoutes.jsx
Folder routes ==> AppRoutes.jsx

ส่ง props  allows={["USER"]}

ส่ง props  allows={["ADMIN"]}

```js
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
```

## Step 46 Update ProtectRoute.jsx

```js
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
```

## Step 47 Create LayoutAdmin.jsx
Folder layout ==> LayoutAdmin.jsx

## Step 48

## Step 49

## Step 50