import { useProducts } from "../hooks/useProducts";
import LogoutButton from '../../auth/components/LogoutButton'
import ProductCard from "../components/ProductCard";
import { mapProduct } from "../utils/productMapper";

export default function Products() {

    const {data,isLoading,error,} = useProducts();

    if (isLoading)
        return <h1>Loading...</h1>;
    if (error)
        return <h1>Error</h1>;
    return (
        <div className="space-y-5">
            {
                data?.data?.products?.map(product => (
                    <ProductCard
                        product = {mapProduct(product)}

                        key={product._id}

                        product={product}

                    />

                ))

            }

            <LogoutButton />
        </div>

    );

}