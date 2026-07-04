import { Bell } from "lucide-react";

export default function NotificationItem({ notification }) {

    return (

        <div
            className="
                flex
                items-start
                gap-3
                rounded-lg
                px-4
                py-3
                transition-colors
                hover:bg-[var(--surface-hover)]
            "
        >

            <Bell
                size={18}
                className="
                    mt-1
                    text-[var(--color-primary)]
                "
            />

            <div className="flex-1">

                <h4 className="font-medium">

                    {notification.title}

                </h4>

                <p
                    className="
                        mt-1
                        text-sm
                        text-[var(--muted-foreground)]
                    "
                >
                    {notification.message}
                </p>

            </div>

        </div>

    );

}