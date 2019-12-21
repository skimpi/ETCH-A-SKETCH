# ETCH-A-SKETCH
odin project
looooppp

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

