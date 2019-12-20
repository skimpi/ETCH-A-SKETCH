
const grid = () => {
    const container = document.querySelector(".grid-container");

    for (i = 0; i < 36; i++) {
       let item = document.createElement('div');
       item.className = 'item'
       item.id = `grid${i}`;
       container.appendChild(item);
       
       }; // this creates a number of grids

    };

grid();


const colorPalette = document.querySelector('.color-picker');

const colorGrid = () => {

    for (i = 0; i < 2; i++) {
        let colorSquare = document.createElement('div');
        
        colorSquare.className = 'clrSquare';
        colorSquare.id = `colorId${i}`;
        colorPalette.appendChild(colorSquare);
        
    }
} //creates two squares 

colorGrid();


const container = document.querySelector('.grid-container'); //summons the class grid-container from index.html

const color1 = document.querySelector('#colorId0');
const color2 = document.querySelector('#colorId1');

/*
const item = container.querySelectorAll('.item'); //summons the class item as a nodelist (contains all 36 individual item)
let nodeList = item;

for (i = 0; i < item.length; i++) {
    
    nodeList[i].addEventListener('mouseover', function (q) {
        q.target.style.backgroundColor = 'green';
        q.target.className = 'colord';
    });
   
}*/
//traditional loop for changing the colors


container.querySelectorAll('.item').forEach(item => {
    item.addEventListener('mouseover', function (q) {
        q.target.className = 'colord';
    })
})
/*
changeColor.addEventListener('click', function(){
    text.classList.toggle('change')
})
*/

console.log(color1);
console.log(color2);