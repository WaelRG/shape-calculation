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