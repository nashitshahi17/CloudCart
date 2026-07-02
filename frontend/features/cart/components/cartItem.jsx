import Button from "../../../shared/components/Button/Button";
import { useUpdateCart } from "../hooks/useUpdateCart";
import { useRemoveCartItem } from "../hooks/useRemoveCart";

import toast from "react-hot-toast";

export default function CartItem({ item }) {

    const {

        mutate: updateQuantity,

        isPending: isUpdating

    } = useUpdateCart({

        onSuccess: () => {

            toast.success("Cart updated");

        },

        onError: (error) => {

            toast.error(

                error.response?.data?.message ||

                "Failed to update cart"

            );

        }

    });

    const {

        mutate: removeItem,

        isPending: isRemoving

    } = useRemoveCartItem({

        onSuccess: () => {

            toast.success("Item removed");

        },

        onError: (error) => {

            toast.error(

                error.response?.data?.message ||

                "Failed to remove item"

            );

        }

    });

    function increaseQuantity() {

        updateQuantity({

            productId: item.productId,

            quantity: item.quantity + 1

        });

    }

    function decreaseQuantity() {

        updateQuantity({

            productId: item.productId,

            quantity: item.quantity - 1

        });

    }

    function handleRemove() {

        removeItem(item.productId);

    }

    return (

        <div className="flex gap-6 rounded-lg border p-4">

            <img

                src={
                    item.image ||

                    "https://placehold.co/150x150?text=CloudCart"
                }

                alt={item.name}

                className="h-28 w-28 rounded-lg object-cover"

            />

            <div className="flex flex-1 flex-col justify-between">

                <div>

                    <h2 className="text-xl font-semibold">

                        {item.name}

                    </h2>

                    <p className="mt-2 text-lg font-bold text-blue-600">

                        ₹{item.price}

                    </p>

                </div>

                <div className="mt-4 flex items-center justify-between">

                    <div className="flex items-center gap-3">

                        <Button

                            onClick={decreaseQuantity}

                            disabled={isUpdating}

                        >

                            -

                        </Button>

                        <span className="font-semibold">

                            {item.quantity}

                        </span>

                        <Button

                            onClick={increaseQuantity}

                            disabled={isUpdating}

                        >

                            +

                        </Button>

                    </div>

                    <Button

                        variant="destructive"

                        onClick={handleRemove}

                        disabled={isRemoving}

                    >

                        Remove

                    </Button>

                </div>

            </div>

        </div>

    );

}