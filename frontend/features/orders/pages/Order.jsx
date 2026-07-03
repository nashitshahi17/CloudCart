import { Link } from "react-router-dom";

import Loader from "../../../shared/components/Loader/Loader";
import Button from "../../../shared/components/Button/Button";

import { useOrders } from "../hooks/useOrders";

import OrderCard from "../components/OrderCard";

export default function Orders() {

    const {

        data,

        isLoading,

        error

    } = useOrders();

    if (isLoading) {

        return (

            <Loader
                size="lg"
                text="Loading Orders..."
            />

        );

    }

    if (error) {

        return (

            <div className="text-center py-20">

                <h1 className="text-2xl font-bold">

                    Failed to load orders

                </h1>

            </div>

        );

    }

    const orders = data?.data.orders ?? [];

    if (orders.length === 0) {

        return (

            <div className="text-center py-20">

                <h1 className="text-3xl font-bold">

                    No Orders Yet

                </h1>

                <p className="mt-2 text-[var(--muted)]">

                    Start shopping to place your first order.

                </p>

                <Link to="/products">

                    <Button className="mt-6">

                        Browse Products

                    </Button>

                </Link>

            </div>

        );

    }

    return (

        <div className="space-y-6">

            <h1 className="text-3xl font-bold">

                My Orders

            </h1>

            {

                orders.map(order => (

                    <OrderCard

                        key={order._id}

                        order={order}

                    />

                ))

            }

        </div>

    );

}