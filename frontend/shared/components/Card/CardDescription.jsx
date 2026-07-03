import { cn } from "../../utils/cn";

export default function CardDescription({

    children,

    className = "",

    ...props

}) {

    return (

        <p

            className={cn(

                "text-sm",

                "text-[var(--muted)]",

                className

            )}

            {...props}

        >

            {children}

        </p>

    );

}