
var input = document.querySelectorAll('input');
let display = document.getElementById('display');
let size = document.querySelector('.size');
const container = document.getElementById("container");



function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    cell.innerText = (c + 1); //numrering av individuell block
    container.appendChild(cell).classList = 'grid-item';// lägger den nya element i elementet container
  };
};

makeRows(5, 5);

const canvaSize = () => {
    size.addEventListener('click', function(){
       //let bajs = document.querySelector('.grid-item');
       
       while (container.firstChild) {
           container.removeChild(container.firstChild);
       };
        let size = prompt('size');
        let canvas = size * size;
        let cols = size;
        let rows = size;
        if (size != 0) {
            document.getElementById('demo').innerHTML = 'size: ' + canvas; 
            
            container.style.setProperty('--grid-rows', rows);
            container.style.setProperty('--grid-cols', cols);
            
            
            for (c = 0; c < (rows * cols); c++) {
              let cell = document.createElement("div");
              cell.innerText = (c + 1); //numrering av individuell block
              container.appendChild(cell).classList = 'grid-item';
              
            };
            const cells = container.querySelectorAll('.grid-item');
              console.log(cells)
              color();
              reset();
              random();
              black();
            
        };
    });

};
canvaSize();

for (let i = 0; i < input.length; i++){
    input[i].addEventListener('input', function(){

       let red = document.getElementById('red').value,
            green = document.getElementById('green').value,
            blue = document.getElementById('blue').value;
        
        
        display.style.background = "rgb("+ red +", "+ green +", "+ blue +")";
    });
}; // color value for display



const color = () => {
    
    container.querySelectorAll('.grid-item').forEach(cells => {

        for (let i = 0; i < input.length; i++) {
            input[i].addEventListener('input', function(){

                let red = document.getElementById('red').value,
                    green = document.getElementById('green').value,
                    blue = document.getElementById('blue').value;

                    cells.addEventListener('mouseover', function (q) {
                        q.target.style.background = "rgba("+ red +", "+ green +", "+ blue +")";
                    });

            });
        };
    });
}; // color value for grids

color();

const reset = () => {
    const resetButton = document.querySelector('.resetButton');
    
    container.querySelectorAll('.grid-item').forEach(cells => {
        resetButton.addEventListener('click', function () {
            cells.style.background = "rgba("+ 255 +", "+ 255 +", "+ 255 +", "+ 0.8 +")";
        });
    })
};

reset();

const random = () => {
    
    container.querySelectorAll('.grid-item').forEach(cells => {

        for (let i = 0; i < 3; i++) {
            const randomColor = document.querySelector('.random');
            randomColor.addEventListener('click', function(){

                let red = Math.floor(Math.random() * 255),
                    green = Math.floor(Math.random() * 255),
                    blue = Math.floor(Math.random() * 255);

                    cells.addEventListener('mouseover', function (q) {
                        q.target.style.background = "rgba("+ red +", "+ green +", "+ blue +")";
                    });

            });
        };
    });
}; // color value for grids
console.log(input.length)
random();

const black = () => {
    
    container.querySelectorAll('.grid-item').forEach(cells => {

            const black = document.querySelector('.black');
            black.addEventListener('click', function(){

                let red = 0,
                green = 0,
                blue = 0,
                alpha = 0;

                    cells.addEventListener('mouseover', function (q) {
                        q.target.style.backgroundColor = "rgba(0, 0, 0, 1)";
                    });

            });
    });
}; // color value for grids
black();

function alphaBlack(q) {

    
        let currentColor = window.getComputedStyle(q.target ,null).getPropertyValue('background-color');
        if(currentColor === "rgba(0, 0, 0, 0)"){
            q.target.style.backgroundColor = "rgba(0, 0, 0, 1)";
        }else{
            return null;
        }
    

}


function myFunction() {
    var elem = document.getElementById("test");
    var txt;
    cssObj = window.getComputedStyle(elem, null)

    for (i = 0; i < cssObj.length; i++) {
        cssObjProp = cssObj.item(i)
        txt += cssObjProp + " = " + cssObj.getPropertyValue(cssObjProp) + "<br>";
    }
    document.getElementById("demo").innerHTML = txt;

}