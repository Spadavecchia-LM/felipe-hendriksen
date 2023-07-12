const publications = [
    {
        id: 1,
        description:`Poem “Nuestras Nadas Poco Difieren“ published in <em>lit.202</em>, Issue Three, Autumn 2022`,
        url: "https://lit202.org/read/hendriksen-nuestras-nadas-poco-difieren"
    },
    {
        id:2,
        description: `Flash fiction pieces “Trying to Explain a Dream I Had to My Psychologist” and “The Unexpected Witness” published in <em>Press Pause Press</em>, Volume 6, April 2022.`,
        url: "https://www.presspausepress.org/felipe-h",
    },
    {
        id:3,
        description: `Flash fiction piece “Objectivity in Art” published in Coastal Shelf, Spring Annual #1, 2022.`,
        url: "https://coastalshelf.com/spring-annual-2022-objectivity-in-art-by-felipe-rodolfo-hendriksen"
    }
]
const softSkills = ["Attention to detail.", "Diligence.", "Well-versed in Literature, Comics and Manga & Anime.", "General Knowledge.", "Fluente speaker of English (C1 Level).", "Can translate from Ancient Greek and Latin with the help of a dictionary"]

const experience = [
    {
        id: 1,
        task : "Teaching Assistant",
        where: "Pontifica Universidad Católica Argentina",
        time: `<em>Present</em>`
    },
    {
        id:2,
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
function renderSkills(arr){
arr.forEach(element => {
    document.querySelector(".skills ul").innerHTML += `
    <li>${element}</li>
    `
})
}
function renderPublications(arr){
arr.forEach(element => {
    document.querySelector(".pub_cards_container").innerHTML += `
    <div class="pub_card">
    <p>${element.description}</p>
    <button class="btn btn-primary"><a href=${element.url} target="_blank" class="text-light">visit</a></button>
`
})
}
function renderExperience(arr){
    arr.forEach(element => {
        document.querySelector(".work_experience_cards_container").innerHTML += `
        <div class="work_experience_card">
        <h3><strong>${element.task}</strong></h3>
        <p>${element.where}</p>
        <p>${element.time}</p>
        </div>
        `
    })
}
renderPublications(publications)
renderSkills(softSkills)
renderExperience(experience)

