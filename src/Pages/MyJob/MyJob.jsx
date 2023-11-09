import { useLoaderData } from "react-router-dom";
import MyJobCart from "./MyJobCart";


const MyJob = () => {
    const myJobs = useLoaderData();
    console.log(myJobs);
    return (
        <div>
            <h2 className=" text-center text-5xl text-orange-700 mb-8">my job : {myJobs.length}</h2>
            <div className=" grid md:grid-cols-1 lg:grid-cols-2 gap-6">
                {
                    myJobs.map(myJob => <MyJobCart key={myJob._id} myJob={myJob}></MyJobCart>)
                }
            </div>
        </div>
    );
};

export default MyJob;