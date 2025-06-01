window.addEventListener('DOMContentLoaded', () => {
    initCheckboxes();
});

function initCheckboxes() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    
    checkboxes.forEach(box => box.addEventListener('change', filterCards));
}

function filterCards() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const cards = document.querySelectorAll('.card');
    const checkedValues = [...checkboxes]
                                    .filter(box => box.checked)
                                    .map(box => box.value);
    
    
    cards.forEach(card => {
        const hasMatch = checkedValues.length === 0 || checkedValues.some(value => card.classList.contains(value));
        card.style.display = hasMatch ? 'block' : 'none';
    });
}