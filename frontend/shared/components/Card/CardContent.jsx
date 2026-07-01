import { cn } from "../../utils/cn";

export default function CardContent({

    children,

    className = "",

    ...props

}) {

    return (

        <div

            className={cn(

                "px-6",

                "pb-6",

                className

            )}

            {...props}

        >

            {children}

        </div>

    );

}