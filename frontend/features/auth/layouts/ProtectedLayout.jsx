import { Navigate, Outlet, useLocation } from "react-router-dom";

import { useAuth } from "../../../context/AuthContext";

import Loader from "../../../shared/components/Loader/Loader";

export default function ProtectedLayout() {

    const {

        loading,

        isAuthenticated,

    } = useAuth();

    const location = useLocation();

    if (loading) {

        return (

            <div className="flex min-h-screen items-center justify-center">

                <Loader
                    size="lg"
                    text="Loading..."
                />

            </div>

        );

    }

    if (!isAuthenticated) {

        return (

            <Navigate

                to="/login"

                replace

                state={{

                    from: location,

                }}

            />

        );

    }

    return <Outlet />;

}