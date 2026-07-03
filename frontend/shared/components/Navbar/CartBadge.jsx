import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

import { useCart } from "../../../features/cart/hooks/useCart";

export default function CartBadge() {

    const { data } = useCart();

    const cart = data?.data;

    const totalItems = cart?.items?.reduce(

        (total, item) => total + item.quantity,

        0

    ) ?? 0;

    return (

        <Link
            to="/cart"
            className="relative flex items-center"
        >

            <ShoppingCart size={24} className="text-[var(--foreground)]" />

            {

                totalItems > 0 && (

                    <span
                        className="
                            absolute
                            -right-2
                            -top-2
                            flex
                            h-5
                            w-5
                            items-center
                            justify-center
                            rounded-full
                            bg-[var(--color-danger)]
                            text-xs
                            font-bold
                            text-white
                        "
                    >

                        {totalItems}

                    </span>

                )

            }

        </Link>

    );

}