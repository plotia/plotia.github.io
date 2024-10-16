function toggleSubNav(subNavId) {
    var subNav = document.getElementById(subNavId);
    var parentLi = subNav.parentElement;

    // Toggle the open class to show or hide sub-navigation
    parentLi.classList.toggle("open");

    // Hide other open sub-navs (if any)
    document.querySelectorAll("nav ul > li.open").forEach(openLi => {
        if (openLi !== parentLi) {
            openLi.classList.remove("open");
        }
    });
}

// Function to change content based on the selected page
function changeContent(page) {
    var contentDiv = document.getElementById('content');

    switch (page) {
        case 'home':
            window.location.href = "homepage.html"
            break;
        case 'Research':
            window.location.href = "research.html";
            break;
        case 'Experience':
            window.location.href = "experiences.html"
        case 'Projects':
            window.location.href = "projects.html"
        case 'Future Goals':
            window.location.href = "future.html"
        case 'Hobbies':
            window.location.href = "hobbies.html"
            break;
        case 'Resume':
            window,location.href = "Pratham Lotia Resume.pdf"
        default:
            contentDiv.innerHTML = '<h2>Page not found!</h2>';
    }
}
