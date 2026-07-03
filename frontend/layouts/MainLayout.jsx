import { Outlet } from "react-router-dom";

import Navbar from "../shared/components/Navbar/Navbar";

export default function MainLayout() {

    return (

        <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300">

            <Navbar />

            <main className="mx-auto max-w-7xl px-6 py-8">

                <Outlet />

            </main>

        </div>

    );

}