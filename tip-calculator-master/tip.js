
function calc() {
    var billAmt = document.getElementById("amt").value;
    var serviceQual = document.getElementById("serviceQual").value;
    var numOfPeople = document.getElementById("peopleamt").value;
    console.log(billAmt);
    //validate input
    if (billAmt === "" || serviceQual == 0) {
      alert("Please enter values");
      return;
    }
    //Calculate tip
    var tip = (billAmt * serviceQual) / numOfPeople;
    //round to two decimal places
    tip = Math.round(tip * 100) / 100;
    //next line allows us to always have two digits after decimal point
    tip = tip.toFixed(2);
    //Display the tip
    
    var total = parseInt((billAmt)/numOfPeople)+parseInt(tip);
    total = total.toFixed(2);
    document.getElementById("Answer").innerHTML="Tip will be "+tip+" each";
    document.getElementById("Answer2").innerHTML="Share for each will be "+total;
  }
  