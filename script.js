// Sample projects data
const projects = [
  {
    id: 1,
    name: "Student Management System",
    description: "Full-stack web app with React & Node.js",
    image: "images/project1.png",
    repo: "https://github.com/shravani/student-management-system",
    live: "#"
  },
  {
    id: 2,
    name: "E-Commerce Website",
    description: "Simple shopping website with cart functionality",
    image: "images/project2.png",
    repo: "https://github.com/shravani/e-commerce-website",
    live: "#"
  },
  {
    id: 3,
    name: "Portfolio Website",
    description: "Responsive portfolio built with HTML, CSS, JS",
    image: "images/project3.png",
    repo: "https://github.com/shravani/portfolio",
    live: "#"
  }
];

// Render projects
const projectsList = document.getElementById('projects-list');
projects.forEach(project => {
  const div = document.createElement('div');
  div.className = 'project-card';
  div.innerHTML = `
    <img src="${project.image}" alt="${project.name}">
    <h3>${project.name}</h3>
    <p>${project.description}</p>
    <a href="${project.repo}" target="_blank">View Repo</a> | 
    <a href="${project.live}" target="_blank">Live Demo</a>
  `;
  projectsList.appendChild(div);
});
