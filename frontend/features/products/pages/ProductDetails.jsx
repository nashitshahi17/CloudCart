import { useParams } from "react-router-dom";
import { useProduct } from "../hooks/useProduct";
import Loader from "../../../shared/components/Loader/Loader";
import Button from "../../../shared/components/Button/Button";
import { useAddToCart } from "../../cart/hooks/useAddToCart";
import { toast } from "react-hot-toast";
import LogoutButton from '../../auth/components/LogoutButton'

export default function ProductDetails() {
    const { id } = useParams();

    const {
        data,
        isLoading,
        error,
    } = useProduct(id);

    const {
        mutate: addToCart,
        isPending: isAddingToCart
    } = useAddToCart({
        onSuccess: () => {
            toast.success("Product added to cart");
        },
        onError: (error) => {
            toast.error(
                error.response?.data?.message ||
                "Failed to add product"
            );
        }
    });

    const handleAddToCart = () => {
        if (!data?.data) return;

        const product = data.data;

        addToCart({
            productId: product._id,
            quantity: 1
        });
    };

    if (isLoading) {
        return (
            <Loader
                size="lg"
                text="Loading Product..."
            />
        );
    }

    if (error) {
        return <h1>Something went wrong</h1>;
    }

    const product = data.data;

    return (
        <div className="grid gap-10 lg:grid-cols-2">
            <div>
                <img
                    src={
                        product.image ||
                        "https://placehold.co/600x400?text=CloudCart"
                    }
                    alt={product.name}
                    className="w-full rounded-xl"
                />
            </div>

            <div className="space-y-6">
                <h1 className="text-4xl font-bold">
                    {product.name}
                </h1>

                <p className="text-gray-600">
                    {product.description}
                </p>

                <p className="text-3xl font-bold text-blue-600">
                    ₹{product.price}
                </p>

                <p>
                    Category: <strong>{product.category}</strong>
                </p>

                <p>
                    Stock: <strong>{product.stock}</strong>
                </p>

                <Button
                    onClick={handleAddToCart}
                    disabled={isAddingToCart}
                >
                    {isAddingToCart ? "Adding..." : "Add To Cart"}
                </Button>
    
<LogoutButton />
            </div>
        </div>
    );
}