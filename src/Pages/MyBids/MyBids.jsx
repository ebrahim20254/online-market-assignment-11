import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import MyBidsCart from "./MyBidsCart";


const MyBids = () => {
    const { user } = useContext(AuthContext);
    const [bids, setBids] = useState([]);

    const url = `https://online-market-server-assignment-11.vercel.app/bid?yourEmail=${user?.yourEmail}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBids(data))
    }, [url])

    const handlePending = id => {
        fetch(`https://online-market-server-assignment-11.vercel.app/bid/${id}`,{
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
                             <MyBidsCart
                              key={bid._id}
                               bid={bid}
                               handlePending={handlePending}
                               ></MyBidsCart>)
                      }
                    </tbody>
                    

                </table>
            </div>
        </div>
    );
};

export default MyBids;