import { cn } from "../../utils/cn";

export default function CardHeader({

    children,

    className = "",

    ...props

}) {

    return (

        <div

            className={cn(

                "flex",

                "flex-col",

                "space-y-1",

                "px-6",

                "pt-5",

                "pb-3",

                "text-[var(--foreground)]",

                className

            )}

            {...props}

        >

            {children}

        </div>

    );

}