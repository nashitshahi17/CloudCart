import NotificationCard from "./NotificationCard";

import EmptyNotifications from "./EmptyNotifications";

export default function NotificationList({

    notifications

}) {

    if (!notifications.length) {

        return <EmptyNotifications />;

    }

    return (

        <>

            {

                notifications.map(notification => (

                    <NotificationCard

                        key={notification._id}

                        notification={notification}

                    />

                ))

            }

        </>

    );

}