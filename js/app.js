const boxChart = document.querySelectorAll(".box__chart");

// const data = require("../data.json");
fetch("../data.json")
  .then(function (resp) {
    return resp.json;
  })
  .then(function (data) {
    return data;
  });

function getData() {
  let names = document.querySelectorAll("[name]");

  names.forEach((name) => {
    console.log(name);
  });
}

// getData();
