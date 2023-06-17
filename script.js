let GRIDWIDTH = 16;
const body = document.querySelector('body');

const grid = document.querySelector('.grid');
/*Compute the correct size of Width in order that the grid looks rectangular*/
function sizeGrid() {
    grid.offsetWidth = 'fit-content';
}
function computeWidth() {
    return [GRIDWIDTH, GRIDWIDTH];
}
function createGrid() {
    for (let i = 0; i < computeWidth()[0]; i++) {
        const column = document.createElement('div');
        column.classList.add("column")
        for (let j = 0; j < computeWidth()[1]; j++) {
            const div = document.createElement('div');
            div.classList.add('case');
            //div.textContent = `${i * GRIDWIDTH + j}`;
            column.appendChild(div);
        }
        grid.appendChild(column);
    }
}


createGrid(); // CETTE LIGNE JE L'AVAIS OUBLIÉE
const gridArray = document.querySelectorAll('.case');

function createHoverEffect() {
    function addHoverEffectToCase(element, color) {
        return () => { element.style.backgroundColor = color };
    }
    // Loop on the cases
    gridArray.forEach(element => {
        console.log(typeof (element));
        element.addEventListener('mouseover', addHoverEffectToCase(element, 'black'));
    });
}
createHoverEffect();

