

const MyBidsCart = ({bid}) => {
    const {yourEmail, date} = bid;
    return (
        <tr>
            <th>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
            </th>
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
            <td>Purple</td>
            <th>
                <button className="btn btn-ghost btn-xs">details</button>
            </th>
        </tr>
    );
};

export default MyBidsCart;