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

                "py-4",

                className

            )}

            {...props}

        >

            {children}

        </div>

    );

}