import NotificationList from "../components/NotificationList";
import useNotifications from "../hooks/useNotification";

export default function Notifications() {

    const {

        data: notifications = [],

        isPending,

        isError,

        error

    } = useNotifications();

    if (isPending) {

        return (

            <div className="py-10 text-center">

                Loading notifications...

            </div>

        );

    }

    if (isError) {

        return (

            <div className="py-10 text-center text-red-500">

                {error?.response?.data?.message || "Something went wrong"}

            </div>

        );

    }

    return (

        <div className="mx-auto max-w-4xl space-y-6">

            <h1 className="text-3xl font-bold">

                Notifications

            </h1>

            <NotificationList

                notifications={notifications}

            />

        </div>

    );

}