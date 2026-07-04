import { Link } from "react-router-dom";
import {Card,CardContent,} from "../../../shared/components/Card";
import Button from "../../../shared/components/Button/Button";

export default function ProductCard({
    product,
}) {
    console.log(product);

    return (
        <Card
            variant="interactive"
            className="group overflow-hidden"
        >

            <img

                src={
                    product.image ||

                    "https://placehold.co/600x400?text=CloudCart"
                }

                alt={product.name}

                className="
h-60

w-full

object-cover

transition-transform

duration-500

group-hover:scale-105
"

            />

            <CardContent className="space-y-3 pt-5">

                <h2 className="text-lg font-semibold">

                    {product.name}

                </h2>

                <p className="text-sm text-[var(--muted)] line-clamp-2">

                    {product.description}

                </p>

                <div className="flex items-center justify-between">

                    <span className="text-xl font-bold text-[var(--color-primary)]">

                        ₹{product.price.toLocaleString("en-IN")}

                    </span>

                    <Link to={`/products/${product.id}`}>

                        <Button>

                            View Details

                        </Button>

                    </Link>

                </div>

            </CardContent>

        </Card>

    );

}