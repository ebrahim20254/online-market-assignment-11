import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import MyRequestCart from "./MyRequestCart";


const MyRequest = () => {
    const { user } = useContext(AuthContext);
    const [bids, setBids] = useState([]);

    const url = `http://localhost:5000/bid?yourEmail=${user?.yourEmail}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBids(data))
    }, [url])

    const handlePending = id => {
        fetch(`http://localhost:5000/bid/${id}`,{
            method: 'PATCH',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify({status: 'canceled'})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0) {
                const remaining = bids.filter(bid => bid._id !== id);
                const updated = bids.find(bid => bid._id == id);
                updated.status = 'canceled'
                const newBid = [updated, ...remaining];
                setBids(newBid);


            }
        })
    }
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
                            <th>Date</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>                                
                      {
                        bids.map(bid => 
                        <MyRequestCart
                        key={bid._id}
                         bid={bid}
                         handlePending={handlePending}
                        ></MyRequestCart>)
                      }
                    </tbody>
                    

                </table>
            </div>
        </div>
    );
};

export default MyRequest;