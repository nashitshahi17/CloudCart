import { cn } from "../../../utils/cn";
import { cardVariants } from "./CardVariant";

export default function Card({

    children,
    variant = "default",

    className = "",

    ...props

}) {

    return (

        <div

            className={cn(

                "rounded-xl",

                cardVariants[variant] ?? cardVariants.default,

                className

            )}

            {...props}

        >

            {children}

        </div>

    );

}