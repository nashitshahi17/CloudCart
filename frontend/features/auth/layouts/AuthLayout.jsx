import { Outlet } from "react-router-dom";

export default function AuthLayout() {

    return (

        <div className="min-h-screen bg-gray-100">

            <div className="container mx-auto px-4 py-6">

                <Outlet />

            </div>

        </div>

    );

}