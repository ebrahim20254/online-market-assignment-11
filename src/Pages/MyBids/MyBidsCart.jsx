

const MyBidsCart = ({bid}) => {
    const {yourEmail, date, price} = bid;
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
                <button className="btn btn-ghost btn-xs">completed</button>
            </th>
        </tr>
    );
};

export default MyBidsCart;