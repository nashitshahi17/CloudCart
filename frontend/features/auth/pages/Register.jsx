import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, } from "../../../shared/components/Card";
import { zodResolver } from '@hookform/resolvers/zod'
import { registerSchema } from '../validators/authSchema'
import { useForm } from "react-hook-form";
import Button from "../../../shared/components/Button/Button";
import Input from "../../../shared/components/Input/Input";
import FormField from "../../../shared/components/FormField/FormField";
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import Loader from "../../../shared/components/Loader/Loader";
import { useRegister } from "../hooks/useRegister";
import { useRegisterForm } from "../hooks/useRegisterForm";
import AuthRedirect from "../components/AuthRedirect";

export default function Register() {
    const navigate = useNavigate();

    const {
        mutate,
        isPending,
    } = useRegister({

        onSuccess: (data) => {

            toast.success(
                data.message || "Registration Successful"
            );

            navigate("/login", {
                state: {
                    message: "Registration successful! Please sign in."
                }
            });

        },

        onError: (error) => {
            console.error("Register error:", error);
            console.error("Response:", error.response);
            console.error("Request:", error.request);

            toast.error(

                error.response?.data?.message ||

                "Registration Failed"

            );

        }

    });
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useRegisterForm();
    const onSubmit = (data) => {
        const {
            confirmPassword,
            ...registerData
        } = data
        mutate(registerData)
    };
    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">

            <Card className="w-full max-w-md">

                <CardHeader>

                    <CardTitle>Create Account</CardTitle>

                    <CardDescription>
                        Register to continue shopping
                    </CardDescription>

                </CardHeader>

                <CardContent>

                    <form
                        className="space-y-5"
                        onSubmit={handleSubmit(onSubmit)}
                    >

                        <FormField
                            label="Name"
                            htmlFor="name"
                            required
                            error={errors.name?.message}
                        >
                            <Input
                                id="name"
                                placeholder="Enter your name"
                                {...register("name")}
                            />
                        </FormField>

                        <FormField
                            label="Email"
                            htmlFor="email"
                            required
                            error={errors.email?.message}
                        >
                            <Input
                                id="email"
                                type="email"
                                placeholder="Enter your email"
                                {...register("email")}
                            />
                        </FormField>

                        <FormField
                            label="Password"
                            htmlFor="password"
                            required
                            error={errors.password?.message}
                        >
                            <Input
                                id="password"
                                type="password"
                                placeholder="Enter your password"
                                {...register("password")}
                            />
                        </FormField>

                        <FormField
                            label="Confirm Password"
                            htmlFor="confirmPassword"
                            required
                            error={errors.confirmPassword?.message}
                        >

                            <Input
                                id="confirmPassword"
                                type="password"
                                placeholder="Confirm your password"
                                {...register("confirmPassword")}
                            />

                        </FormField>

                        <Button
                            type="submit"
                            className="w-full"
                            disabled={isPending}
                        >
                            {
                                isPending
                                    ?
                                    <Loader size="sm" />
                                    :
                                    "Create Account"
                            }
                        </Button>
                        <AuthRedirect
                            text="Already have an account?"
                            linkText="Login"
                            to="/login"
                        />
                    </form>

                </CardContent>

                <CardFooter>


                </CardFooter>

            </Card>

        </div>
    );
}