const publications = [
    {
        id: 1,
        description: `Poem “Nuestras Nadas Poco Difieren“ published in <em>lit.202</em>, Issue Three, Autumn 2022`,
        url: "https://lit202.org/read/hendriksen-nuestras-nadas-poco-difieren"
    },
    {
        id: 2,
        description: `Flash fiction pieces “Trying to Explain a Dream I Had to My Psychologist” and “The Unexpected Witness” published in <em>Press Pause Press</em>, Volume 6, April 2022.`,
        url: "https://www.presspausepress.org/felipe-h",
    },
    {
        id: 3,
        description: `Flash fiction piece “Objectivity in Art” published in Coastal Shelf, Spring Annual #1, 2022.`,
        url: "https://coastalshelf.com/spring-annual-2022-objectivity-in-art-by-felipe-rodolfo-hendriksen"
    }
]
const skills = [
    {
        id:"detail",
        skill: "Attention to detail.",
        icon: `<i class="bi bi-search"></i>`
    },
    {   
        id:"diligence",
        skill: "Diligence.",
        icon: `<i class="bi bi-check-circle"></i>`
    },
    {
        id:"knowledge",
        skill: "General Knowledge.",
        icon: `<i class="bi bi-globe2"></i>`
    },
    {
        id:"speaker",
        skill: "Fluent speaker of English (C1 Level).",
        icon: `<i class="bi bi-chat-quote"></i>`
    },
    {
        id:"book",
        skill: "Well-versed in Literature, Comics and Manga & Anime.",
        icon: `<i class="bi bi-book"></i>`
    },
 ]

const experience = [
    {
        id: 1,
        task: "Teaching Assistant",
        where: "Pontifica Universidad Católica Argentina",
        time: `<em>Present</em>`
    },
    {
        id: 2,
        task: "Part-time language and literature teacher",
        where: "Freelance",
        time: `<em>Present</em>`
    },
    {
        id: 3,
        task: "Undergraduate Teaching Assistant",
        where: "Washington College - Chestertown, MD, United States of America",
        time: `<em>From 01/2019 to 05/2019`
    }
]

const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu")
const navLinks = document.querySelectorAll(".nav-link")
const introText = document.querySelector(".introduction_text")
introText.innerHTML = ""
const introTextBody = "Graduated from Pontificia Universidad Católica Argentina, Interested in Comic Studies, Popular Culture Studies,Literary Editing and Publishing, Translation from English to Spanish and vice-versa, and creative Writing."

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

const typed = new Typed(introText, {
    strings: [introTextBody],
    typeSpeed: 25,
    showCursor: false,
    loop: false,
})

function renderSkills(arr) {
    arr.forEach(element => {
        document.querySelector(".skills_container").innerHTML += `
    <div class="skill-card">
    <h2 id=${element.id}>${element.icon}</h2>
    <h4>${element.skill}</h2>
    </div>
    `
    })
}


// function renderPublications(arr){
// arr.forEach(element => {
//     document.querySelector(".pub_cards_container").innerHTML += `
//     <div class="pub_card">
//     <p>${element.description}</p>
//     <button class="btn btn-primary"><a href=${element.url} target="_blank" class="text-light">visit</a></button>
// `
// })
// }


function renderExperience(arr) {
    arr.forEach(element => {
        document.querySelector(".cards_container").innerHTML += `
        <div class="about-card">
            <h2 class="about-card_title">${element.task}</h2>
            <h3 class="about-card_subtitle">${element.where}</h3>
            <h4 class="about-card_subtitle">${element.time}</h4>
        </div>
        `
    })
}
//renderPublications(publications)
renderSkills(skills)
renderExperience(experience)

