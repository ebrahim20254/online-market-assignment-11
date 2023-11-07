import { Link } from "react-router-dom";
import img from '../../assets/login/404.gif'

const ErrorPage = () => {
    return (
        <div className=' text-center'>
            <img src={img} alt="" className='w-[600px] mx-auto' />
            <Link className=' text-6xl border-2 rounded-full px-8 text-orange-600 font-bold' to="/">Go to back</Link>
        </div>
    );
};

export default ErrorPage;