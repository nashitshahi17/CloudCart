import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../api/productApi";
import { QUERY_KEYS } from "../../../shared/constants/queryKeys";

export function useProducts(params = {}) {

    return useQuery({
        queryKey: [
            ...QUERY_KEYS.PRODUCTS,
            params
        ],
        queryFn: () => getProducts(params)
    });
}
