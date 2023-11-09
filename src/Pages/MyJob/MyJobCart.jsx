import Swal from "sweetalert2";


const MyJobCart = ({ myJob }) => {
    const {_id, email, title, date, description, category, minimum, maximum } = myJob;

    const handleDelete = () =>{
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
            //   Swal.fire({
            //     title: "Deleted!",
            //     text: "Your file has been deleted.",
            //     icon: "success"
            //   });
            console.log('deleted confirm');
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
                        <button className="btn btn-secondary">Update</button>
                        <button onClick={() => handleDelete(_id)} className="btn btn-warning">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyJobCart;