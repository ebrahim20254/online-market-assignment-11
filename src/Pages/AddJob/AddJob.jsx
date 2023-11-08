

const AddJob = () => {
    const handleAddProduct = event => {
        event.preventDefault();

        const form = event.target;

        const email = form.email.value;
        const title = form.title.value;
        const date = form.date.value;
        const description = form.description.value;
        const category = form.category.value;
        const minimum = form.minimum.value;
        const maximum = form.maximum.value;
        console.log(email, title, date, description,category, minimum, maximum);
    }
    return (
        <div className=" bg-[#F4F3F0] w-[60%] mx-auto text-center text-3xl my-6 card-body rounded-xl">
            <h2>Add Job</h2>
            <form onSubmit={handleAddProduct}>

                <div className=" md:flex ">
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <label className="input-group">
                            <input type="email" name="email" placeholder="Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-1/2 ml-6">
                        <label className="label">
                            <span className="label-text">Job Title</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="title" placeholder="Job title" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                <div className=" md:flex ">
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Deadline</span>
                        </label>
                        <label className="input-group">
                            <input type="date" name="date" placeholder="deadline" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-1/2 ml-6">
                        <label className="label">
                            <span className="label-text">description</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="description" placeholder="description" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className=" form-control text-lg">
                    <label>Category</label>
                    <select name="category">
                        <option value="web development">web development</option>
                        <option value="Digital Marketing">Digital Marketing</option>
                        <option value="Graphic Design">Graphic Design</option>
                    </select>
                </div>

                <div className=" md:flex ">
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Minimum Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="minimum" placeholder="Minimum Price" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-1/2 ml-6">
                        <label className="label">
                            <span className="label-text">Maximum Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="maximum" placeholder="Maximum Price" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Add job" className="btn btn-block my-4 bg-blue-400" />
            </form>
        </div>
    );
};

export default AddJob;