import { useQuery } from "@tanstack/react-query";

import { getOrders } from "../api/orderApi";

import { QUERY_KEYS } from "../../../shared/constants/queryKeys";

export function useOrders(params = {}) {

    return useQuery({

        queryKey: [...QUERY_KEYS.ORDERS, params],

        queryFn: () => getOrders(params)

    });

}