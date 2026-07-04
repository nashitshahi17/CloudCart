import { Bell } from "lucide-react";

export default function EmptyNotifications() {

    return (

        <div className="flex flex-col items-center justify-center py-16">

            <Bell

                size={56}

                className="text-[var(--muted-foreground)]"

            />

            <h2 className="mt-4 text-xl font-semibold">

                No Notifications

            </h2>

            <p className="mt-2 text-sm text-[var(--muted-foreground)]">

                You're all caught up.

            </p>

        </div>

    );

}