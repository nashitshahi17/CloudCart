import { useParams } from "react-router-dom";

import Loader from "../../../shared/components/Loader/Loader";
import Card from "../../../shared/components/Card/Card";

import { useOrder } from "../hooks/useOrder";

export default function OrderDetails() {

    const { id } = useParams();

    const {

        data,

        isLoading,

        error

    } = useOrder(id);

    if (isLoading) {

        return (

            <Loader
                size="lg"
                text="Loading Order..."
            />

        );

    }

    if (error) {

        return (

            <h1 className="text-center text-2xl">

                Failed to load order

            </h1>

        );

    }

    const order = data.data;

    return (

        <div className="space-y-8">

            <Card>

                <div className="space-y-3">

                    <h1 className="text-3xl font-bold">

                        Order Details

                    </h1>

                    <p>

                        <strong>Order ID:</strong>

                        {" "}

                        {order._id}

                    </p>

                    <p>

                        <strong>Status:</strong>

                        {" "}

                        {order.status}

                    </p>

                    <p>

                        <strong>Shipping Address:</strong>

                        {" "}

                        {order.shippingAddress}

                    </p>

                    <p>

                        <strong>Placed On:</strong>

                        {" "}

                        {new Date(order.createdAt).toLocaleString()}

                    </p>

                </div>

            </Card>

            <Card>

                <h2 className="mb-5 text-2xl font-semibold">

                    Ordered Items

                </h2>

                <div className="space-y-4">

                    {

                        order.items.map(item => (

                            <div
                                key={item.productId}
                                className="flex items-center justify-between border-b pb-4"
                            >

                                <div>

                                    <h3 className="font-semibold">

                                        {item.name}

                                    </h3>

                                    <p>

                                        ₹{item.price}

                                        {" × "}

                                        {item.quantity}

                                    </p>

                                </div>

                                <div className="font-bold">

                                    ₹{item.subtotal}

                                </div>

                            </div>

                        ))

                    }

                </div>

            </Card>

            <Card>

                <div className="flex justify-between text-2xl font-bold">

                    <span>

                        Total

                    </span>

                    <span>

                        ₹{order.totalAmount}

                    </span>

                </div>

            </Card>

        </div>

    );

}