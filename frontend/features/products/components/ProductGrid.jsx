import ProductCard from "./ProductCard";
export default function ProductGrid({
    products,
}) {

    if (!products.length) {

        return (

            <div className="py-20 text-center">

                <h2 className="text-2xl font-semibold">

                    No Products Found

                </h2>

                <p className="mt-2 text-[var(--muted)]">

                    Try another search later.

                </p>

            </div>

        );

    }

    return (

        <div
            className="
                grid
                grid-cols-1
                gap-6
                sm:grid-cols-2
                lg:grid-cols-3
                xl:grid-cols-4
            "
        >

            {

                products.map(product => (

                    <ProductCard

                        key={product.id}

                        product={product}

                    />

                ))

            }

        </div>

    );

}