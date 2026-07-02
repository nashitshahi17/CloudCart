import { useMutation, useQueryClient } from "@tanstack/react-query";

import { addToCart } from "../api/cartApi";

import { QUERY_KEYS } from "../../../shared/constants/queryKeys";

export function useAddToCart(options = {}) {

    const queryClient = useQueryClient();

    return useMutation({

        mutationFn: addToCart,

        onSuccess: (...args) => {

            queryClient.invalidateQueries({

                queryKey: QUERY_KEYS.CART

            });

            options.onSuccess?.(...args);

        },

        onError: (...args) => {

            options.onError?.(...args);

        }

    });

}