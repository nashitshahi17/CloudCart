import { Link } from "react-router-dom";

import {
    User,
    Mail,
    ShieldCheck,
    Package,
    Bell,
    ShoppingCart
} from "lucide-react";

import Loader from "../../../shared/components/Loader/Loader";

import Card from "../../../shared/components/Card/Card";
import CardHeader from "../../../shared/components/Card/CardHeader";
import CardContent from "../../../shared/components/Card/CardContent";

import Button from "../../../shared/components/Button/Button";

import { useProfile } from "../hooks/useProfile";

export default function Profile() {

    const {

        data,

        isLoading,

        error

    } = useProfile();

    if (isLoading) {

        return (

            <Loader

                size="lg"

                text="Loading Profile..."

            />

        );

    }

    if (error) {

        return (

            <h1 className="text-center">

                Failed to load profile

            </h1>

        );

    }

    const user = data.data;

    return (

    <div className="mx-auto max-w-5xl space-y-8">

        <Card>

            <CardHeader className="items-center text-center">

                <div
                    className="
                        flex
                        h-24
                        w-24
                        items-center
                        justify-center
                        rounded-full
                        bg-[var(--color-primary)]
                        text-3xl
                        font-bold
                        text-white
                        shadow-lg
                    "
                >

                    {

                        user.name
                            .split(" ")
                            .map(name => name[0])
                            .join("")
                            .toUpperCase()

                    }

                </div>

                <h1 className="mt-4 text-3xl font-bold">

                    {user.name}

                </h1>

                <p className="text-[var(--muted)]">

                    {user.email}

                </p>

                <span
                    className="
                        mt-3
                        inline-flex
                        items-center
                        gap-2
                        rounded-full
                        bg-green-500/15
                        px-4
                        py-2
                        text-sm
                        font-medium
                        text-green-500
                    "
                >

                    <ShieldCheck size={16} />

                    {user.role}

                </span>

            </CardHeader>

        </Card>

        <Card>

            <CardHeader>

                <h2 className="text-xl font-semibold">

                    Personal Information

                </h2>

            </CardHeader>

            <CardContent>

                <div className="space-y-6">

                    <div className="flex items-center justify-between border-b border-[var(--border)] pb-4">

                        <div className="flex items-center gap-3">

                            <User
                                size={20}
                                className="text-[var(--color-primary)]"
                            />

                            <span className="font-medium">

                                Full Name

                            </span>

                        </div>

                        <span>

                            {user.name}

                        </span>

                    </div>

                    <div className="flex items-center justify-between border-b border-[var(--border)] pb-4">

                        <div className="flex items-center gap-3">

                            <Mail
                                size={20}
                                className="text-[var(--color-primary)]"
                            />

                            <span className="font-medium">

                                Email

                            </span>

                        </div>

                        <span>

                            {user.email}

                        </span>

                    </div>

                    <div className="flex items-center justify-between">

                        <div className="flex items-center gap-3">

                            <ShieldCheck
                                size={20}
                                className="text-[var(--color-primary)]"
                            />

                            <span className="font-medium">

                                Role

                            </span>

                        </div>

                        <span className="font-semibold">

                            {user.role}

                        </span>

                    </div>

                </div>

            </CardContent>

        </Card>

        <Card>

            <CardHeader>

                <h2 className="text-xl font-semibold">

                    Quick Actions

                </h2>

            </CardHeader>

            <CardContent>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

                    <Link to="/orders">

                        <Button className="w-full">

                            <Package size={18} />

                            Orders

                        </Button>

                    </Link>

                    <Link to="/notifications">

                        <Button
                            variant="secondary"
                            className="w-full"
                        >

                            <Bell size={18} />

                            Notifications

                        </Button>

                    </Link>

                    <Link to="/cart">

                        <Button
                            variant="secondary"
                            className="w-full"
                        >

                            <ShoppingCart size={18} />

                            Cart

                        </Button>

                    </Link>

                    <Button
                        variant="ghost"
                        disabled
                        className="w-full"
                    >

                        Edit Profile

                    </Button>

                </div>

            </CardContent>

        </Card>

    </div>

);

}