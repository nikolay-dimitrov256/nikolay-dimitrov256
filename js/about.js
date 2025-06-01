window.addEventListener('load', aboutElements);

function aboutElements(e) {
    const personalInfoAElements = document.querySelectorAll('.about-nav a');
    personalInfoAElements.forEach(element => element.addEventListener('click', (e) => fillContent(e, element)));
}

// function fillContent(e, aElement) {
//     e.preventDefault;
//     const targetPElement = document.getElementById('about-info');
//     const contentPElement = document.getElementById(aElement.classList[0]);
//     const labelPElement = document.getElementById('about-label');

//     targetPElement.textContent = contentPElement.textContent;
//     labelPElement.textContent = contentPElement.id;
// }

function fillContent(e, aElement) {
    e.preventDefault;
    const targetDivElement = document.getElementById('about-content');
    const contentDivElement = document.getElementById(aElement.classList[0]);
    const labelPElement = document.getElementById('about-label');
    const focusedDivElement = targetDivElement.querySelector('div');
    const hiddenDivElement = document.querySelector('.hidden-info');
    
    labelPElement.textContent = contentDivElement.id;
    hiddenDivElement.append(focusedDivElement);
    targetDivElement.append(contentDivElement);

    // Unselect the previously seleted element
    document.querySelector('.about-nav a.selected').classList.remove('selected');

    aElement.classList.add('selected');
}