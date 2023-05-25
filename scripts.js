const fancyBackgroundDiv = document.querySelector("#fancy-background");

// Programmatically add circles to div (no reason this couldn't be HTML-only, this is just easier.)
for(var i = 0; i < 100; ++i) {
    // Make the divs
    let circle_container = document.createElement("div");
    let circle = document.createElement("div");
    // Set classes for the divs
    circle_container.classList.add("circle-container");
    circle.classList.add("circle");
    // Nest circle div inside of circle-container div
    circle_container.appendChild(circle);
    // Add both to the main fany-background div
    fancyBackgroundDiv.appendChild(circle_container);
}
