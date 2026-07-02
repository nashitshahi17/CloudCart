import { useMutation, useQueryClient } from "@tanstack/react-query";

import { removeCartItem } from "../api/cartApi";

import { QUERY_KEYS } from "../../../shared/constants/queryKeys";

export function useRemoveCartItem(options = {}) {

    const queryClient = useQueryClient();

    return useMutation({

        mutationFn: removeCartItem,

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