document.getElementById('current-section').addEventListener('click', function() {
    const dropdown = document.getElementById('sections-dropdown');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
});

document.querySelectorAll('#sections-dropdown li').forEach(function(item) {
    item.addEventListener('click', function() {
        const sectionId = this.getAttribute('data-section');
        const section = document.getElementById(sectionId);
        section.scrollIntoView({ behavior: 'smooth' });
        document.getElementById('current-section').textContent = this.textContent;
        document.getElementById('sections-dropdown').style.display = 'none';
    });
});

window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    let currentSection = 'Select Section';
    sections.forEach(function(section) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom > window.innerHeight / 2) {
            currentSection = section.querySelector('h2').textContent;
        }
    });
    document.getElementById('current-section').textContent = currentSection;
});