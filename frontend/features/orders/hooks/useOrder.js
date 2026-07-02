import { useQuery } from "@tanstack/react-query";

import { getOrder } from "../api/orderApi";

import { QUERY_KEYS } from "../../../shared/constants/queryKeys";

export function useOrder(orderId) {

    return useQuery({

        queryKey: ["order", orderId],

        queryFn: () => getOrder(orderId),

        enabled: !!orderId

    });

}