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

                "border-gray-100",

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