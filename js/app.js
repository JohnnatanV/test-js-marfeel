const boxChart = document.querySelectorAll(".box__chart");

const data = require("../data.json");

console.log(data);

function getData() {
  let names = document.querySelectorAll("[name]");

  names.forEach((name) => {
    console.log(name);
  });
}

getData();
