import { useEffect, useState } from "react";
import CollageItem from "./CollageItem";


const PopularCollage = () => {
    const [menu, setMenu]= useState([])
    useEffect(()=>{
        fetch('https://collage-admission-services-server.vercel.app/menu')
        .then(res=>res.json())
        .then(data=> {
            const PopularClass =data.filter(item=>item.category ==='popular_class');
            setMenu(PopularClass)
        })
    },[])
    return (
        <div>
            <div className="mx-auto text-center mt-5 lg:my-20 md:w-4/12 ">
                <p className="text-orange-400 font-bold mb-2">---Visit This Section---</p>
                <h3 className="text-3xl uppercase text-white  border-b-4 border-indigo-500 py-4">Popular Collages</h3>
            </div>
           <div className="grid grid-cols-1 lg:px-10 lg:gap-10 lg:grid-cols-3 my-10 ">

           </div>
           <div className="grid grid-cols-1 lg:px-10 lg:gap-10 lg:grid-cols-3 my-20">
           {
            menu.map(item=> <CollageItem
            key={item._id}
            item={item}

            >
            </CollageItem>)
           }
           </div>
            
        </div>
    );
};

export default PopularCollage;