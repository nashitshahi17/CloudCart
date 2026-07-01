import { useQuery } from "@tanstack/react-query";
import { getProductById } from "../api/productApi";
import { QUERY_KEYS } from "../../../shared/constants/queryKeys";

export function useProduct(id) {

    return useQuery({

        queryKey: QUERY_KEYS.PRODUCT(id),

        queryFn: () => getProductById(id),

        enabled: !!id,

    });

}