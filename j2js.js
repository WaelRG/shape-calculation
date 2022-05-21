

function aria(test) {
    
    var r = f.t.value * 1;
    const p = 3.14;
    if (test == 1)
        f.t2.value = p * Math.pow(r, 2);
    
  
}
function circumference(test2) {
      var r = f.t.value * 1;
    const p = 3.14;
    if (test2 == 2)
        f.t2.value = 2 * p * r;
    
    
}
function art()
{
      var r = f.t.value * 1;
    var button = document.getElementById("button");
    var canves = document.getElementById("canves");
    var ctx = canves.getContext('2d');
    ctx.arc(100 , 75 , r, 0, 2 * Math.PI);
    ctx.stroke();
}
function cleare()
{
  var cl = document.getElementById("clear");
  var canves = document.getElementById("canves");
  var ctx = canves.getContext('2d');
  ctx.clearRect(0, 0, canves.width, canves.height);
}
