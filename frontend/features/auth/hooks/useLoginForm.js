import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import { loginSchema } from "../validators/authSchema";

export function useLoginForm() {

    return useForm({

        resolver: zodResolver(loginSchema),

        defaultValues: {

            email: "",

            password: ""

        },

        mode: "onTouched"

    });

}