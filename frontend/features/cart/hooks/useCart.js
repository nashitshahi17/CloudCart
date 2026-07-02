import { useQuery } from "@tanstack/react-query";

import { getCart } from "../api/cartApi";

import { QUERY_KEYS } from "../../../shared/constants/queryKeys";

export function useCart() {

    return useQuery({

        queryKey: QUERY_KEYS.CART,

        queryFn: getCart,

    });

}