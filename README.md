    <head>
        <style>
            body {
                background-color: bisque;
                /* place-content: center; */
            }
            div, #box {
                width: 900px;
                height: 50px;
                border: 5px solid rgb(206, 206, 255);
                background-color: rgb(214, 214, 236);
                place-content: center;
                /* padding: 5px; */
                padding-left:5px;
                padding-right: 5px;
                place-content:center;
            }
            
            button a{
                text-decoration: none;
                padding: 10px;
            }
            #emoji1 {
                width: 160px;
                position:relative;
                left:45%;
                margin:0 auto;
                padding-bottom: 30px;
                
            }
            #woah {
                position: absolute;
                left: 50%;
                top:18%;
                opacity: 0;
                font-weight: bold;
            }
            #emoji1:hover + #woah,
            #woah:hover {
                opacity: 1;
            }
            #box {
                
                position:relative;
            }
            /* div:hover {
                transform: translateY(100px);
                transition: all 1s;
            } */
        </style>
    </head>
    <body>
        <img id="emoji1" src="https://www.usatoday.com/gcdn/presto/2018/11/01/USAT/788eaad4-8c20-4a46-92ff-f6df41d4813d-DrunkEmoji3110.jpg?width=660&height=440&fit=crop&format=pjpg&auto=webp"
        >
        <button id="woah" onclick="move()">EXPAND</button>
        <div id="box">
            <button id="home">
                <a href="test_file.html">Home</a>
            </button>
        </div>
    </body>
    <script>
        const box = document.getElementById('box').style;
        const woah = document.getElementById('home').style;
        const add_img = document.getElementById("home");
        let huh = false;
        const new_img = "<br><img src='https://www.usatoday.com/gcdn/presto/2018/11/01/USAT/788eaad4-8c20-4a46-92ff-f6df41d4813d-DrunkEmoji3110.jpg?width=660&height=440&fit=crop&format=pjpg&auto=webp' width='300px'>";
        function pow() {
            add_img.innerHTML = add_img.innerHTML.concat(new_img);
        }
        function move() {
            box.rotate = "90deg"; 
            box.transform = "translate(25%)";
            box.height = "70%";
            box.transition = "all 2s";
            woah.rotate = "270deg";
            woah.padding = "20px";
            pow();
            huh = true;
            // add_img.innerHTML = 
            //     add_img.innerHTML.concat("<br><img src='https://www.usatoday.com/gcdn/presto/2018/11/01/USAT/788eaad4-8c20-4a46-92ff-f6df41d4813d-DrunkEmoji3110.jpg?width=660&height=440&fit=crop&format=pjpg&auto=webp' width='300px'>");
            // // document.getElementById('box').style.transition = "translate 1s";
        }
        // setTimeout(pow(), 4000);
        // if (huh) {
            
        //     // setTimeout(pow(), 2000);
        // };
    </script>
