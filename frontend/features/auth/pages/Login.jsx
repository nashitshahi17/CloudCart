import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, } from "../../../shared/components/Card";
import Button from "../../../shared/components/Button/Button";
import Input from "../../../shared/components/Input/Input";
import FormField from "../../../shared/components/FormField/FormField";
import Loader from "../../../shared/components/Loader/Loader";
import AuthRedirect from "../components/AuthRedirect";
import { useLogin } from "../hooks/useLogin";
import { useLoginForm } from "../hooks/useLoginForm";
import { useAuth } from "../../../context/AuthContext";

export default function Login() {

    const navigate = useNavigate();
    const location = useLocation();
    const { login } = useAuth();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useLoginForm();

    useEffect(() => {
        if (location.state?.message) {
            toast.success(location.state.message);

            // Remove the message so it doesn't show again on refresh
            navigate(location.pathname, { replace: true, state: {} });
        }
    }, [location, navigate]);

    const { mutate, isPending } = useLogin({
        onSuccess: (response) => {
            login({
                token: response.data.token,
                user: response.data.user,
            });

            toast.success(response.message);
            const destination =
                location.state?.from?.pathname ||
                "/products";
            navigate(destination, {
                replace: true,
            });
        },
        onError: (error) => {
            toast.error(
                error.response?.data?.message || "Login Failed"
            );
        },
    });

    const onSubmit = (data) => {
        mutate(data);
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-[var(--background)] px-4">

            <Card className="w-full max-w-md">
                <CardHeader>
                    <CardTitle>Welcome Back</CardTitle>
                    <CardDescription>
                        Sign in to your account
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="space-y-5"
                    >
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

                        <Button
                            type="submit"
                            className="w-full"
                            disabled={isPending}
                        >
                            {isPending ? <Loader size="sm" /> : "Login"}
                        </Button>
                        <AuthRedirect
                            text="Don't have an account?"
                            linkText="Register"
                            to="/register"
                        />
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}