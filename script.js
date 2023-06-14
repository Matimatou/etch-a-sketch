const GRIDWIDTH = 14;
const body = document.querySelector('body');

const grid = document.querySelector('.grid');
/*Compute the correct size of Width in order that the grid looks rectangular*/
function sizeGrid() {
    grid.offsetWidth = '1500px';
}
function computeWidth() {
    return [GRIDWIDTH, GRIDWIDTH];
}
function createGrid() {
    for (let i = 0; i < computeWidth()[0]; i++) {
        const line = document.createElement('div');
        for (let j = 0; j < computeWidth()[1]; j++) {
            const div = document.createElement('div');
            div.classList.add('case');
            div.textContent = `${i * GRIDWIDTH + j}`;
            line.appendChild(div);
            console.log(line);
        }
        grid.appendChild(line);
    }
}
createGrid(); // CETTE LIGNE JE L'AVAIS OUBLIÉ
// TO-DO : divise the cases in lines so that they can be aligned easly  with flex display
