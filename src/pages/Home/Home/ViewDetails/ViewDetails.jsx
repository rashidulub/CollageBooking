

const ViewDetails = ({item}) => {
    const {collage_name,image,event,admission_date ,research,sports, _id} =item
    return (
        <div className="card card-compact w-full bg-green-200 mb-10 shadow-xl">
        <figure><img style={{width:'5000px', height:'500px'}} className='p-2 rounded h-80  ' src={image} alt="Shoes" /></figure>
        <div className="card-body">
            <h2 className="card-title text-2xl text-black">Collage Name: <span className='font-bold text-xl text-red-700'>{collage_name}</span></h2>
            <p className="text-start  text-xl text-black">Admission Date: <span className='font-bold text-xl text-red-700'>{admission_date}</span> </p>
            <p className="text-start mb-6 font-bold text-2xl text-black">Events: <span className='font-bold  text-blue-600'>{event}</span></p>
            <p className="text-start mb-6 font-bold text-xl text-black">Research: <span className='font-bold  text-red-700'>{research}</span></p>
            <p className="text-start mb-6 font-bold text-xl text-black">Research: <span className='font-bold  text-red-700'>{sports}</span></p>
            
            
            
        </div>
    </div>
    );
};

export default ViewDetails;