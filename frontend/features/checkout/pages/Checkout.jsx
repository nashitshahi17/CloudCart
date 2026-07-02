import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import Button from "../../../shared/components/Button/Button";
import Input from "../../../shared/components/Input/Input";
import FormField from "../../../shared/components/FormField/FormField";
import Loader from "../../../shared/components/Loader/Loader";

import { useCart } from "../../cart/hooks/useCart";
import { useCheckoutForm } from "../hooks/useCheckoutForm";
import { usePlaceOrder } from "../hooks/usePlaceOrder";

export default function Checkout() {

    const navigate = useNavigate();

    const {

        data,

        isLoading

    } = useCart();

    const {

        register,

        handleSubmit,

        formState: { errors }

    } = useCheckoutForm();

    const {

        mutate,

        isPending

    } = usePlaceOrder({

        onSuccess: () => {

            toast.success("Order placed successfully");

            navigate("/orders");

        },

        onError: (error) => {

            toast.error(

                error.response?.data?.message ||

                "Failed to place order"

            );

        }

    });

    if (isLoading) {

        return (

            <Loader

                size="lg"

                text="Loading Checkout..."

            />

        );

    }

    const cart = data?.data;

    const onSubmit = (formData) => {

        mutate({

            shippingAddress:

                formData.shippingAddress

        });

    };

    return (

        <div className="grid gap-8 lg:grid-cols-2">

            <div>

                <h1 className="mb-6 text-3xl font-bold">

                    Shipping Address

                </h1>

                <form

                    onSubmit={handleSubmit(onSubmit)}

                    className="space-y-5"

                >

                    <FormField

                        label="Shipping Address"

                        required

                        error={errors.shippingAddress?.message}

                    >

                        <Input

                            {...register("shippingAddress")}

                            placeholder="Enter your complete shipping address"

                        />

                    </FormField>

                    <Button

                        type="submit"

                        className="w-full"

                        disabled={isPending}

                    >

                        {

                            isPending

                                ?

                                "Placing Order..."

                                :

                                "Place Order"

                        }

                    </Button>

                </form>

            </div>

            <div className="rounded-lg border p-6 h-fit">

                <h2 className="text-2xl font-semibold">

                    Order Summary

                </h2>

                <div className="mt-6 space-y-3">

                    {

                        cart.items.map(item => (

                            <div

                                key={item.productId}

                                className="flex justify-between"

                            >

                                <span>

                                    {item.name} × {item.quantity}

                                </span>

                                <span>

                                    ₹{item.subtotal}

                                </span>

                            </div>

                        ))

                    }

                </div>

                <hr className="my-6"/>

                <div className="flex justify-between text-xl font-bold">

                    <span>Total</span>

                    <span>

                        ₹{cart.totalAmount}

                    </span>

                </div>

            </div>

        </div>

    );

}