import { Outlet } from "react-router-dom";
import Home from "../Pages/Home/Header/Home";


const MainLayout = () => {
    return (
        <div>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;