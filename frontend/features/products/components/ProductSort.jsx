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