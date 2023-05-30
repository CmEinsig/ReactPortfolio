import React, { useState } from "react"
import Nav from "./Nav"
import AboutMe from "./pages/AboutMe"
import Portfolio from "./pages/Portfolio"
import Contact from "./pages/Contact"
import Resume from "./pages/Resume" 
import Footer from "./Footer"

export default function PortfolioContainer() {
    //set default for currentPage to be AboutMe page
    const [ currentPage, setCurrentPage ] = useState("AboutMe")

    //Renders page 
    const renderPage = () => {
        if (currentPage === "AboutMe") {
            return <AboutMe />
        } else if (currentPage === "Portfolio") {
            return <Portfolio />
        } else if (currentPage === "Contact") {
            return <Contact />
        } else {
            return <Resume />
        }
    }

    //Sets current page
    const pageChangeHandler = (page) => setCurrentPage(page)

    return (
        <div className="portfolioContainer">
            <Nav currentPage={currentPage} pageChangeHandler={pageChangeHandler} />

            {renderPage()}

            <Footer currentPage={currentPage}></Footer>
        </div>
    )
}