import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import MyBidsCart from "./MyBidsCart";


const MyBids = () => {
    const { user } = useContext(AuthContext);
    const [bids, setBids] = useState([]);

    const url = `http://localhost:5000/bid?yourEmail=${user?.yourEmail}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBids(data))
    }, [])
    return (
        <div>
            <h2>my bids: {bids.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className=" bg-gray-200">
                        <tr>
                            <th>
                                <label>
                                    Email
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>                                
                      {
                        bids.map(bid => <MyBidsCart key={bid._id} bid={bid}></MyBidsCart>)
                      }
                    </tbody>
                    

                </table>
            </div>
        </div>
    );
};

export default MyBids;