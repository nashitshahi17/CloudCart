export default function OrderSummary({

    cartItems,

    totalAmount

}) {

    return (

        <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6">

            <h2 className="mb-4 text-xl font-semibold">

                Order Summary

            </h2>

            <div className="space-y-3">

                {

                    cartItems.map(item => (

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

            <hr className="my-4 border-[var(--border)]" />

            <div className="flex justify-between font-bold text-lg">

                <span>Total</span>

                <span>₹{totalAmount}</span>

            </div>

        </div>

    );

}