import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../api/productApi";
import { QUERY_KEYS } from "../../../shared/constants/queryKeys";

export function useProducts() {

    return useQuery({

        queryKey: QUERY_KEYS.PRODUCTS,

        queryFn: getProducts,

    });

}