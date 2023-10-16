document.getElementById("scrollButton").addEventListener("click", function() {
    var targetDiv = document.getElementById("targetDiv");

    targetDiv.scrollIntoView({
        behavior: "smooth", 
        block: "start" 
    });
});
document.getElementById("moveUp").addEventListener("click", function() {
    moveImage(-50); // Itaas ang imahe ng 50 pixels (maari mong ayusin ang halaga).
});

document.getElementById("moveDown").addEventListener("click", function() {
    moveImage(50); // Ibaba ang imahe ng 50 pixels (maari mong ayusin ang halaga).
});

function moveImage(offset) {
    const image = document.getElementById("floatingImage");
    const currentPosition = parseInt(getComputedStyle(image).top, 10);
    const newPosition = currentPosition + offset;

    image.style.top = newPosition + "px";
}
document.addEventListener('DOMContentLoaded', function () {
    // Default to show the first tab
    showTab(1);
});

document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
        const tabNumber = tab.getAttribute('data-tab');
        showTab(tabNumber);
    });
});

function showTab(tabNumber) {
    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
    });

    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });

    const selectedTab = document.querySelector(`.tab[data-tab="${tabNumber}"]`);
    selectedTab.classList.add('active');

    const selectedContent = document.querySelector(`.tab-content[data-tab="${tabNumber}"]`);
    selectedContent.classList.add('active');
}
document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("showHideButton");
    const targetElement = document.getElementById("myDiv");
    const content= document.getElementById("content");

    button.addEventListener("click", function () {
        if (targetElement.style.display === "none" || targetElement.style.display === "") {
            targetElement.style.display = "block"; // I-display ang elemento
        } else {
            targetElement.style.display = "none"; // Itago ang elemento
        }
    });
    content.addEventListener("click", function () {
        if (targetElement.style.display === "block" || targetElement.style.display === "") {
            targetElement.style.display = "none"; // I-display ang elemento
        } else {
            targetElement.style.display = "block"; // Itago ang elemento
        }
    });
    
});