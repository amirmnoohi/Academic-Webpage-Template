if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.add("dark");
}
const themeToggle = document.querySelector("#theme-toggle");

themeToggle.addEventListener("click", () => {
    document.body.classList.contains("light-theme")
        ? enableDarkMode()
        : enableLightMode();
});

function enableDarkMode() {
    document.body.classList.remove("light-theme");
    document.body.classList.add("dark-theme");
    document.body.classList.add("dark");
}

function enableLightMode() {
    document.body.classList.remove("dark-theme");
    document.body.classList.add("light-theme");
    document.body.classList.remove("dark");
}

function setThemePreference() {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        enableDarkMode();
        return;
    }
    enableLightMode();
}

document.onload = setThemePreference();
function toggleMenu() {
    var menu = document.getElementById("menu");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}
function showSection(sectionId) {
    // Hide all sections
    var sections = ['about-section', 'teaching-section', 'publications-section', 'projects-section', 'team-section'];
    sections.forEach(function (id) {
        document.getElementById(id).style.display = 'none';
    });

    // Remove active class from all menu items
    var menuItems = document.querySelectorAll('#menu li a');
    menuItems.forEach(function (item) {
        item.classList.remove('active');
    });

    // Show the selected section
    document.getElementById(sectionId).style.display = 'block';

    // Set active class on clicked menu item
    document.querySelector('#menu li a[href="javascript:void(0)"][onclick="showSection(\'' + sectionId + '\')"]').classList.add('active');
}

function showSection(sectionId) {
    // Remove active class from all menu items
    var menuItems = document.querySelectorAll('#menu li a');
    menuItems.forEach(function (item) {
        item.classList.remove('active');
    });
    // Hide and remove active class from all sections
    var sections = document.querySelectorAll('.section');
    sections.forEach(function(section) {
        section.classList.remove('active-section');
    });

    // Delay for the fade out effect
    setTimeout(function() {
        sections.forEach(function(section) {
            section.style.display = 'none';
        });

        // Show and add active class to the selected section
        var activeSection = document.getElementById(sectionId);
        activeSection.style.display = 'block';

        // Delay for the display change to take effect
        setTimeout(function() {
            activeSection.classList.add('active-section');
        }, 10);
    }, 500); // This should match the transition time
    document.querySelector('#menu li a[href="javascript:void(0)"][onclick="showSection(\'' + sectionId + '\')"]').classList.add('active');

}


document.querySelectorAll('.card').forEach(card => {
    card.querySelectorAll('.card-buttons button').forEach(button => {
        button.addEventListener('click', function(e) {
            // Get the section ID from the button's data attribute
            const targetSectionId = button.getAttribute('data-section');
            const targetSection = card.querySelector(targetSectionId);

            // Toggle the 'is-active' class on the card
            if (targetSectionId.includes('about')) {
                card.classList.remove('is-active');
            } else {
                card.classList.add('is-active');
            }

            // Update card's state
            card.setAttribute('data-state', targetSectionId);

            // Deactivate all sections and buttons in this card
            card.querySelectorAll('.card-section').forEach(section => section.classList.remove('is-active'));
            card.querySelectorAll('.card-buttons button').forEach(btn => btn.classList.remove('is-active'));

            // Activate the clicked button and the target section
            button.classList.add('is-active');
            targetSection.classList.add('is-active');
        });
    });
});
