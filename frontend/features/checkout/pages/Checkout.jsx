import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import Button from "../../../shared/components/Button/Button";
import Loader from "../../../shared/components/Loader/Loader";

import { useCart } from "../../cart/hooks/useCart";
import useCheckout from "../hooks/useCheckout"

// These are your modular UI components (must exist)
import ShippingAddressForm from "../components/ShippingAddressForm";
import PaymentMethod from "../components/PaymentMethod";
import OrderSummary from "../components/OrderSummary";
import CheckoutActions from "../components/CheckoutActions";

export default function Checkout() {
    const navigate = useNavigate();

    const [shippingAddress, setShippingAddress] = useState("");
    const [paymentMethod, setPaymentMethod] = useState("UPI");

    const { data, isLoading } = useCart();

    const { mutate: placeOrder, isPending } = useCheckout({
        onSuccess: () => {
            toast.success("Order placed successfully");
            navigate("/orders");
        },
        onError: (error) => {
            toast.error(
                error?.response?.data?.message ||
                    "Failed to place order"
            );
        },
    });

    function handleCheckout() {
        placeOrder({
            shippingAddress,
            paymentMethod,
        });
    }

    if (isLoading) {
        return (
            <Loader size="lg" text="Loading Checkout..." />
        );
    }

    const cart = data?.data;

    return (
        <div className="grid gap-8 lg:grid-cols-2">
            {/* LEFT SIDE */}
            <div>
                <h1 className="mb-6 text-3xl font-bold">
                    Checkout
                </h1>

                <ShippingAddressForm
                    value={shippingAddress}
                    onChange={setShippingAddress}
                />

                <PaymentMethod
                    value={paymentMethod}
                    onChange={setPaymentMethod}
                />

                <CheckoutActions
                    loading={isPending}
                    onSubmit={handleCheckout}
                />
            </div>

            {/* RIGHT SIDE */}
            <div className="rounded-lg border p-6 h-fit">
                <OrderSummary
                    cartItems={cart?.items || []}
                    totalAmount={cart?.totalAmount || 0}
                />
            </div>
        </div>
    );
}