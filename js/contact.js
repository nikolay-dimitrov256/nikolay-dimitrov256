window.addEventListener('load', (e) => {
    const fields = document.querySelectorAll('#contact-form .listen');

    initForm();

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

function initForm() {
    const form = document.getElementById('contact-form');
    const mainElement = document.querySelector('.contact-main');
    const thankYouElement = document.querySelector('.hidden-elements .thank-you');
    const hiddenDivElement = document.querySelector('.hidden-elements');

    form.addEventListener('submit', async function (e) {
        e.preventDefault();
        const data = new FormData(form);
        const response = await fetch(
            form.action,
            {
                method: form.method,
                body: data,
                headers: { 'Accept': 'application/json' }
            }
        );

        if (response.ok) {
            hiddenDivElement.append(form);
            mainElement.prepend(thankYouElement);
        } else {
            alert('Something went wrong. Please try again.')
        }
    })
}