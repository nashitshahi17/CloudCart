import { Link } from "react-router-dom";

export default function AuthRedirect({

    text,

    linkText,

    to,

}) {

    return (

        <p className="text-center text-sm text-[var(--muted)]">

            {text}{" "}

            <Link

                to={to}

                className="font-medium text-[var(--color-primary)]600 transition-colors hover:text-[var(--color-primary)]700 hover:underline"

            >

                {linkText}

            </Link>

        </p>

    );

}