import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { checkout } from "../api/checkoutApi";

export default function useCheckout() {

    const queryClient = useQueryClient();

    return useMutation({

        mutationFn: checkout,

        onSuccess: () => {

            toast.success("Order placed successfully!");

            queryClient.invalidateQueries({
                queryKey: ["cart"]
            });

            queryClient.invalidateQueries({
                queryKey: ["orders"]
            });

        },

        onError: (error) => {

            toast.error(
                error.response?.data?.message ||
                "Checkout failed"
            );

        }

    });

}