import { cn } from "../../utils/cn";

export default function FormField({

    label,

    htmlFor,

    error,

    required = false,

    children,

    className = ""

}) {

    return (

        <div className={cn(

            "space-y-2",

            className

        )}>

            <label

                htmlFor={htmlFor}

                className="block text-sm font-medium text-[var(--muted)]"

            >

                {label}

                {required && (

                    <span className="ml-1 text-red-500">

                        *

                    </span>

                )}

            </label>

            {children}

            {error && (

                <p

                    className="text-sm text-red-500"

                >

                    {error}

                </p>

            )}

        </div>

    );

}