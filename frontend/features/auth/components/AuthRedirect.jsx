import { Link } from "react-router-dom";

export default function AuthRedirect({

    text,

    linkText,

    to,

}) {

    return (

        <p className="text-center text-sm text-gray-600">

            {text}{" "}

            <Link

                to={to}

                className="font-medium text-blue-600 transition-colors hover:text-blue-700 hover:underline"

            >

                {linkText}

            </Link>

        </p>

    );

}