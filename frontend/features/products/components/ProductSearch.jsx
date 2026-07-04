import { Search } from "lucide-react";
import Input from "../../../shared/components/Input/Input";

export default function ProductSearch({ value, onChange }) {

    return (

        <div className="relative">

            <Search
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--muted)]"
            />

            <Input
                value={value}
                placeholder="Search products..."
                onChange={(e) => onChange(e.target.value)}
                className="h-14 pl-12 text-base"
            />

        </div>

    );

}