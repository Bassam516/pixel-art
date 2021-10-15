
let button = document.getElementById("custom");

function creatGrid() {
    
    let width = document.getElementById("width").value,
        height = document.getElementById("height").value,
        table = document.getElementById("table");
    table.innerHTML = '';
    let tableData = '';
    for (let i = 0; i < height; i++) {
        tableData += '<tr>'
        for (let j = 0; j < width; j++) {
            tableData += '<td></td>'
        }
        tableData += '</tr>'
    }
    table.innerHTML = tableData;
    setColor();
}

function setColor() {
    let colorPicker = document.getElementById("color"),
        tds = document.getElementsByTagName("td");
    for (let i = 0; i < tds.length; i++) {
        tds[i].addEventListener("click", function (event) {
            let currentTD = event.target;//get element which you clicked
            currentTD.style.backgroundColor = colorPicker.value;
        });
    }
    
}

button.addEventListener("click", creatGrid);
document.addEventListener("DOMContentLoaded", function () {
    setColor();
})
