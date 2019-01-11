// Select color input
// Select size input
// Table grid creation code :
// When size is submitted by the user, call makeGrid()

function makeGrid() {
let height = document.getElementById('inputHeight').value;
let width = document.getElementById('inputWidth').value;
let table = document.getElementById('pixelCanvas');
// Your code goes here!
    table.innerHTML = '';
    var tbody = document.createElement('tbody');
    for (var i = 0; i < height; i++) {
        var tr = document.createElement('tr');
        for (var j = 0; j < width; j++) {
            var td = document.createElement('td');
            td.appendChild(document.createTextNode(''));
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }
    table.appendChild(tbody);
// show alert 
    window.alert("Table created successfully");

}

//Change color of pixel when clicked.
$('body').on('click', 'td', function() {
	var color = document.getElementById('colorPicker').value;
    $(this).css('background-color', color);
});