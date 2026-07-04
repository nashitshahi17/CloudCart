import Input from "../../../shared/components/Input/Input";

export default function ShippingAddressForm({

    value,

    onChange

}) {

    return (

        <div className="space-y-3">

            <h2 className="text-xl font-semibold text-[var(--foreground)]">

                Shipping Address

            </h2>

            <Input

                placeholder="Enter your shipping address"

                value={value}

                onChange={(e) => onChange(e.target.value)}

            />

        </div>

    );

}