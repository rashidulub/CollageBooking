import { useLoaderData } from "react-router-dom";


const MyCollage = () => {
    const collages = useLoaderData();
    return (
        <div className='bg-emerald-500 h-full w-full'>
        <div className='w-full mt-14 '>

            <div className="w-full">

                <div className="uppercase font-semibold h-[60px] flex justify-evenly ">
                    <h3 className="text-4xl text-blue-950 uppercase my font-bold  border-b-4 border-indigo-500 py-4">My COllages</h3>



                </div>
                <div className="overflow-x-auto mt-10 w-full">
                    <table className="table w-full">
                        {/* head */}
                        <thead className='font-bold'>
                            <tr >

                                <th >Image</th>
                                <th>Candidate Name</th>
                                <th>Subject
                                </th>


                                <th>Candidate Email</th>


                                <th>Date Of Birth</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                collages.map((addClass) => <tr key={addClass._id}

                                >


                                    <td>
                                        <div className="avatar">

                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={addClass.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </td>
                                    <td className=' text-sm font-bold'>
                                        {addClass.name}
                                    </td>
                                    <td className='text-xl font-bold'>
                                        {addClass.subject}
                                    </td>

                                    <td className='text-xl font-bold'>
                                        {addClass.email}
                                    </td>

                                    <td>
                                        <div>


                                            <div className='mt-1'>
                                            <td className='text-xl font-bold'>
                                        {addClass.date}
                                    </td>

                                            </div>

                                        </div>


                                    </td>
                                </tr>)
                            }


                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    </div>
    );
};

export default MyCollage;