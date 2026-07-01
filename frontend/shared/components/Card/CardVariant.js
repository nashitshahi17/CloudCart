export const cardVariants = {

    default:
        "border border-gray-200 bg-white shadow-sm",

    elevated:
        "border border-gray-200 bg-white shadow-lg",

    outlined:
        "border-2 border-gray-300 bg-white shadow-none",

    interactive:
        `
        border
        border-gray-200
        bg-white
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-lg
        cursor-pointer
        `,

    dashboard:
        `
        border
        border-gray-200
        bg-white
        shadow-md
        hover:shadow-xl
        transition-all
        duration-300
        `

};