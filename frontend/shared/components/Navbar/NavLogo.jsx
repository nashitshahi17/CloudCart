import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

export default function NavLogo() {

    return (

        <Link

            to="/"

            className="flex items-center gap-2"

        >

            <ShoppingCart

                className="text-[var(--color-primary)]"

            />

            <span className="text-2xl font-bold">

                CloudCart

            </span>

        </Link>

    );

}