import { cn } from "../../../utils/cn";

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

                className

            )}

            {...props}

        >

            {children}

        </h2>

    );

}