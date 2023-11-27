const projectList = [
    {
      title: "Project 1",
      technology: "C#",
      description: "A description of Project 1."
    },
    {
      title: "Project 2",
      technology: "Java",
      description: "A description of Project 2."
    },
    {
      title: "Project 3",
      technology: "Node.js",
      description: "A description of Project 3."
    }
  ];
  
  const educationList = [
    {
      course: "Mathematics",
      grade: 9
    },
    {
      course: "Science",
      grade: 9
    },
    {
      course: "English",
      grade: 9
    },
    {
      course: "Computer Science",
      grade: 10
    },
    {
      course: "Web Development",
      grade: 11
    },
    {
      course: "Software Engineering",
      grade: 12
    }
  ];
  
  const technologyFilterInput = document.getElementById('technologyFilter');
  const projectListElement = document.getElementById('projectList');
  const educationListElement = document.getElementById('educationList');
  
  technologyFilterInput.addEventListener('keyup', filterProjects);
  
  function filterProjects() {
    const technologyFilterText = technologyFilterInput.value.toLowerCase();
    const filteredProjects = projectList.filter(project => {
      return project.technology.toLowerCase().includes(technologyFilterText);
    });
  
    projectListElement.innerHTML = '';
    filteredProjects.forEach(project => {
      const projectItem = document.createElement('div');
      projectItem.className = 'project-item';
  
      const projectTitle = document.createElement('h3');
      projectTitle.textContent = project.title;
  
      const projectTechnology = document.createElement('p');
      projectTechnology.textContent = `Technology: ${project.technology}`;
  
      const projectDescription = document.createElement('p');
      projectDescription.textContent = project.description;
  
      projectItem.appendChild(projectTitle);
      projectItem.appendChild(projectTechnology);
      projectItem.appendChild(projectDescription);
  
      projectListElement.appendChild(projectItem);
    });
  }
  
  educationList.forEach(course => {
    const courseListItem = document.createElement('li');
    courseListItem.textContent = `${course.course} (Grade ${course.grade})`;
    educationListElement.appendChild(courseListItem);
  });
  