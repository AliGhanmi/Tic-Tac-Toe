console.log('running on index html successfully')
var squares = document.getElementsByClassName('square');
console.log('squares', squares);
for(var i = 0; i < squares.length; i++){
    squares[i].addEventListener('click', myFunction);
}
function myFunction(event){
    event.target.innerHTML ="X"
    console.log('icons', event.target.innerHTML)
}
 

