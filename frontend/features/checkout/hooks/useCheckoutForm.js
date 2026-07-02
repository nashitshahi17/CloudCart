import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import { checkoutSchema } from "../validators/checkoutSchema";

export function useCheckoutForm() {

    return useForm({

        resolver: zodResolver(checkoutSchema),

        defaultValues: {

            shippingAddress: ""

        }

    });

}