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

                    "rounded-xl",

                    "border",

                    "border-[var(--border)]",

                    "bg-[var(--surface)]",

                    "text-[var(--foreground)]",

                    "placeholder:text-[var(--muted)]",

                    "px-4",

                    "h-12",

                    "px-4",

                    "text-sm",

                    "outline-none",

                    "transition-all",
                    "shadow-sm",

                    "hover:border-[var(--color-primary)]/40",

                    "focus:shadow-lg",

                    "focus:shadow-[var(--color-primary)]/10",

                    "duration-200",

                    "focus:border-[var(--color-primary)]",

                    "focus:ring-2",

                    "focus:ring-[var(--color-primary)]/20",

                    "disabled:cursor-not-allowed",

                    "disabled:opacity-60",

                    className

                )}

                {...props}

            />

        );

    }

);

Input.displayName = "Input";

export default Input;