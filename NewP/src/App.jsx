import './App.css'
import * as React from "react";


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import {
  Home,
  NavBar,
  ContactUS,
  About,
  Footer,
  Login,
  RegisterNow,
  UserProfile, 
  OrderNow,
  NotFound,
  Footer1,
  OrderConfirmation,
  Switcher,
  Items,
  Cart,
}
from './Components/index';

const router=createBrowserRouter(
  [
    {
      path: '/',
      element:<div>
        <NavBar/>
        <Home/>
        <Footer/>
      </div>
    },
    {
      path:'/About',
      element:<div>
        <NavBar/>
        <About/>
        <Footer/>
      </div>,
      children :[
        {
          path : "Contact us",
          element:<div>
            <ContactUS/>
          </div>
        }
      ]
    },
    {
      path:'/Contact',
      element:<div>
        <NavBar/>
        <Footer/>
        <ContactUS/>
      </div>
    },
    {
      path:'/Login',
      element:<div>
        <NavBar/>
        <Login/>
        <Footer1/>
      </div>,
      children : [
        {
          path : "NewRegistration",
          element:<div>
            <RegisterNow/>
          </div>
        },
      ]
    },
    {
      path:'/Register',
      element:<div>
        <NavBar/>
        <Footer1/>
        <RegisterNow/>
      </div>
    }
    ,{
      path:'/UserProfile',
      element:<div>
        <NavBar/>
        <UserProfile/>
        <Footer1/>
      </div>
    }
    ,{
      path:'/OrderNow',
      element:<div>
        <NavBar/>
        <OrderNow/>
        {/* <Switcher/> */}
        <Items/>
        <Cart/>
        <Footer/>
      </div>
    },
    {
      path: "*",
      element: 
      <div>
        <NotFound/>
        <Footer/>
      </div>
    },
    {
      path:'/OrderConfirmation',
      element:<div>
        <NavBar/>
        <OrderConfirmation/>
        <Footer1/>
      </div>
    }
  ]
)


function App() {

  return (
    <div className='App'>
    <RouterProvider router={router}/>
    </div>
  )
}

export default App
