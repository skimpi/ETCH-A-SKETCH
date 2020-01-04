# ETCH-A-SKETCH
odin project
looooppp



const grid = () => {
    const container = document.querySelector(".grid-container");

    for (i = 0; i < 56; i++) {
       let item = document.createElement('div');
       item.className = 'item';
       item.id = `grid${i}`;
       container.appendChild(item);
       
       }; // this creates a number of grids

    };
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

/*
changeColor.addEventListener('click', function(){
    text.classList.toggle('change')
})
*/

const pink = () => {
color1.addEventListener('click', function(){
    container.querySelectorAll('.item').forEach(item => {
        item.addEventListener('mouseover', function(q) {
            q.target.classList ='colorButton0';
        })
        
    })
    
})
}

pink();

const rebeccapurple = () => {
    color2.addEventListener('click', function(){
        container.querySelectorAll('.item').forEach(item => {
            item.addEventListener('mouseover', function(q) {
                q.target.classList ='colorButton1';
            })
            
        })
        
    })
    }
    
rebeccapurple();



// Sets important constants and variables
const container = document.getElementById("container");
let rows = document.getElementsByClassName("gridRow");
let cells = document.getElementsByClassName("cell");
console.log(container);
 defaultGrid();
// Creates a default grid sized 16x16
function defaultGrid() {
  makeRows(16);
  makeColumns(16);
};
// Takes (rows, columns) input and makes a grid
function makeRows(rowNum) {
  // Creates rows
  for (r = 0; r < rowNum; r++) {
    let row = document.createElement("div");
    container.appendChild(row).className = "gridRow";
  };
};

//Creates columns sååååå jävla smart!!!
function makeColumns(cellNum) {
  for (i = 0; i < rows.length; i++) {
    for (j = 0; j < cellNum; j++) {
      let newCell = document.createElement("div");
      rows[j].appendChild(newCell).className = "cell";
    };
  };
};

console.log("JavaScript is amazing!");
