import { forwardRef } from "react";
import { cn } from "../../utils/cn";

const Input = forwardRef(

    (
        {
            type = "text",
            placeholder = "",
            className = "",
            disabled = false,
            ...props
        },
        ref
    ) => {

        return (

            <input

                ref={ref}

                type={type}

                placeholder={placeholder}

                disabled={disabled}

                className={cn(

                    "w-full",

                    "rounded-lg",

                    "border",

                    "border-gray-300",

                    "bg-white",

                    "px-4",

                    "py-2.5",

                    "text-sm",

                    "outline-none",

                    "transition-all",

                    "duration-200",

                    "focus:border-blue-500",

                    "focus:ring-2",

                    "focus:ring-blue-200",

                    "disabled:bg-gray-100",

                    "disabled:cursor-not-allowed",

                    className

                )}

                {...props}

            />

        );

    }

);

Input.displayName = "Input";

export default Input;