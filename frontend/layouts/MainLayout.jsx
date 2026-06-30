import { Outlet } from "react-router-dom";

export default function MainLayout() {
    return (
        <div className="min-h-screen bg-gray-100">

            {/* Navbar will come here */}

            <main className="container mx-auto px-4 py-6">
                <Outlet />
            </main>

            {/* Footer will come here */}

        </div>
    );
}