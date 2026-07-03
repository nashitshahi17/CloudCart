import { Moon, Sun } from "lucide-react";

import { useTheme } from "../../context/ThemeContext";

export default function ThemeToggle() {

    const {

        isDark,

        toggleTheme

    } = useTheme();

    return (

        <button

            onClick={toggleTheme}

            className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                text-[var(--foreground)]
                transition-all
                duration-200
                hover:bg-[var(--surface-hover)]
            "

            aria-label="Toggle Theme"

        >

            {

                isDark

                    ?

                    <Sun size={20} />

                    :

                    <Moon size={20} />

            }

        </button>

    );

}