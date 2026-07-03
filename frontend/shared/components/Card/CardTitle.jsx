import { cn } from "../../utils/cn";

export default function CardTitle({

    children,

    className = "",

    ...props

}) {

    return (

        <h2

            className={cn(

                "text-2xl",

                "font-bold",

                "tracking-tight",

                "text-[var(--foreground)]",

                className

            )}

            {...props}

        >

            {children}

        </h2>

    );

}