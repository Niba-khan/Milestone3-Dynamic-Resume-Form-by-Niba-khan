window.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('resumeForm');
    var resumeContent = document.getElementById('resumeContent');
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form from reloading the page
        // Capture form inputs
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var education = document.getElementById('education').value;
        var experience = document.getElementById('experience').value;
        var company = document.getElementById('company').value;
        var skills = document.getElementById('skills').value;
        // Validate fields (simple validation as required attribute is already in use)
        if (!name || !email || !education || !experience || !company || !skills) {
            alert("Please fill in all fields.");
            return;
        }
        // Clear previous resume content
        resumeContent.innerHTML = '';
        // Create dynamic resume sections
        var personalInfo = document.createElement('div');
        personalInfo.innerHTML = "<h3>".concat(name, "</h3><p>Email: ").concat(email, "</p>");
        resumeContent.appendChild(personalInfo);
        var educationSection = document.createElement('div');
        educationSection.innerHTML = "<h4>Education</h4><p>".concat(education, "</p>");
        resumeContent.appendChild(educationSection);
        var experienceSection = document.createElement('div');
        experienceSection.innerHTML = "<h4>Work Experience</h4><p>".concat(experience, " at ").concat(company, "</p>");
        resumeContent.appendChild(experienceSection);
        var skillsSection = document.createElement('div');
        skillsSection.innerHTML = "<h4>Skills</h4><ul></ul>";
        var skillsList = skills.split(',').map(function (skill) { return skill.trim(); });
        var skillsUl = skillsSection.querySelector('ul');
        skillsList.forEach(function (skill) {
            var li = document.createElement('li');
            li.textContent = skill;
            skillsUl.appendChild(li);
        });
        resumeContent.appendChild(skillsSection);
    });
});
