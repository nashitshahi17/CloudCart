import { cn } from "../../../utils/cn";

export default function CardDescription({

    children,

    className = "",

    ...props

}) {

    return (

        <p

            className={cn(

                "text-sm",

                "text-gray-500",

                className

            )}

            {...props}

        >

            {children}

        </p>

    );

}