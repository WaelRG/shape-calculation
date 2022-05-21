
const res = document.getElementById("result");
const toast = document.getElementById("toast");

function calculate(value) {
  const calculatedValue = eval(value || null);
  if (isNaN(calculatedValue)) {
    res.value = "Can't divide 0 with 0";
    setTimeout(() => {
      res.value = "";
    }, 1300);
  } else {
    res.value = calculatedValue;
  }
}

function liveScreen(enteredValue) {
  if (!res.value) {
    res.value = "";
  }
  res.value += enteredValue;
}

document.addEventListener("keydown", keyboardInputHandler);
function keyboardInputHandler(e) {
    e.preventDefault();
    if (e.key === "0") {
        res.value += "0";
    } else if (e.key === "1") {
        res.value += "1";
    } else if (e.key === "2") {
        res.value += "2";
    } else if (e.key === "3") {
        res.value += "3";
    } else if (e.key === "4") {
        res.value += "4";
    } else if (e.key === "5") {
        res.value += "5";
    } else if (e.key === "6") {
        res.value += "6";
    } else if (e.key === "7") {
        res.value += "7";
    } else if (e.key === "7") {
        res.value += "7";
    } else if (e.key === "8") {
        res.value += "8";
    } else if (e.key === "9") {
        res.value += "9";
    }

    if (e.key === "+") {
        res.value += "+";
    } else if (e.key === "-") {
        res.value += "-";
    } else if (e.key === "*") {
        res.value += "*";
    } else if (e.key === "/") {
        res.value += "/";
    }
    else if(e.key==="sin")
    {
        res.value += "sin";
    }
    else if(e.key==="cos")
    {
        res.value += "cos";
    }
    else if(e.key==="tan")
    {
        res.value += "tan";
    }


    if (e.key === ".") {
        res.value += ".";
    }

  
    if (e.key === "Enter") {
        calculate(result.value);
    }
    
}
function liveScreen1(num)
{
    var x = document.form.result.value;
    form.result.value = Math.sin(x*Math.PI/180);

}
function liveScreen2(num)
{
    var x = document.form.result.value;
    form.result.value = Math.cos(x*Math.PI/180);

}
function liveScreen3(num)
{
    var x = document.form.result.value;
    form.result.value = Math.tan(x*Math.PI/180);

}
function liveScreen4(num)
{
    var x = document.form.result.value;
    x = 3.14;
    document.form.result.value = x;


}
function cl()
{
    var x = document.form.result.value;
    form.result.value = x.substring(0, form.result.value.length - 1);
}
