import { useMutation } from "@tanstack/react-query";
import { loginUser } from "../api/authApi";

export function useLogin(options = {}) {

    return useMutation({

        mutationFn: loginUser,

        ...options,

    });

}