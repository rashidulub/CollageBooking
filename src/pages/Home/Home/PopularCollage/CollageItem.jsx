import { Link } from "react-router-dom";


const CollageItem = ({item}) => {
    const {collage_name,image,event,admission_date , _id} =item
    return (
        <div className="card card-compact mr-4 bg-blue-400 w-96  mb-10 shadow-xl">
        <figure><img className='p-2 rounded h-72  ' src={image} alt="Shoes" /></figure>
        <div className="card-body">
            <h2 className="card-title text-xl text-black">Collage Name: <span className='font-bold text-lg text-red-700'>{collage_name}</span></h2>
            <p className="text-start  text-xl text-black">Admission Date: <span className='font-bold text-xl text-purple-950'>{admission_date}</span> </p>
            <p className="text-start text-xl mb-6 font-bold text-base text-black">Events: <span className='font-bold text-base text-green-950'>{event}</span></p>
            
            <Link to={'/viewclass'}><button className="btn btn-active btn-neutral" >View Details</button></Link>
            
        </div>
    </div>
    );
};

export default CollageItem;