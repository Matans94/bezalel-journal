document.getElementById('current-section').addEventListener('click', function() {
    const dropdown = document.getElementById('sections-dropdown');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
});

document.querySelectorAll('#sections-dropdown li').forEach(function(item) {
    item.addEventListener('click', function() {
        const sectionId = this.getAttribute('data-section');
        const section = document.getElementById(sectionId);
        const offset = window.innerHeight * 0.1;
        window.scrollTo({
            top: section.getBoundingClientRect().top + window.pageYOffset - offset,
            behavior: 'smooth'
        });
        document.getElementById('current-section').textContent = this.textContent;
        document.getElementById('sections-dropdown').style.display = 'none';
    });
});

window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    let currentSection = 'תוכן עניינים';
    sections.forEach(function(section) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom > window.innerHeight / 2) {
            currentSection = section.querySelector('h2').textContent;
        }
    });
    document.getElementById('current-section').textContent = currentSection;
});


function checkTextOverflowAndToggle(element) {
    if (element.scrollWidth > element.clientWidth && 100 > element.getBoundingClientRect()) {
        element.style.display = 'none';
    } else {
        element.style.display = 'contents';
    }
}

function checkAllElements() {
    document.querySelectorAll('.wrap-hide').forEach(function(element) {
        checkTextOverflowAndToggle(element);
    });
}

// Initial check
checkAllElements();

// Check on window resize
window.addEventListener('resize', function() {
    checkAllElements();
});

const sections = document.querySelectorAll('section');

window.addEventListener('scroll', function() {
    let scrollPercentage = 0;

    sections.forEach(function(section, index) {
        const rect = section.getBoundingClientRect();
        const sectionHeight = section.offsetHeight;
        const sectionTop = window.pageYOffset + rect.top;
        const sectionBottom = sectionTop + sectionHeight;

        if (window.scrollY >= sectionTop && window.scrollY <= sectionBottom) {
            const sectionScroll = window.scrollY - sectionTop;
            scrollPercentage = (sectionScroll / sectionHeight) * 100;
            // document.getElementById('progress-bar').style.width = scrollPercentage + '%';
            document.getElementById('completion-percentage').textContent = Math.round(scrollPercentage) + '%';

            console.log(`Section ${index + 1}:`);
            console.log(`Section Top: ${sectionTop}`);
            console.log(`Section Scroll: ${sectionScroll}`);
            console.log(`Section Height: ${sectionHeight}`);
            console.log(`Scroll Percentage: ${scrollPercentage}`);
        }
    });
});