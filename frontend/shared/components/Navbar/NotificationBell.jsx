import { useState } from "react";

import { Bell } from "lucide-react";

import useNotifications from "../../../features/notifications/hooks/useNotification";

import NotificationDropdown from "./NotificationDropdown";

export default function NotificationBell() {

    const [open, setOpen] = useState(false);

    const {

        data: notifications = []

    } = useNotifications();

    return (

        <div className="relative">

            <button

                onClick={() => setOpen(!open)}

                className="
                    relative

                    rounded-full

                    p-2

                    transition-colors

                    hover:bg-[var(--surface-hover)]
                "

            >

                <Bell size={22} />

                {

                    notifications.length > 0 && (

                        <span

                            className="
                                absolute

                                -right-1

                                -top-1

                                flex

                                h-5

                                w-5

                                items-center

                                justify-center

                                rounded-full

                                bg-red-500

                                text-xs

                                font-bold

                                text-white
                            "

                        >

                            {

                                notifications.length > 9

                                    ? "9+"

                                    : notifications.length

                            }

                        </span>

                    )

                }

            </button>

            {

                open && (

                    <NotificationDropdown

                        notifications={notifications}

                    />

                )

            }

        </div>

    );

}