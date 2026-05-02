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
      title: "QR code component",
      image: "./images/project1.jpg",
      imageAlt: "QR code component image preview",
      description:
        "A responsive QR code component built with HTML, CSS, to train on building modern and visually appealing web components. It features a clean design and is optimized for various screen sizes, making it a great addition to any project that requires QR code functionality.",
      githubUrl: "https://github.com/ezzsnowdev/qr-code-component-main",
      liveUrl: "https://ezzsnowdev.github.io/qr-code-component-main/",
    },
    {
      title: "advice generator app",
      image: "./images/project2.png",
      imageAlt: "advice generator app image preview",
      description:
        "It's a web application that generates random advice using an API. Users can click a button to receive new advice, making it a fun and interactive way to get daily inspiration or guidance.",
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      title: "Omnifood",
      image: "./images/project3.png",
      imageAlt: "Omnifood project image",
      description:
        "A fully responsive landing page for a healthy meal subscription service. Built with pure HTML, CSS, and JavaScript — modern design with smooth animations.",
      githubUrl: "#",
      liveUrl: "#",
    },
  ],

  contact: {
    email: "abdoadel3337@hotmail.com",
    linkedinUrl: "https://www.linkedin.com/in/abdul-rahmanadel/",
  },
};

// insert skills into our HTML

const stackContEle = document.querySelector("#stacks-cont");
const skillsData = portfolioData.skills;

function SkillContinerBuilder(skill) {
  const category = skill.category;
  const tools = skill.tools;
  let toolsHTML = "";

  console.log("category:", category);

  tools.forEach((tool) => {
    toolsHTML += `
      <div class="tool-box">
        <i class="fa-solid fa-circle-check"></i>
        <div>
          <h4>${tool.name}</h4>
          <p>${tool.level}</p>
        </div>
      </div>
    `;
  });

  return `
    <div class="stack-card">
      <h3 class="stack-title">${category}</h3>
      <div class="tools-cont">
        ${toolsHTML}
      </div>
    </div>
    `;
}

skillsData.forEach((skill) => {
  stackContEle.innerHTML += SkillContinerBuilder(skill);
});

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

let showMoreBtn2 = document.querySelector("#projects .show-more");
if (projectsData.length <= 3) {
  showMoreBtn2.style.display = "none";
}
