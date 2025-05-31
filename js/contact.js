window.addEventListener('load', (e) => {
    const fields = document.querySelectorAll('#contact-form .listen');

    fields.forEach(field => field.addEventListener('input', (e) => fillField(e, field)));
});


function fillField(e, field) {
    // Get the input text and map it to paragraph elements
    const content = getContent(field);

    // Get the target element where the input text is displayed
    const targetId = `_${field.id}`;
    const targetElement = document.getElementById(targetId);

    // Clear the contents of the element
    targetElement.innerHTML = '';

    // Insert the content into the element
    targetElement.append(...content);
}

function getContent(field) {
    if (field.classList.contains('multiline')) {
        return field.value
                    .split('\n')
                    .map(line => {
                        const paragraph = document.createElement('p');
                        paragraph.textContent = line;
                        return paragraph;
                    });
    } else {
        return field.value;
    }
}