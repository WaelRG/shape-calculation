function aria(test) {
    
    var x = f.t.value * 1;
    var y = f.t1.value * 1;
    if (test == 1)
        f.t3.value = x * y;
    if (x == y) {
        alert("error");
        f.t3.value = "error";
    }
  
}
function circumference(test2) {
    var x = f.t.value * 1;
    var y = f.t1.value * 1;
    if (test2 == 2)
        f.t3.value = (x + y) * 2;
    if (x == y) {
        alert("error");
        f.t3.value = "error";
    }
}
function art()
{
    var x = f.t.value * 1;
      var y = f.t1.value * 1;
    var button = document.getElementById("button");
    var canves = document.getElementById("canves");
    var ctx = canves.getContext('2d');
    ctx.fillStyle = "rgb(0,51,51)";
    ctx.fillRect(30, 30, x, y); 
    ctx.stroke();
}
function cleare()
{
  var cl = document.getElementById("clear");
  var canves = document.getElementById("canves");
  var ctx = canves.getContext('2d');
  ctx.clearRect(0, 0, canves.width, canves.height);
}
