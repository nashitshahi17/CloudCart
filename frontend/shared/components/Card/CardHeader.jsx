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

                "space-y-2",

                "p-6",

                className

            )}

            {...props}

        >

            {children}

        </div>

    );

}