import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const MyJobCart = ({ myJob, loadJob, setLoadJob }) => {
    const { _id, email, title, date, description, category, minimum, maximum } = myJob;

    const handleDelete = () => {
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://online-market-server-assignment-11.vercel.app/job/${_id}`,{
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                              Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                              });
                              const remaining = loadJob.filter(lod => lod._id !== _id)
                              setLoadJob(remaining);
                        }
                    })

            }
        });
    }
    return (
        <div className="card card-side bg-base-300 shadow-xl">
            <figure className="ml-4">{email}</figure>
            <div className="card-body">
                <h2 className="card-title">Job Title: {title}</h2>
                <p>Deadline: {date}</p>
                <p>{description}</p>
                <p>category: {category}</p>
                <p>Minimum Price: {minimum}</p>
                <p>Maximum Price: {maximum}</p>
                <div className="card-actions justify-end -mt-32 ">
                    <div className="btn-group btn-group-vertical space-y-4">
                        <button className="btn btn-active">View</button>
                        <Link to={`/update/${_id}`}><button className="btn btn-secondary">Update</button></Link>
                        <button onClick={() => handleDelete(_id)} className="btn btn-warning">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyJobCart;