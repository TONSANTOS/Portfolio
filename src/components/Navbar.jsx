import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6"
// import logo from "../assets/raviKumarLogo.webp"

import "../styles/nav-bar.css"

export function Navbar() {
    return (
        <nav className="flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                {/* <a href="/" aria-label="Home">
                    <img
                        src={logo}
                        alt="Logo"
                        className="mx-2"
                        width={50}
                        height={33}
                    />
                </a> */}
                <h1 className="text-white text-6xl font-bold text-center tracking-tight transform transition-transform duration-300 hover:scale-105">
                    TS
                </h1>
            </div>

            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <a
                    href="https://www.linkedin.com/in/tonnsantoss/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                >
                    <FaLinkedin />
                </a>
                <a
                    href="https://github.com/TONSANTOS"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                >
                    <FaGithub />
                </a>
                <a
                    href="https://www.instagram.com/tonnsantoss/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                >
                    <FaInstagram />
                </a>
            </div>
        </nav>
    )
}
