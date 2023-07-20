const skills = [
    {
        id:"detail",
        skill: "Attention to detail.",
        icon: `<i class="bi bi-search"></i>`
    },
    {   
        id:"diligence",
        skill: "Diligence.",
        icon: `<i class="bi bi-check-circle "></i>`
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
    {
        id:"translate",
        skill: "Can translate from Ancient Greek and Latin with the help of a dictionary",
        icon:`<i class="bi bi-translate"></i>`
    }
 ]


function renderSkills(arr) {
    arr.forEach(element => {
        document.querySelector(".skills_cards_container").innerHTML += `
    <div class="skill-card">
    <h2 id=${element.id}>${element.icon}</h2>
    <h4>${element.skill}</h2>
    </div>
    `
    })
}

navBar()
renderSkills(skills)

