const GRIDWIDTHINIT = 16;

// Get HTML element
const body = document.querySelector('body');
const grid = document.querySelector('.grid');
const button = document.querySelector('button')

// Create the css case class
const caseClass = document.createElement('style');

function createGrid(gridwidth) {

    for (let i = 0; i < gridwidth; i++) {
        const column = document.createElement('div');
        column.classList.add("column")
        for (let j = 0; j < gridwidth; j++) {
            const div = document.createElement('div');
            div.classList.add('case');
            // div.textContent = `${i * gridwidth + j}`;
            column.appendChild(div);
        }
        grid.appendChild(column);
    }
    return document.querySelectorAll('.case')
}
function createHoverEffect(gridArray) {
    function addHoverEffectToCase(element, color) {
        if (color !== 'random')
            return () => { element.style.backgroundColor = color };
        else
            return () => { element.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})` };
    }
    // Loop on the cases
    gridArray.forEach(element => {
        element.addEventListener('mouseover', addHoverEffectToCase(element, 'random'));
    });
}
function addEffectToButton() {
    function addPromptToButton() {
        const newGridWidth = prompt('Enter the number of cases per side');
        clearGrid();
        createHoverEffect(createGrid(newGridWidth));
    }
    function clearGrid() {
        grid.innerHTML = '';
    }
    button.addEventListener('click', addPromptToButton);
}
createHoverEffect(createGrid(GRIDWIDTHINIT));
addEffectToButton();

