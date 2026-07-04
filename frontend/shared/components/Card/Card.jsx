import { cn } from "../../utils/cn";
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

                "rounded-2xl",

                "border",

                "border-[var(--border)]",

                "shadow-sm",

                "transition-all",

                "duration-300",

                "hover:-translate-y-1",

                "hover:shadow-xl",

                "overflow-hidden",

                "text-[var(--foreground)]",

                cardVariants[variant] ??

                cardVariants.default,

                className

            )}

            {...props}

        >

            {children}

        </div>

    );

}