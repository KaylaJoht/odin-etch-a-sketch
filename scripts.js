let n = 16;
let grid = n * n;
const cont = document.getElementById('container');
console.log(cont);
for (let i = 0; i < grid; i++) {
    div1 = document.createElement('div');
    div1.textContent = `${i+1}`;
    cont.appendChild(div1);
    console.log(i+1);
    console.log(div1.textContent);
}