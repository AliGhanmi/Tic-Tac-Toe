console.log('running on index html successfully')
var squares = document.getElementsByClassName('square');
console.log('squares', squares);
for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', myFunction);
}
var counter = 1
var arrX = []
var arrO = []
var winnerPossibilities = [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9'],
    ['1', '4', '7'],
    ['2', '5', '8'],
    ['3', '6', '9'],
    ['1', '5', '9'],
    ['3', '5', '7']]
function myFunction(event) {
    if (event.target.innerHTML.length === 0) {
        if (counter % 2 !== 0) {
            event.target.innerHTML = "X"
            arrX.push(event.target.id)
            console.log('arrX', arrX)
            console.log('icons', event.target.innerHTML)
            counter++
            console.log('counter', counter)
            check()
        }
        else {
            event.target.innerHTML = "O"
            arrO.push(event.target.id)
            console.log('arrO', arrO)
            console.log('icons', event.target.innerHTML)
            counter++
            console.log('counter1', counter)
            check()
        }
    }
    else {
        alert('icon is clicked try another one')
    }
    if (counter === 10) {
        alert('game finshed try again')
    }

}
function check() {
    for (var i = 0; i < winnerPossibilities.length; i++) {
        var arr = winnerPossibilities[i]
        for (var j = 0; j < arr.length; j++) {
            if (arrX.includes(arr[j])) {
                alert('player X wins')
            }
            else if (arrO.includes(arr[j])) {
                alert('player O wins')
            }
        }
    }
}


