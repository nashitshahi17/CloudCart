import { Link } from "react-router-dom";

import { useCart } from "../hooks/useCart";

import Loader from "../../../shared/components/Loader/Loader";

import Button from "../../../shared/components/Button/Button";

import CartItem from "../components/CartItem";

import CartSummary from "../components/CartSummary";

export default function Cart() {

    const {

        data,

        isLoading,

        error

    } = useCart();

    if (isLoading) {

        return (

            <Loader

                size="lg"

                text="Loading Cart..."

            />

        );

    }

    if (error) {

        return (

            <h1>

                Failed to load cart

            </h1>

        );

    }

    const cart = data?.data;
    console.log("useCart data:", data);

    if (!cart?.items?.length) {

        return (

            <div className="py-20 text-center">

                <h1 className="text-3xl font-bold">

                    Your Cart is Empty

                </h1>

                <Link to="/products">

                    <Button className="mt-6">

                        Continue Shopping

                    </Button>

                </Link>

            </div>

        );

    }

    return (

        <div className="grid gap-8 lg:grid-cols-3">

            <div className="space-y-5 lg:col-span-2">

                {

                    cart.items.map(item => (

                        <CartItem

                            key={item.productId}

                            item={item}

                        />

                    ))

                }

            </div>

            <CartSummary

                cart={cart}

            />

        </div>

    );

}
