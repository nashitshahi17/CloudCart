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

                "justify-end",

                "gap-3",

                "border-t",

                "border-[var(--border)]100",

                "border-[var(--border)]",

                "px-6",

                "py-4",

                className

            )}

            {...props}

        >

            {children}

        </div>

    );

}