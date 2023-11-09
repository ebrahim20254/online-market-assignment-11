
const MyRequestCart = ({bid, handlePending}) => {
    const { _id,yourEmail, date, price, status} = bid;

    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                    <p>{yourEmail}</p>
                    </div>
                </div>
            </td>
            <td>
             <p>{date}</p>
            </td>
            <td>{price}</td>
            <th>
                {
                    status === 'canceled' ? <span className=" text-orange-500 font-bold">Accept button</span>:
                    <button onClick={() => handlePending(_id)} className="btn btn-ghost btn-xs">pending</button>
                }
            </th>
            <th>
                {
                    status === 'canceled' ? <span className=" text-orange-500 font-bold"> Reject button</span>:
                    <button onClick={() => handlePending(_id)} className="btn btn-ghost btn-xs">Reject</button>
                }
            </th>
        </tr>
    );
};

export default MyRequestCart;