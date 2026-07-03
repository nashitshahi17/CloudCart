import Loader from "../../../shared/components/Loader/Loader";
import Card from "../../../shared/components/Card/Card";

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

        <Card>

            <div className="space-y-5">

                <h1 className="text-3xl font-bold">

                    My Profile

                </h1>

                <div>

                    <p className="font-semibold">

                        Name

                    </p>

                    <p>

                        {user.name}

                    </p>

                </div>

                <div>

                    <p className="font-semibold">

                        Email

                    </p>

                    <p>

                        {user.email}

                    </p>

                </div>

                <div>

                    <p className="font-semibold">

                        Role

                    </p>

                    <p>

                        {user.role}

                    </p>

                </div>

            </div>

        </Card>

    );

}