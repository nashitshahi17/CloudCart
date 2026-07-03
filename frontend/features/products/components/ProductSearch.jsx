import { Search } from "lucide-react";

export default function ProductSearch({

    value,

    onChange

}) {

    return (

        <div className="relative">

            <Search

                className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--muted)]"

                size={20}

            />

            <input

                type="text"

                placeholder="Search products..."

                value={value}

                onChange={(e) => onChange(e.target.value)}

                className="w-full rounded-lg border py-3 pl-10 pr-4 outline-none focus:ring-2 focus:ring-blue-500"

            />

        </div>

    );

}