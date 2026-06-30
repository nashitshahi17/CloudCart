import { useMutation } from "@tanstack/react-query";
import { registerUser } from "../../api/authApi";

export function useRegister(options = {}) {

    return useMutation({

        mutationFn: registerUser,

        ...options,

    });

}