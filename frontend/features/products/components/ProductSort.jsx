export default function ProductSort({

    sortBy,

    order,

    onSortChange

}) {

    function handleChange(event) {

        const value = event.target.value;

        if (!value) {

            onSortChange({

                sortBy: "",

                order: ""

            });

            return;

        }

        const [sortBy, order] = value.split("-");

        onSortChange({

            sortBy,

            order

        });

    }

    return (

        <select

            value={

                sortBy

                    ? `${sortBy}-${order}`

                    : ""

            }

            onChange={handleChange}

            className="rounded-lg border px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"

        >

            <option value="">

                Default

            </option>

            <option value="price-asc">

                Price: Low to High

            </option>

            <option value="price-desc">

                Price: High to Low

            </option>

            <option value="createdAt-desc">

                Newest

            </option>

            <option value="createdAt-asc">

                Oldest

            </option>

        </select>

    );

}