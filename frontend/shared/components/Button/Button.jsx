import {cn} from '../../utils/cn'
export default function Button({
    children,
    type = "button",
    variant = "primary",
    disabled = false,
    className = "",
    ...props
}) {

    const variants = {
        primary:
            "bg-blue-600 hover:bg-blue-700 text-white",
        secondary:
            "bg-gray-200 hover:bg-gray-300 text-gray-900",
        danger:
            "bg-red-600 hover:bg-red-700 text-white",
    };

    return (

        <button
            type={type}
            disabled={disabled}
            className={cn(
                "px-4 py-2 rounded-lg font-medium transition-colors",
                variants[variant],
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
}