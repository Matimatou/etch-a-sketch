const GRIDWIDTHINIT = 16;

// Get HTML element
const body = document.querySelector('body');
const grid = document.querySelector('.grid');
const button = document.querySelector('button')



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
    function objectToColor(object) {
        return `rgb(${object.red},${object.green},${object.blue})`;
    }
    /* What I want to do : have the color goes from random to black in n times
    Idea : Write a function that when called the ith time return i/n time way black
    and when i is greater than n does nothing or simple is not call*/
    function addHoverEffectToCase(element, color) {
        let randomColor;
        if (color !== 'random')
            return () => { element.style.backgroundColor = color };
        else {
            function darkenColor(color, step) {
                return {
                    red: color.red * (1 - step * 0.1),
                    green: color.green * (1 - step * 0.1),
                    blue: color.blue * (1 - step * 0.1)
                }
            }
            let count = 0;
            function darkenOnMouseOver() {
                if (count == 0) {
                    randomColor = { red: Math.floor(Math.random() * 255), green: Math.floor(Math.random() * 255), blue: Math.floor(Math.random() * 255) }
                    element.style.backgroundColor = objectToColor(randomColor);
                }
                else if (count <= 10) {
                    const darkedColor = darkenColor(randomColor, count);
                    element.style.backgroundColor = objectToColor(darkedColor);
                }
                count++;
            }
            return darkenOnMouseOver;
        }
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

