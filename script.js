
const grid = () => {
    const container = document.querySelector(".grid-container");

    for (i = 0; i < 56; i++) {
       let item = document.createElement('div');
       item.className = 'item'
       item.id = `grid${i}`;
       container.appendChild(item);
       
       }; // this creates a number of grids

    };

grid();


var input = document.querySelectorAll('input');

for (let i = 0; i < input.length; i++){
    input[i].addEventListener('input', function(){
        let red = document.getElementById('red').value,
            green = document.getElementById('green').value,
            blue = document.getElementById('blue').value;
        
        let display = document.getElementById('display');
        display.style.background = "rgb("+ red +", "+ green +", "+ blue +")";
    });
}

const container = document.querySelector('.grid-container'); //summons the class grid-container from index.html
const item = container.querySelectorAll('.item');

const color = () => {
    container.querySelectorAll('.item').forEach(item => {
        item.addEventListener('mouseover', function (q) {
            q.target.classList = 'colord';
        })
    })
};

color();

