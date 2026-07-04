import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import NavLinks from "./NavLinks";
import CartBadge from "./CartBadge";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import UserMenu from "./UserMenu";
import NotificationBell from "./NotificationBell";

export default function Navbar() {

    return (

        <header
    className="
        sticky
        top-0
        z-50

        border-b
        border-[var(--border)]

        bg-[var(--surface)]

        backdrop-blur-md

        shadow-md

        transition-all

        duration-300
    "
>

            <div
    className="
        mx-auto

        flex

        h-18

        max-w-7xl

        items-center

        justify-between

        py-4
    "
>

                <Link
                    to="/products"
                    className="
        flex
        items-center
        gap-2
        transition-transform
        duration-200
        hover:scale-105
    "
                >

                    <ShoppingCart
                        size={28}
                        className="text-[var(--color-primary)]"
                    />

                    <span
                        className="
                        text-2xl
                        font-bold
                        text-[var(--color-primary)]
        "
                    >
                        CloudCart
                    </span>

                </Link>

                <NavLinks />

                <div
    className="
        flex
        items-center
        gap-5
    "
>

                    <ThemeToggle />

                    <NotificationBell />

                    <CartBadge />

                    <UserMenu />

                </div>

            </div>

        </header>

    );

}