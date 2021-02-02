console.log('running on index html successfully')
var squares = document.getElementsByClassName('square');
console.log('squares', squares);
for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', myFunction);
}
var counter = 1
function myFunction(event) {
    if (event.target.innerHTML.length === 0) {
        if (counter % 2 !== 0) {
            event.target.innerHTML = "X"
            console.log('icons', event.target.innerHTML)
            counter++
            console.log('counter', counter)
        }
        else {
            event.target.innerHTML = "O"
            console.log('icons', event.target.innerHTML)
            counter++
            console.log('counter1', counter)
        }
    } else {
        alert('icon is clicked try another one')
    }

}


