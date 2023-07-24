
import { useEffect, useState } from "react";
import CollagesCard from "../Home/Home/PopularCollage/CollagesCard";

const Collages = () => {
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
            <div className="mx-auto text-center  my-6 mb-10 md:w-4/12 ">
                
                <h3 className="text-3xl uppercase text-white  border-b-4 border-indigo-500 py-4">Collages</h3>
            </div>
            <div className="grid grid-cols-1 lg:px-10 lg:gap-10 lg:grid-cols-2 my-20">
           {
            menu.map(item=> <CollagesCard
            key={item._id}
            item={item}

            >
            </CollagesCard>)
           }
           </div>
        </div>
    );
};

export default Collages;