
const Admission = () => {
    const handleAddClass = event => {
        
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const subject = form.subject.value;

        const email = form.email.value;
        const address = form.address.value;
        const date = form.date.value;
        const image = form.image.value;

        

        const newAdmission = { name, subject: address, subject,email,date, image }
        console.log(newAdmission);
        fetch('https://summer-camp-school-server-kappa.vercel.app/addClass', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newAdmission)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                

            })
    }
    return (
        <div className='w-full h-full bg-teal-500 p-24'>
       
        
        <div className=" my-14 ">


            <h2 className=" text-blue-950  text-4xl text-center font-extrabold my-7">Admission Form</h2>
            <form onSubmit={handleAddClass} >
                {/* form name and quantity row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-tex font-bold text-xl text-black">Candidate Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text font-bold text-xl text-black">Subject</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="subject" placeholder="Subject" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form supplier row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold text-xl text-black">Candidate Email</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="email" placeholder="Candidate Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text font-bold text-xl text-black">Image URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="image" placeholder="Photo URL" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold text-xl text-black">address</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="address" placeholder="address" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text font-bold text-xl text-black">date of birth</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="date" placeholder="date of birth" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>



                <input type="submit" value="Add A Class" className="btn font-bold text-white bg-blue-950 btn-block" />

            </form>
        </div>
    </div>
    );
};

export default Admission;