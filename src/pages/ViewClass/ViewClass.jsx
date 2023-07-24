
import { useEffect, useState } from "react";
import ViewDetails from "../Home/Home/ViewDetails/ViewDetails";
const ViewClass = () => {
    const [menu, setMenu]= useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/menu')
        .then(res=>res.json())
        .then(data=> {
            const PopularClass =data.filter(item=>item.category ==='popular_class');
            setMenu(PopularClass)
        })
    },[])
    console.log('hello', menu);
    return (
        <div>
            <div className="mx-auto text-center  my-6 mb-10 md:w-4/12 ">
                
                <h3 className="text-3xl uppercase text-white  border-b-4 border-indigo-500 py-4">Collages Details</h3>
            </div>
            <div className="grid grid-cols-1 lg:px-10 lg:gap-10 lg:grid-cols-1 my-20">
           {
            menu.map(item=> <ViewDetails
            key={item._id}
            item={item}

            >
            </ViewDetails>)
           }
           
           </div>
        </div>
    );
};

export default ViewClass;