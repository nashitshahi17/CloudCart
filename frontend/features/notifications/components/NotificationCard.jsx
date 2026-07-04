import Card from "../../../shared/components/Card/Card";

import CardContent from "../../../shared/components/Card/CardContent";

export default function NotificationCard({

    notification

}) {

    return (

        <Card className="mb-4">

            <CardContent>

                <h3 className="font-semibold">

                    {notification.title}

                </h3>

                <p className="mt-2 text-sm">

                    {notification.message}

                </p>

                <p className="mt-4 text-xs text-[var(--muted-foreground)]">

                    {new Date(

                        notification.createdAt

                    ).toLocaleString()}

                </p>

            </CardContent>

        </Card>

    );

}