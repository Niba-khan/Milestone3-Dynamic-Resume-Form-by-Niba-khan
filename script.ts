window.addEventListener('DOMContentLoaded', () => {
const form = document.getElementById('resumeForm') as HTMLFormElement;
const resumeContent = document.getElementById('resumeContent') as HTMLElement;

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from reloading the page

    // Capture form inputs
    

    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLInputElement).value;
    const experience = (document.getElementById('experience') as HTMLInputElement).value;
    const company = (document.getElementById('company') as HTMLInputElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value;


    // Validate fields (simple validation as required attribute is already in use)
    if ( !name || !email || !education || !experience || !company || !skills) {
        alert("Please fill in all fields.");
        return;
    }

    // Clear previous resume content
    resumeContent.innerHTML = '';

    // Create dynamic resume sections
    const personalInfo = document.createElement('div');
    personalInfo.innerHTML = `<h3>${name}</h3><p>Email: ${email}</p>`;
    resumeContent.appendChild(personalInfo);

    const educationSection = document.createElement('div');
    educationSection.innerHTML = `<h4>Education</h4><p>${education}</p>`;
    resumeContent.appendChild(educationSection);

    const experienceSection = document.createElement('div');
    experienceSection.innerHTML = `<h4>Work Experience</h4><p>${experience} at ${company}</p>`;
    resumeContent.appendChild(experienceSection);

    const skillsSection = document.createElement('div');
    skillsSection.innerHTML = `<h4>Skills</h4><ul></ul>`;
    const skillsList = skills.split(',').map(skill => skill.trim());
    const skillsUl = skillsSection.querySelector('ul') as HTMLElement;

    skillsList.forEach(skill => {
        const li = document.createElement('li');
        li.textContent = skill;
        skillsUl.appendChild(li);
    });

    resumeContent.appendChild(skillsSection);
})
});
