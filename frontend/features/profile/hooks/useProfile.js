import { useQuery } from "@tanstack/react-query";

import { getProfile } from "../api/profileApi";

import { QUERY_KEYS } from "../../../shared/constants/queryKeys";

export function useProfile() {

    return useQuery({

        queryKey: QUERY_KEYS.PROFILE,

        queryFn: getProfile

    });

}