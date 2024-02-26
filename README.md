# kennethazheng.github.io
<!DOCTYPE html>
<html lang="en"> 
    <head> 
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <title>Kenneth's Testing Ground</title> 
        <style>* {
    margin: 0;
}

.clicky_links {
    /* display: block; */
    margin: 0;
    background-color: rgb(122, 226, 226);
    padding: 10px;
    overflow: hidden;
    text-align: left;
    border: 1px solid gray;
}

nav a {
    display: inline-block;
    color: rgb(124, 107, 87);
    border: 2px solid gray;
    border-radius: 10px;
    padding: 5px;

}

body {
    background: linear-gradient(90deg,rgb(238, 177, 177), rgb(213, 192, 255) );
}

div, h1, p { 
    padding: 5px;
}</style>
    </head> 
        <nav class = "clicky_links">
            <a href = "/Users/kennethzheng_/Downloads/html/test2.html" style="text-decoration:none">same tab link</a>
            <a href = "/Users/kennethzheng_/Downloads/html/test2.html" target = "_blank">different tab</a>
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
                    <li>one bullet</li>
                    <img src="/Users/kennethzheng_/Downloads/IMG_4888.jpeg" 
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
                <script src="something.js"></script>
            </div>
        </body> 
    </html>
