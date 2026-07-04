import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

import { useCart } from "../../../features/cart/hooks/useCart";

export default function CartBadge() {

    const { data } = useCart();

    const cart = data?.data;

    const totalItems =

        cart?.items?.reduce(

            (total, item) => total + item.quantity,

            0

        ) ?? 0;

    return (

        <Link

            to="/cart"

            className="
                relative

                rounded-full

                p-2

                transition-all

                duration-200

                hover:bg-[var(--surface-hover)]

                hover:scale-105

                active:scale-95
            "

            aria-label="Shopping Cart"

        >

            <ShoppingCart

                size={22}

                className="text-[var(--foreground)]"

            />

            {

                totalItems > 0 && (

                    <span

                        className="
                            absolute

                            -right-1

                            -top-1

                            flex

                            h-5

                            min-w-[20px]

                            items-center

                            justify-center

                            rounded-full

                            bg-[var(--color-danger)]

                            px-1

                            text-[10px]

                            font-bold

                            leading-none

                            text-white

                            shadow-md

                            ring-2

                            ring-[var(--surface)]
                        "

                    >

                        {

                            totalItems > 9

                                ? "9+"

                                : totalItems

                        }

                    </span>

                )

            }

        </Link>

    );

}