<html lang="en"> 
    <head> 
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <title> Kenneth's Testing Ground </title> 
        <link href = "stylesht.css" rel='stylesheet'>
    </head> 
        <nav class = "clicky_links">
            <a href = "test2.html" style="text-decoration:none">same tab link</a>
            <a href = "test2.html" target = "_blank">different tab</a>
            <a href = "try2move.html">moving pictures</a>
            <a href = "stylesheet.html">notes</a>
            <a href="ttt_.html" target='_blank'>Tic Tack Toe</a>
        </nav>
        <h1>Me when i go falling:</h1>
        <body> 
            <!-- \/inline css: below\/ -->
            <p style = 'color:blue'>Weee</p>
            <div id="bullet">
                <h3>Bullet Points</h3>
                <ul>
                    <li>bunny: </li>
                    <img src="[/Users/kennethzheng_/Downloads/IMG_4888.jpeg](https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.breadboxfarm.com%2Fcare-sheet&psig=AOvVaw3g2jOhti3RdSfh4QlYlOw2&ust=1712012354789000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCOCYrpXNn4UDFQAAAAAdAAAAABAE)" 
                    width = "320" length = "240" alt="" onclick="alert('bunny')"/>
                    <li>second bullet</li>
                </ul>
            </div>
            
            <div id = "button"> 
                <br>
                <h5> click buttons:</h5>
                <p id = "numberDisplay">0</p>
                <button onclick = "changeNumber()"> add 1 </button>
                <button onclick="decr()"> minus 1</button>
                <button onclick="reset()">reset</button>
                <button onclick = "square2()">^2</button>
                <button onclick="sqrt()">sqrt</button>
                <script >
                let currentNumber = 0;


function changeNumber() {
    currentNumber++;

    document.getElementById("numberDisplay").innerHTML = currentNumber;
}

function reset() {
    currentNumber = 0;
    document.getElementById("numberDisplay").innerHTML = currentNumber;
}

function square2() {
    currentNumber = Math.floor(currentNumber * currentNumber*100)/100;
    // .getElementById() finds the id thats in the paren and then change it
    document.getElementById("numberDisplay").innerHTML = currentNumber;
}

function sqrt() {
    if (currentNumber >= 0) {
        currentNumber = Math.floor(100*(currentNumber ** (1/2)))/100
    }else{
        currentNumber = "imaginary";
    }
    document.getElementById("numberDisplay").innerHTML = currentNumber;
}
function decr(){
    currentNumber --;
    document.getElementById("numberDisplay").innerHTML = currentNumber;
}</script>
            </div>
        </body> 
    </html>
