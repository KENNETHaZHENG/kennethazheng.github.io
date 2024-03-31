let bin = 'O'
let iD_ = ""


// const buttonGroup = document.getElementById("ttt");

// const buttonGroupPressed = e => { 
  
//   const isButton = e.target.nodeName === 'BUTTON';
  
//   if(!isButton) {
//     return
//   }
//   document.getElementById(e.target.id).innerID = "lp";
  
// }
// buttonGroup.addEventListener("click", buttonGroupPressed);

function numChan(clicked_id) {
  // var buttons = document.getElementsByTagName("button"); // gathers all the id of those with button
  // clicked_id is the id.
  let valId_a = document.getElementById(clicked_id).ariaDisabled
  let valId = document.getElementById(clicked_id).innerHTML
  let p_turn = document.getElementById("turn").innerHTML
  let stads = "Player Bs Turn"
  
  if (p_turn == "Player As Turn"){
    bin = 'O';
  } else {
    if (p_turn == "Player Bs Turn"){
      bin = 'X';
      stads = "Player As Turn"
    } else {
      bin = 'hi';
    }
  }
  document.getElementById(clicked_id).innerHTML = bin;
  document.getElementById('turn').innerHTML = stads;
  if (valId_a == 'False'){
    valId_a = 'True';
  }
}
console.log("hi");
