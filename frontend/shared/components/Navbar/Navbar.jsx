import { Link } from "react-router-dom";

import NavLinks from "./NavLinks";
import CartBadge from "./CartBadge";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import UserMenu from "./UserMenu";

export default function Navbar() {

    return (

        <header
            className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--surface)] shadow-sm backdrop-blur transition-colors duration-300"
        >

            <div
                className="
                    mx-auto
                    flex
                    h-16
                    max-w-7xl
                    items-center
                    justify-between
                    px-6
                "
            >

                <Link

                    to="/products"

                    className="
                        text-2xl
                        font-bold
                        text-[var(--color-primary)]
                    "

                >

                    CloudCart

                </Link>

                <NavLinks />

                <div className="flex items-center gap-4">

                    <ThemeToggle />

                    <CartBadge />

                    <UserMenu />

                </div>

            </div>

        </header>

    );

}