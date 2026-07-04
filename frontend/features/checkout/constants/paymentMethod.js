import {
    Smartphone,
    CreditCard,
    Landmark,
    Truck
} from "lucide-react";

export const PAYMENT_METHODS = [

    {
        value: "UPI",
        label: "UPI",
        icon: Smartphone
    },

    {
        value: "CARD",
        label: "Credit / Debit Card",
        icon: CreditCard
    },

    {
        value: "NET_BANKING",
        label: "Net Banking",
        icon: Landmark
    },

    {
        value: "CASH_ON_DELIVERY",
        label: "Cash On Delivery",
        icon: Truck
    }

];