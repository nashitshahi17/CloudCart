import { NavLink } from "react-router-dom";

const links = [

    {

        label:"Products",

        to:"/"

    },

    {

        label:"Orders",

        to:"/orders"

    },

];

export default function NavLinks(){

    return(

        <div className="flex items-center gap-6">

            {

                links.map(link=>(

                    <NavLink

                        key={link.to}

                        to={link.to}

                        className={({isActive})=>

                            `
                            transition-colors

                            ${
                                isActive

                                ? "text-[var(--color-primary)] font-semibold"

                                : "hover:text-[var(--color-primary)]"
                            }
                            `
                        }

                    >

                        {link.label}

                    </NavLink>

                ))

            }

        </div>

    );

}