export const cardVariants = {

    default: `
        bg-[var(--surface)]
        border
        border-[var(--border)]
        shadow-sm
        hover:shadow-md
        transition-all
        duration-200
    `,

    elevated: `
        bg-[var(--surface)]
        border
        border-[var(--border)]
        shadow-lg
        transition-all
        duration-200
    `,

    outlined: `
        bg-[var(--surface)]
        border-2
        border-[var(--border)]
        transition-all
        duration-200
    `,

    ghost: `
        bg-transparent
        transition-all
        duration-200
    `

};