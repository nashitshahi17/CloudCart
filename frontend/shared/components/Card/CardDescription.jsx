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

                "leading-relaxed",

                "text-[var(--muted)]",

                className

            )}

            {...props}

        >

            {children}

        </p>

    );

}