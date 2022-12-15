var billAmt = 0;
var tipPercent = 0;
var totalPeople = 0;
var tipPerPerson = 0;
var totalAmount = 0;

var bill = false;
var tip = false;
var people = false;

var buttons = document.querySelectorAll(".btn-per");
var customBtn = document.querySelector(".bttn");

var numberOfButtons = buttons.length;

// for toggle style of btns

buttons.forEach((btn) => {
  btn.addEventListener("click", handleClick);
});

function handleClick(event) {
  buttons.forEach((btn) => {
    btn.classList.remove("lightGreen");
    if (event.target.innerHTML === btn.innerHTML) {
      btn.classList.add("lightGreen");
    }
  });
}

// for tip amount

for (var i = 0; i < numberOfButtons; i++) {
  buttons[i].addEventListener("click", function () {
    tipPercent = this.innerHTML.slice(0, 2);
    tip = true;
    handleInput();
  });
}

customBtn.addEventListener("input", function () {
  tipPercent = this.value;
  tip = true;
});

// for bill amount

document.querySelector("#amt").addEventListener("input", function () {
  billAmt = document.getElementById("amt").value;
  bill = true;
  handleInput();
});

// for number of person

document.querySelector("#people").addEventListener("input", function () {
  totalPeople = document.querySelector("#people").value;
  people = true;
  handleInput();
});

// for calculation

function handleInput() {
  if (bill === true && tip === true && people === true) {
    tipPerPerson = (billAmt * tipPercent) / 100 / totalPeople;

    document.querySelector(".tipAmount > h1").textContent =
      "$" + tipPerPerson.toFixed(2);

    totalAmount = billAmt / totalPeople + tipPerPerson;

    document.querySelector(".totalAmount > h1").textContent =
      "$" + totalAmount.toFixed(2);
  } else {
    document.querySelector(".tipAmount > h1").textContent = "$" + "0.00";
    document.querySelector(".totalAmount > h1").textContent = "$" + "0.00";
  }
}

// for reset button

document.querySelector(".reset").addEventListener("click", function () {
  var resetFactors = document.querySelectorAll(".resetVal");
  resetFactors.forEach((val) => {
    val.value = null;
  });

  bill = false;
  tip = false;
  people = false;

  handleInput();

  buttons.forEach((btn) => {
    btn.classList.remove("lightGreen");
  });
});
