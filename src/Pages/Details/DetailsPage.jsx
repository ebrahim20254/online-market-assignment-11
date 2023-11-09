

const DetailsPage = () => {

    const handleBookService = event =>{
        event.preventDefault()

        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = form.email.value;
       console.log(name, date, email);

   }
    return (
        <div className="bg-[#F4F3F0] w-[60%] mx-auto text-center text-3xl my-6 card-body rounded-xl">
            <form  onSubmit={handleBookService }>
               <div className=" grid grid-cols-1 md:grid-cols-2 gap-6">
               <div className="form-control">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input type="text" name="price" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">date</span>
                    </label>
                    <input type="date" name="date" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email"  name="email"className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Due amount</span>
                    </label>
                    <input type="text" className="input input-bordered" required />
                </div>
               </div>
                <div className="form-control mt-6">
                    <input className="btn btn-warning" type="submit" value="Posted Job" />
                </div>
            </form>
    </div>
    );
};

export default DetailsPage;