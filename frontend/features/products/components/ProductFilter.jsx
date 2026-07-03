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

            className="rounded-lg border px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"

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