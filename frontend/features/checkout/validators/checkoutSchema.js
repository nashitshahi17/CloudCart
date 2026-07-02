import { z } from "zod"
export const checkoutSchema = z.object({

    shippingAddress: z

        .string()

        .trim()

        .min(10, "Shipping address is too short")

        .max(250)

});