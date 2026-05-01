const portfolioData = {
  hero: {
    name: "AbdulRahman Adel",
    title: "Frontend Developer",
    image: "./img_avatar.png",
    imageAlt: "profile picture",
    cvUrl: "#",
    contactUrl: "#contact-us",
    socials: [
      {
        icon: "fa-brands fa-linkedin-in",
        url: "https://www.linkedin.com/in/abdul-rahmanadel/",
        label: "LinkedIn",
      },
      {
        icon: "fa-brands fa-github",
        url: "https://github.com/mrK-infosec/mrK-infosec/",
        label: "GitHub",
      },
    ],
  },

  about: {
    image: "./img_avatar.png",
    imageAlt: "about picture",
    cards: [
      {
        icon: "fa-solid fa-circle-check",
        title: "Experience",
        details: ["1+ year", "Frontend Development"],
      },
      {
        icon: "fa-solid fa-graduation-cap",
        title: "Education",
        details: ["B.Sc Bachelors Degree"],
      },
    ],
    bio: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique unde corrupti accusamus tempore suscipit itaque nobis odio delectus! Expedita voluptatibus dolore quaerat inventore odit labore, quidem asperiores necessitatibus iure. Reiciendis.",
  },

  skills: [
    {
      category: "Frontend Development",
      tools: [
        { name: "HTML", level: "Experienced" },
        { name: "CSS", level: "Experienced" },
        { name: "SASS", level: "Experienced" },
        { name: "Javascript", level: "Experienced" },
        { name: "TypeScript", level: "Basic" },
        { name: "Material UI", level: "Intermediate" },
      ],
    },
    {
      category: "Backend Development",
      tools: [
        { name: "Postgresql", level: "Basic" },
        { name: "Node js", level: "Intermediate" },
        { name: "Express JS", level: "Intermediate" },
        { name: "Git", level: "Experienced" },
      ],
    },
  ],

  projects: [
    {
      title: "Appie App Test 1",
      image: "./img_avatar.png",
      imageAlt: "Appie App project image",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum at suscipit culpa, nulla vitae ut expedita repellat laudantium fugiat iusto atque reiciendis impedit tempora ipsa dignissimos aut enim nam corporis!",
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      title: "Omnifood",
      image: "./img_avatar.png",
      imageAlt: "Omnifood project image",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum at suscipit culpa, nulla vitae ut expedita repellat laudantium fugiat iusto atque reiciendis impedit tempora ipsa dignissimos aut enim nam corporis!",
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      title: "Omnifood",
      image: "./img_avatar.png",
      imageAlt: "Omnifood project image",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum at suscipit culpa, nulla vitae ut expedita repellat laudantium fugiat iusto atque reiciendis impedit tempora ipsa dignissimos aut enim nam corporis!",
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      title: "Omnifood",
      image: "./img_avatar.png",
      imageAlt: "Omnifood project image",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum at suscipit culpa, nulla vitae ut expedita repellat laudantium fugiat iusto atque reiciendis impedit tempora ipsa dignissimos aut enim nam corporis!",
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      title: "Omnifood",
      image: "./img_avatar.png",
      imageAlt: "Omnifood project image",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum at suscipit culpa, nulla vitae ut expedita repellat laudantium fugiat iusto atque reiciendis impedit tempora ipsa dignissimos aut enim nam corporis!",
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      title: "Omnifood",
      image: "./img_avatar.png",
      imageAlt: "Omnifood project image",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum at suscipit culpa, nulla vitae ut expedita repellat laudantium fugiat iusto atque reiciendis impedit tempora ipsa dignissimos aut enim nam corporis!",
      githubUrl: "#",
      liveUrl: "#",
    },
  ],

  contact: {
    email: "abdoadel3337@hotmail.com",
    linkedinUrl: "https://www.linkedin.com/in/abdul-rahmanadel/",
  },
};

// insert card into our html
const projectCards = document.querySelector("#project-cards");
const projectsData = portfolioData.projects;
console.log(projectsData);

function projectBuilder(project, index) {
  // if (index > 3 ) {
  //   return "hidden"
  // }else {
  //   return ""
  // }
  //  ===== index > 3 ? 'hidden' : ''
  // ====== condition ? tureReturn : falseReturn

  return `
    <div class="card ${index > 2 ? "hidden" : ""}" >
      <img src="${project.image}" alt="${project.imageAlt}" />
      <h3>${project.title}</h3>
      <p>
        ${project.description}
      </p>
      <div class="btns-cont">
        <a id="cv-btn" href="${project.githubUrl}">Github</a>
        <a id="cv-btn" href="${project.liveUrl}">Live demo</a>
      </div>
    </div>
  `;
}

projectsData.forEach((project, index) => {
  projectCards.innerHTML =
    projectCards.innerHTML + projectBuilder(project, index);

  // search append in dom
  // const div = document.createElement("div");
  // const img = document.createElement("img");
  // img.src = "sac";
  // div.appendChild(img)

  // div == `
  //   <div>
  //     <img src="sac" />
  //   </div>
  // `
});
