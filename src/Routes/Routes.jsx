import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home/Home";
import Collages from "../pages/Collages/Collages";
import Admission from "../pages/Home/Admission/Admission";
import MyCollage from "../pages/Home/MyCollage/MyCollage";


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
          loader:()=> fetch('http://localhost:5000/collages')
        }
      ]
    },
  ]);