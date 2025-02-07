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

```

## Step 30
