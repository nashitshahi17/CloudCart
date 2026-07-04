import { cn } from "../../utils/cn";

export default function Button({
    children,
    type = "button",
    variant = "primary",
    size = "md",
    disabled = false,
    className = "",
    ...props
}) {

    const variants = {

        primary:
            `
            bg-[var(--color-primary)]
            text-white
            hover:bg-[var(--color-primary-hover)]
            rounded-xl
            shadow-md
            hover:shadow-lg
            hover:-translate-y-0.5
            active:scale-95
            transition-all
            duration-300
            `,

        secondary:
            `
            bg-[var(--secondary)]
            text-[var(--foreground)]
            hover:bg-[var(--surface-hover)]
            border
            border-[var(--border)]
            `,

        destructive:
            `
            bg-[var(--color-danger)]
            text-white
            hover:opacity-90
            `,

        ghost:
            `
            bg-transparent
            text-[var(--foreground)]
            hover:bg-[var(--surface-hover)]
            `

    };

    const sizes = {

        sm: "px-3 py-2 text-sm",

        md: "px-4 py-2 text-base",

        lg: "px-6 py-3 text-lg"

    };

    return (

        <button

            type={type}

            disabled={disabled}

            className={cn(

                "inline-flex items-center justify-center",

                "rounded-lg",

                "font-medium",

                "transition-all duration-200",

                "focus:outline-none",

                "focus:ring-2",

                "focus:ring-[var(--color-primary)]",

                "focus:ring-offset-2",

                "cursor-pointer",

                "disabled:opacity-50",

                "disabled:cursor-not-allowed",

                variants[variant],

                sizes[size],

                className

            )}

            {...props}

        >

            {children}

        </button>

    );

}