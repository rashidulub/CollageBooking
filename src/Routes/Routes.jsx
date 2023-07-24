import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home/Home";
import Collages from "../pages/Collages/Collages";
import Admission from "../pages/Home/Admission/Admission";
import MyCollage from "../pages/Home/MyCollage/MyCollage";
import ViewDetails from "../pages/Home/Home/ViewDetails/ViewDetails";
import ViewClass from "../pages/ViewClass/ViewClass";
import Login from "../pages/Home/Home/Login/Login";
import SignUp from "../pages/Home/Home/Login/SingUp/SignUp";
import PrivateRoutes from "./PrivateRoutes";


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path: '/',
            element:<Home></Home>
        },
        {
            path:'collages',
            element:<Collages></Collages>
        },
        {
            path:'admission',
            element:<Admission></Admission>
        },
        {
          path:'mycollage',
          element:<MyCollage></MyCollage>,
          loader:()=> fetch('https://collage-admission-services-server.vercel.app/collages')
        },
        {
          path:'view',
          element:<PrivateRoutes><ViewDetails></ViewDetails></PrivateRoutes>
        },
        {
          path:'/viewclass',
          element:<PrivateRoutes><ViewClass></ViewClass></PrivateRoutes>
        },
        {
          path:'login',
        element:<Login></Login>
        },
        {
          path:'signup',
          element:<SignUp></SignUp>
        }
      ]
    },
  ]);