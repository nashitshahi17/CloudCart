import { Outlet } from "react-router-dom";

export default function GuestLayout() {

    return (

        <main className="min-h-screen flex items-center justify-center bg-[var(--background)]">

            <div className="w-full max-w-md">

                <Outlet />

            </div>

        </main>

    );

}