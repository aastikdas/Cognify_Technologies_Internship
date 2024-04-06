function getRandomColor() {
    var letters = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeButtonColor() {
    var button = document.getElementById('colorButton');
    button.style.backgroundColor = getRandomColor();
}


document.getElementById('colorButton').addEventListener('click', changeButtonColor);
