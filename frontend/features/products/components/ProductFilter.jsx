export default function ProductFilter({

    category,

    onCategoryChange

}) {

    const categories = [

        "Electronics",

        "Clothing",

        "Books",

        "Home",

        "Sports"

    ];

    return (

        <select

            value={category}

            onChange={(e) => onCategoryChange(e.target.value)}

            className="
w-full
md:w-56

rounded-xl

border

border-[var(--border)]

bg-[var(--surface)]

px-4

py-3

text-[var(--foreground)]

shadow-sm

transition-all

duration-300

hover:border-[var(--color-primary)]

focus:border-[var(--color-primary)]

focus:outline-none

focus:ring-4

focus:ring-[var(--color-primary)]/20
"

        >

            <option value="">

                All Categories

            </option>

            {

                categories.map(category => (

                    <option

                        key={category}

                        value={category}

                    >

                        {category}

                    </option>

                ))

            }

        </select>

    );

}