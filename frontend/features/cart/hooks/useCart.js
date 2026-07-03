import { useQuery } from "@tanstack/react-query";

import { getCart } from "../api/cartApi";

import { QUERY_KEYS } from "../../../shared/constants/queryKeys";
import { useAuth } from "../../../context/AuthContext";

export function useCart() {
    const {isAuthenticated} = useAuth()

    return useQuery({

        queryKey: QUERY_KEYS.CART,

        queryFn: getCart,

        enabled: isAuthenticated
    });

}