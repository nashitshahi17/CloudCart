import { cn } from "../../utils/cn";

export default function CardFooter({

    children,

    className = "",

    ...props

}) {

    return (

        <div

            className={cn(

                "flex",

                "items-center",

                "justify-between",

                "gap-3",

                "border-t",

                "border-[var(--border)]",

                "border-[var(--border)]",

                "px-6",

                "py-5",

                className

            )}

            {...props}

        >

            {children}

        </div>

    );

}