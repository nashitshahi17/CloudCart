import { useState } from "react";
import { useProducts } from "../hooks/useProducts";
import ProductGrid from "../components/ProductGrid";
import ProductSearch from "../components/ProductSearch";
import Loader from "../../../shared/components/Loader/Loader";
import { mapProduct } from "../utils/productMapper";
import { useDebounce } from "../../../shared/hooks/useDebounce";
import ProductFilter from "../components/ProductFilter";
import ProductSort from "../components/ProductSort";

export default function Products() {
    const [search, setSearch] = useState("");
    const debouncedSearch = useDebounce(search, 500);
    const [category, setCategory] = useState("");
    const [sortBy, setSortBy] = useState("");
    const [order, setOrder] = useState("");

    const {
        data,
        isLoading,
        error,
    } = useProducts({ search: debouncedSearch, category, sortBy, order });

    if (isLoading) {
        return (
            <Loader
                size="lg"
                text="Loading Products..."
            />
        );
    }

    if (error) {
        return (
            <h1>Something went wrong</h1>
        );
    }

    const products = data?.data?.products?.map(mapProduct) || [];

    return (
        <>
            <div className="flex justify-end mb-4">
            </div>

            <div className="mb-8 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm">

                <ProductSearch
                    value={search}
                    onChange={setSearch}
                />

                <div className="mt-5 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

                    <div className="flex flex-col gap-4 sm:flex-row">

                        <ProductFilter
                            category={category}
                            onCategoryChange={setCategory}
                        />

                        <ProductSort
                            sortBy={sortBy}
                            order={order}
                            onSortChange={({ sortBy, order }) => {
                                setSortBy(sortBy);
                                setOrder(order);
                            }}
                        />

                    </div>

                    <p className="text-sm text-[var(--muted)]">

                        {products.length} Products Found

                    </p>

                </div>

            </div>

            <ProductGrid
                products={products}
            />
        </>
    );
}