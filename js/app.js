class GraphScreen extends HTMLElement {
  constructor() {
    super();

    let shadow = this.attachShadow({ mode: "open" });
    this.graphBox = document.createElement("div");
    this.value = document.createElement("div");

    shadow.appendChild(this.graphBox);
    this.graphBox.appendChild(this.value);
  }

  connectedCallback() {
    let graphName = this.getAttribute("graph");
    let url = this.getAttribute("data");

    function numberWithDots(x) {
      return x
        .toString()
        .replace(/^0+/, "")
        .replace(/\D/g, "")
        .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }

    this.value.innerHTML = "";

    fetch(url)
      .then((response) => response.json())
      .then((charts) =>
        charts.forEach((chart) => {
          if (chart.graph === graphName) {
            this.value.innerHTML = `
              <style>
                * {
                font-family: 'Open sans', sans-serif; 
              }
      
              .graph__tittle {
                text-transform: uppercase;
                font-size: 1.1em;
                color: #aaa;
                margin: 0;
              }
              .value {
                font-size: 1.5em;
              }
              </style>
                <div class="donutChart">
                  <h2 class="graph__tittle">
                    ${graphName}  
                  </h2>
                  <div class="value">
                  ${numberWithDots(
                    parseInt(chart["tablet"]) + parseInt(chart["smartphone"])
                  )}
                  </div>
                </div>
              `;
          }
        })
      );
  }
}

window.customElements.define("graph-screen", GraphScreen);
