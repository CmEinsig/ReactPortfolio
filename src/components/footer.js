import React from "react"

export default function Footer({currentPage}) {
    const isFixedPosition = currentPage === "AboutMe" || currentPage === "Contact"

    return (
        <footer className={isFixedPosition ? "fixed-footer" : ""}>
       "If you can dream it, you can do it."
        </footer>
    )
}