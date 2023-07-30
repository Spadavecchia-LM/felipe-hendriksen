const skills = [
    {
        id:"detail",
        skill: "Attention to detail.",
        icon: `<i class="bi bi-search"></i>`,
        brief:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi iste totam necessitatibus distinctio perferendis accusamus animi minima officia enim. Impedit aut alias dolorem accusantium magni. Sapiente vitae a commodi deleniti!"
    },
    {   
        id:"diligence",
        skill: "Diligence.",
        icon: `<i class="bi bi-check-circle "></i>`,
        brief:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi iste totam necessitatibus distinctio perferendis accusamus animi minima officia enim. Impedit aut alias dolorem accusantium magni. Sapiente vitae a commodi deleniti!"
    },
    {
        id:"knowledge",
        skill: "General Knowledge.",
        icon: `<i class="bi bi-globe2"></i>`,
        brief:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi iste totam necessitatibus distinctio perferendis accusamus animi minima officia enim. Impedit aut alias dolorem accusantium magni. Sapiente vitae a commodi deleniti!"
    },
    {
        id:"speaker",
        skill: "Fluent speaker of English (C1 Level).",
        icon: `<i class="bi bi-chat-quote"></i>`,
        brief:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi iste totam necessitatibus distinctio perferendis accusamus animi minima officia enim. Impedit aut alias dolorem accusantium magni. Sapiente vitae a commodi deleniti!"
    },
    {
        id:"book",
        skill: "Well-versed in Literature, Comics and Manga & Anime.",
        icon: `<i class="bi bi-book"></i>`,
        brief:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi iste totam necessitatibus distinctio perferendis accusamus animi minima officia enim. Impedit aut alias dolorem accusantium magni. Sapiente vitae a commodi deleniti!"
    },
    {
        id:"translate",
        skill: "Can translate from Ancient Greek and Latin with the help of a dictionary",
        icon:`<i class="bi bi-translate"></i>`,
        brief:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi iste totam necessitatibus distinctio perferendis accusamus animi minima officia enim. Impedit aut alias dolorem accusantium magni. Sapiente vitae a commodi deleniti!"
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

const li = document.querySelectorAll(".achievements li")

li.forEach(e => {
    e.classList.add("fade-in")
})
ScrollReveal().reveal(".fade-in", {delay:300, reset:true})
ScrollReveal().reveal(".translate-left", {
    distance: '100px', // Adjust this value as per your requirement
    origin: 'left',    // Specify the direction from which the element should appear
    duration: 1000,    // Duration of the animation
    scale: 1,          // Set the initial scale (1 means no scaling)
    viewFactor: 0.2,   // Percentage of the element's visibility before the animation is triggered
    reset: true    
})
