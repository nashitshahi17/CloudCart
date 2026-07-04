import { Link } from "react-router-dom";

import NotificationItem from "./NotificationItem";

export default function NotificationDropdown({

    notifications

}) {

    return (

        <div
            className="
                absolute
                right-0
                mt-3

                w-96

                overflow-hidden

                rounded-xl

                border

                border-[var(--border)]

                bg-[var(--surface)]

                shadow-xl
            "
        >

            <div
                className="
                    border-b
                    border-[var(--border)]
                    p-4
                "
            >

                <h3 className="font-semibold">

                    Notifications

                </h3>

            </div>

            {

                notifications.length === 0 ? (

                    <p className="p-6 text-center">

                        No Notifications

                    </p>

                ) : (

                    notifications

                        .slice(0,5)

                        .map(notification=>(

                            <NotificationItem

                                key={notification._id}

                                notification={notification}

                            />

                        ))

                )

            }

            <Link

                to="/notifications"

                className="
                    block

                    border-t

                    border-[var(--border)]

                    p-3

                    text-center

                    font-medium

                    text-[var(--color-primary)]

                    hover:bg-[var(--surface-hover)]
                "

            >

                View All

            </Link>

        </div>

    );

}