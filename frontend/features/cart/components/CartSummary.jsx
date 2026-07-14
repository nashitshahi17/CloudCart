import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import Button from "../../../shared/components/Button/Button";
import { useClearCart } from "../hooks/useClearCart";

export default function CartSummary({ cart }) {

    const navigate = useNavigate();

    const {

        mutate: clearCart,

        isPending

    } = useClearCart({

        onSuccess: () => {

            toast.success("Cart cleared");

        },

        onError: (error) => {

            toast.error(

                error.response?.data?.message ||

                "Failed to clear cart"

            );

        }

    });

    function handleCheckout() {

        navigate("/checkout");

    }

    return (

        <div className="rounded-lg border p-6 h-fit sticky top-6">

            <h2 className="text-2xl font-semibold">

                Order Summary

            </h2>

            <div className="mt-6 flex justify-between">

                <span>Total Items</span>

                <span>

                    {

                        cart.items.reduce(

                            (total, item) =>

                                total + item.quantity,

                            0

                        )

                    }

                </span>

            </div>

            <div className="mt-4 flex justify-between text-xl font-bold">

                <span>Total</span>

                <span>

                    ₹{cart.totalAmount}

                </span>

            </div>

            <Button

                className="mt-8 w-full"

                onClick={handleCheckout}

            >

                Proceed To Checkout

            </Button>

            <Button

                variant="secondary"

                className="mt-3 w-full"

                onClick={() => clearCart()}

                disabled={isPending}

            >

                Clear Cart

            </Button>

        </div>

    );

}