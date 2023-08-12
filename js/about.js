const skills = [
    {
        id:"detail",
        skill: "Attention to detail.",
        icon: `<i class="bi bi-search"></i>`,
        brief:" Exceptional attention to detail honed through experience, ensuring meticulous accuracy in tasks and data analysis. Proficient in identifying nuances and inconsistencies, contributing to error-free outcomes and effective problem-solving."
    },
    {   
        id:"diligence",
        skill: "Diligence.",
        icon: `<i class="bi bi-check-circle "></i>`,
        brief:"Exemplary diligence demonstrated through consistent and dedicated effort in all tasks. A reliable and thorough approach to work, ensuring tasks are completed with precision and commitment. Strong work ethic and proactive mindset contribute to achieving goals and maintaining high-quality standards."
    },
    {
        id:"knowledge",
        skill: "General Knowledge.",
        icon: `<i class="bi bi-globe2"></i>`,
        brief:" Broad general knowledge base encompassing diverse subjects and current affairs. A curious and avid learner with a passion for staying informed. Strong foundation to facilitate effective communication and a well-rounded perspective."
    },
    {
        id:"speaker",
        skill: "Fluent speaker of English (C1 Level).",
        icon: `<i class="bi bi-chat-quote"></i>`,
        brief:" Fluent English speaker at C1 proficiency level. Effective communication and comprehension skills for seamless interaction in professional and social contexts."
    },
    {
        id:"book",
        skill: "Well-versed in Literature, Comics and Manga & Anime.",
        icon: `<i class="bi bi-book"></i>`,
        brief:"Proficient in Literature, Comics, Manga, and Anime. In-depth understanding and appreciation for these mediums, showcasing a diverse cultural insight."
    },
    {
        id:"translate",
        skill: "Can translate from Ancient Greek and Latin with the help of a dictionary",
        icon:`<i class="bi bi-translate"></i>`,
        brief:"Able to translate from Ancient Greek and Latin using dictionary support. Proficient in deciphering and interpreting texts from these classical languages."
    }
 ]


function renderSkills(arr) {
    arr.forEach(element => {
        document.querySelector(".skills_cards_container").innerHTML += `
    <div class="skill-card translate-left" data-sr>
    <h2 id=${element.id}>${element.icon}</h2>
    <h4>${element.skill}</h2>
    <p>${element.brief}</p>
    </div>
    `
    })
}

navBar()
renderSkills(skills)


