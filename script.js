var diameter = document.querySelector('input');
var perimeter = document.querySelector('h2');

function omtrek() {
    const pi = 3.141592;
    return diameter.value * 3.14;
}

function resultaat() {
    alert ("Omtrek van de cirkel is: " + omtrek());
}
