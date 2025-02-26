const sections = document.querySelectorAll('section');

for (const section of sections) {
    section.style.border = "2px solid blue";
    section.style.marginTop = "10px";
    section.style.borderRadius = '10px';
    section.style.padding = "10px";
    section.style.background = "gray"
}

const placesContain = document.getElementById("places-container");

placesContain.style.boxShadow = "0px 0px 10px gray"
placesContain.style.background = "yellow";
placesContain.classList.add("text-center"); // add a class
placesContain.classList.remove("large-text");//remove class