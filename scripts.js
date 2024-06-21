function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

function showDetails(modelId) {
    const details = document.getElementById(modelId);
    if (details) {
        details.style.display = 'block';
    }
}


function hideDetails(modelId) {
    const details = document.getElementById(modelId);
    if (details) {
        details.style.display = 'none';
    }
}
    function toggleDetails(modelId) {
        var details = document.getElementById(modelId);
        details.classList.toggle('show');
    }