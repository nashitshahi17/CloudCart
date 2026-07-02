import { useMutation, useQueryClient } from "@tanstack/react-query";

import { updateCartItem } from "../api/cartApi";

import { QUERY_KEYS } from "../../../shared/constants/queryKeys";

export function useUpdateCart(options = {}) {

    const queryClient = useQueryClient();

    return useMutation({

        mutationFn: updateCartItem,

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