import { Link } from "react-router-dom";

import Card from "../../../shared/components/Card/Card";
import Button from "../../../shared/components/Button/Button";

export default function OrderCard({ order }) {

    const orderDate = new Date(order.createdAt).toLocaleDateString(
        "en-IN",
        {
            day: "2-digit",
            month: "short",
            year: "numeric",
        }
    );

    const totalItems = order.items.reduce(

        (total, item) => total + item.quantity,

        0

    );

    return (

        <Card>

            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

                <div className="space-y-2">

                    <h2 className="text-lg font-semibold">

                        Order #

                        <span className="font-normal">

                            {order._id}

                        </span>

                    </h2>

                    <p>

                        <span className="font-medium">

                            Status:

                        </span>

                        {" "}

                        {order.status}

                    </p>

                    <p>

                        <span className="font-medium">

                            Items:

                        </span>

                        {" "}

                        {totalItems}

                    </p>

                    <p>

                        <span className="font-medium">

                            Total:

                        </span>

                        {" "}

                        ₹{order.totalAmount}

                    </p>

                    <p>

                        <span className="font-medium">

                            Placed On:

                        </span>

                        {" "}

                        {orderDate}

                    </p>

                </div>

                <Link to={`/orders/${order._id}`}>

                    <Button>

                        View Details

                    </Button>

                </Link>

            </div>

        </Card>

    );

}