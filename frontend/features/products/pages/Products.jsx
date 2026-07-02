import { useProducts } from "../hooks/useProducts";
import ProductGrid from "../components/ProductGrid";
import Loader from "../../../shared/components/Loader/Loader";
import { mapProduct } from "../utils/productMapper";
import LogoutButton from '../../auth/components/LogoutButton'

export default function Products() {
    const {
        data,
        isLoading,
        error,
    } = useProducts();

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

    const products =
        data?.data?.products?.map(mapProduct) || [];

    return (
        <ProductGrid
        products={products}
        />
    );
    <LogoutButton />

}