import React from "react"

export default function Nav({ currentPage, pageChangeHandler }) {
    return (
        <div className="header">
            <h1 className="name">Courtney Einsig </h1>
            <nav>
                <ul className="navTabs">
                    <li className="navItem">
                        <a
                            href="#AboutMe"
                            onClick={() => { pageChangeHandler("AboutMe") }}
                            className={"navLink"}
                        >About Me
                        </a>
                    </li>

                    <li className="navItem">
                        <a
                            href="#Portfolio"
                            onClick={() => { pageChangeHandler("Portfolio") }}
                            className={"navLink"}
                        >Portfolio
                        </a>
                    </li>

                    <li className="nav item">
                        <a
                            href="#Resume"
                            onClick={() => { pageChangeHandler("Resume") }}
                            className={"navLink"}
                        >Resume
                        </a>
                    </li>

                    <li className="navItem">
                        <a
                            href="#ContactMe"
                            onClick={() => { pageChangeHandler("Contact") }}
                            className={"navLink"}
                        >Contact Me
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}