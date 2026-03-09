let n = 16;
let grid = n * n;
const cont = document.getElementById('container');
console.log(cont);

function changeColor (e){
    e.target.setAttribute("style", "background: blue;");
};

for (let i = 0; i < grid; i++) {
    div1 = document.createElement('div');
    cont.appendChild(div1);
    console.log(i+1);
    div1.addEventListener("mouseover", changeColor);
}