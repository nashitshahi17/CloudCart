import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext"; 
import Loader from "../../../shared/components/Loader/Loader";

export default function ProtectedRoute() {

    const { isAuthenticated, loading } = useAuth();

    if(loading){
        return <Loader text="Loading" />
    }

    if (!isAuthenticated) {

        return <Navigate to="/login" replace />;

    }

    return <Outlet />;

}