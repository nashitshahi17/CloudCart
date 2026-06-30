import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {registerSchema} from '../../validators/authSchema'

export function useRegisterForm() {

    return useForm({

        resolver: zodResolver(registerSchema),

        defaultValues: {
            name: "",
            email: "",
            password: ""
        },
        mode: "onTouched",
    });
}