import PortfoliYo from "./assets/images/PortfoliYo.png"
import What2Watch from "./assets/images/What2Watch"
import HBGElite from "./assets/images/HBGElite.png"
import Portfolio from "./assets/images/Portfolio.png"

const projects = [ 
    {
        id: 1, 
        name: "Courtney's Portfolio",
        tech: "Front end portfolio site built with HTML, CSS, and flex-boxes",
        image: Portfolio,
        github: "https://github.com/CmEinsig/portfolio",
        deployed: "https://cmeinsig.github.io/portfolio/",
    },
    {
        id: 2, 
        name: "Portfoli-Yo",
        tech: "Full Stack app built with Javascript, Bulma, Express, and Handlebars.",
        image: PortfoliYo,
        github: "https://github.com/CmEinsig/Portfoli-Yo",
        deployed: "https://infinite-harbor-94913.herokuapp.com/",
    },
    {
        id: 3,
        name: "What 2 Watch",
        tech: "Front end app built with Bulma, MoviesDB API, TMBD API, Javascript, and CSS.",
        image: What2Watch,
        github: "https://github.com/CmEinsig/Project-What-2-Watch",
        deployed: "https://cmeinsig.github.io/Project-What-2-Watch/",
    },
    {
        id: 4,
        name: "HBG Elite",
        tech: "Website I am in the process of creating for a local sports organization using WordPress",
        image: HBGElite,
        deployed: "https://hbgelite.org/",
    },
]

export default projects