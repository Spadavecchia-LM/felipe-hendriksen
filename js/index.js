const publications = [
    {
        id: 1,
        title: "Nuestras Nadas Poco Difieren",
        description: `Poem “Nuestras Nadas Poco Difieren“ published in <em>lit.202</em>, Issue Three, Autumn 2022`,
        url: "https://lit202.org/read/hendriksen-nuestras-nadas-poco-difieren",
        date: "July 24, 2022",
        image: "https://res.cloudinary.com/leoms96/image/upload/v1690143755/felipe/nuestras%20nadas.jpg"
    },
    {
        id: 2,
        title: "Trying to Explain a Dream I Had to My Psychologist",
        description: `Flash fiction piece “Trying to Explain a Dream I Had to My Psychologist” published in <em>Press Pause Press</em>, Volume 6, April 2022.`,
        url: "https://www.presspausepress.org/felipe-h",
        date: "",
        image: "https://res.cloudinary.com/leoms96/image/upload/v1690143755/felipe/psicologo.webp"
    },
    {
        id: 3,
        title: "Objectivity in Art",
        description: `Flash fiction piece “Objectivity in Art” published in Coastal Shelf, Spring Annual #1, 2022.`,
        url: "https://coastalshelf.com/spring-annual-2022-objectivity-in-art-by-felipe-rodolfo-hendriksen",
        image: "https://res.cloudinary.com/leoms96/image/upload/v1690143755/felipe/art.jpg"
    }, {
        id: 4,
        title: "The Unexpected Witness",
        description: `Flash fiction piece “The Unexpected Witness” published in <em>Press Pause Press</em>, Volume 6, April 2022.`,
        url: "https://www.presspausepress.org/felipe-h",
        date: "",
        image: "https://res.cloudinary.com/leoms96/image/upload/v1690143755/felipe/unexpected%20witness.png"

    }


]
const experience = [
    {
        id: "exp-1",
        task: "Teaching Assistant",
        where: "Pontifica Universidad Católica Argentina",
        time: "Present",
        description: "Chair in charge of Dr. Javier Roberto González (UCA-CONICET-Argentine Academy of Letters).Affiliation aimed at training in research applied to university teaching."
    },
    {
        id: "exp-2",
        task: "Part-time language and literature teacher",
        where: "Freelance",
        time: `Present`,
        description: "He gives private English and Spanish classes to foreigners."

    },
    {
        id: "exp-3",
        task: "Undergraduate Teaching Assistant",
        where: "Washington College - Chestertown, MD, United States of America",
        time: `From 01/2019 to 05/2019`,
        description: "He gave five weekly classes of Elementary and Intermediate Spanish to more than fifty university students."
    }
]

const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu")
const navLinks = document.querySelectorAll(".nav-link")
const introText = document.querySelector(".introduction_text")
const introTextBody = "Graduated from Pontificia Universidad Católica Argentina, Interested in Comic Studies, Popular Culture Studies,Literary Editing and Publishing, Translation from English to Spanish and vice-versa, and creative Writing."
const typed = new Typed(introText, {
    strings: [introTextBody],
    typeSpeed: 10,
    showCursor: false,
    loop: false,
})
const titulos = document.querySelectorAll(".title");


introText.innerHTML = ""



function navBar() {
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active")
        navMenu.classList.toggle("active")
    })

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            hamburger.classList.remove("active")
            navMenu.classList.remove("active")

        })
    })
}




function renderPublications(arr) {
    arr.forEach(element => {
        document.querySelector(".pub_cards_container").innerHTML += `
    <div class="pub_card translate-left" data-sr>
    <img src=${element.image} alt=${element.title}>
    <h2>${element.title}</h2>
    <p>${element.description}</p>
    <button><a href=${element.url} target="_blank">visit</a></button>
`
    })
}
function renderExperience(arr) {
    arr.forEach(element => {
        document.querySelector(".work_cards_container").innerHTML += `
        <div class="work_card translate-left" data-sr id=${element.id}>
            <h2>${element.task}</h2>
            <h4>${element.where}</h4>
            <span>${element.time}</span>
            <button class="btn_work" id=${element.id}>More Details</button>
        </div>

        `
    })
}
setTimeout(() => {
    document.querySelector("#aboutBtn").classList.remove("hidden")
    anime({
        targets: document.querySelector("#aboutBtn"),
        opacity: ["0%", "100%"],
        duration: 5000,
        direction: 'normal',
        loop: false
    });
}, 4100)



renderExperience(experience)
renderPublications(publications)
navBar()

const workButtons = document.querySelectorAll(".btn_work")

function viewWorkInfo() {
    workButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            const id = event.target.id
            console.log(id)
            const card = document.querySelector(`#${id}`)

            const workDescription = experience.filter(exp => exp.id === id)

            card.innerHTML = ""
            setTimeout(() => {
           card.innerHTML = `
           <p>${workDescription[0].description}</p>
           `
            }, 200)

        })
    })
}
viewWorkInfo()

titulos.forEach(titulo => {
    titulo.classList.add("fade-in")
})


ScrollReveal().reveal(".translate-left", {
    distance: '100px', // Adjust this value as per your requirement
    origin: 'left',    // Specify the direction from which the element should appear
    duration: 1000,    // Duration of the animation
    scale: 1,          // Set the initial scale (1 means no scaling)
    viewFactor: 0.2,   // Percentage of the element's visibility before the animation is triggered
    reset: false    
})
ScrollReveal().reveal(".fade-in", {delay:300})


