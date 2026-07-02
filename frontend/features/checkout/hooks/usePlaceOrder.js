import { useMutation } from "@tanstack/react-query";

import { placeOrder } from "../api/checkoutApi";

export function usePlaceOrder(options = {}) {

    return useMutation({

        mutationFn: placeOrder,

        ...options

    });

}