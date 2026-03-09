let n = 16;
const cont = document.getElementById('container');

function changeColor (e){
    e.target.setAttribute("style", `flex: 1 1 ${1024/n}px; background: blue;`);
};

createGrid(n);

function createGrid(n) {
    grid = n * n;
    for (let i = 0; i < grid; i++) {
        div1 = document.createElement('div');
        cont.appendChild(div1);
        console.log(i+1);
        div1.setAttribute("style", `flex: 1 1 ${1024/n}px`);
        div1.addEventListener("mouseover", changeColor);
    }
}



function reset(e){
    n = prompt("Please enter the number of squares");
    if(n > 100) n = 100;
    if(n < 1) n = 1
    alert(`Entered ${n} square(s).`);
    cont.textContent = '';
    createGrid(n);

}

btn = document.querySelector("button");
btn.addEventListener("click", reset);