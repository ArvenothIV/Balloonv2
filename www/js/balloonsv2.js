// function myMove() {
//   var elem = document.getElementById("test");   
//   var pos = 0;
//   var id = setInterval(frame, 5);
//   function frame() {
//     if (pos == 350) {
//       clearInterval(id);
//     } else {
//       pos++; 
//       elem.style.top = pos + 'px'; 
//       elem.style.left = pos + 'px'; 
//     }
//   }
// }
//window.onload = function () {

var score = 0;

var balloonRun = function () {
  console.log("start");
  var balloon;
  var pos;
  balloon = document.getElementById("object");
  balloon.style.bottom = '-100px';
  balloon.style.left = (Math.floor(Math.random() * screen.width) + 1  ) + 'px';
  balloon.addEventListener("click", morePoints);
  pos = -100;

  Element.prototype.remove = function() {
    this.parentElement.removeChild(this);
  }

  function balloonFactory() {
    var result = document.createElement("div");
    result.id = "object";
    result.style.bottom = '-100px';
    balloon.style.left = (Math.floor(Math.random() * screen.width) + 1  ) + 'px';
    balloon.addEventListener("click", morePoints);
    return result;
  }

  function morePoints() {
    score += 1;
    console.log(score);
    pos = -100;
    balloon = balloonFactory();
  }

  function Move() {
    balloon = document.getElementById("object");
    if (pos < screen.height) {
      pos++; 
      balloon.style.bottom = pos + 'px';
    }
    else {
      pos = -100;
      balloon = balloonFactory();
      //balloon.remove();
      //balloon = balloonFactory();
      console.log(balloon);
    }
  }

  setInterval(Move, 10);
}
//}
