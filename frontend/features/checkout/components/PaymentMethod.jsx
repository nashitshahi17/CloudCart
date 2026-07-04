import { PAYMENT_METHODS } from "../constants/paymentMethod";

export default function PaymentMethod({

    value,

    onChange

}) {

    return (

        <div className="space-y-3">

            {

                PAYMENT_METHODS.map(method => {

                    const Icon = method.icon;

                    const selected = value === method.value;

                    return (

                        <label

                            key={method.value}

                            className={`
                                flex
                                cursor-pointer
                                items-center
                                gap-4
                                rounded-xl
                                border
                                p-4
                                transition-all
                                duration-200
                                ${
                                    selected
                                        ? "border-[var(--color-primary)] bg-[var(--surface-hover)]"
                                        : "border-[var(--border)] bg-[var(--surface)] hover:bg-[var(--surface-hover)]"
                                }
                            `}

                        >

                            <input

                                type="radio"

                                name="paymentMethod"

                                checked={selected}

                                onChange={() => onChange(method.value)}

                                className="hidden"

                            />

                            <Icon

                                size={22}

                                className="text-[var(--color-primary)]"

                            />

                            <span

                                className="font-medium text-[var(--foreground)]"

                            >

                                {method.label}

                            </span>

                        </label>

                    );

                })

            }

        </div>

    );

}