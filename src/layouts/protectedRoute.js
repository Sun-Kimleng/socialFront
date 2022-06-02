import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";

const ProtectedRoute = () => {
    return ( 
        <>
        <Navbar />
        <Outlet />
        </>
     );
}
 
export default ProtectedRoute;