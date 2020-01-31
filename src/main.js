const getYears = document.querySelector(".select-ano");

const selectPais = document.querySelector(".select-country");
selectPais.addEventListener("change", () => {
  sortData(WORLDBANK[selectPais.value].indicators);
  countryDatas();
});

const getData = document.querySelector(".select-data");
getData.addEventListener("change", () => {
  const indicators = WORLDBANK[selectPais.value].indicators;
  const dataFilter = indicators.filter(elem => elem.indicatorName === getData.value ? elem.data : null);
  inputYear(dataFilter[0].data);
});

const button = document.querySelector(".btn-see");
const yearResult = document.querySelector(".year-result");
const averageResult = document.querySelector(".average-result");

button.addEventListener("click", (e) => {
  e.preventDefault();
  const countryValue = selectPais.value;
  const indicators = WORLDBANK[countryValue].indicators;

  const dataFiltrado = filterDatas(indicators, getData.value);
  const indicatorFilter = indicators.filter(elem => elem.indicatorName === getData.value ? elem.data : null);
  dataFiltrado.map(item => item.data[getYears.value] === "" ? yearResult.innerHTML = "Não tem dados!" : yearResult.innerHTML = `<h4>Média anual ${parseInt(item.data[getYears.value])}%</h4>`);

  const years = indicatorFilter[0].data;
  const dataOfYear = dataFiltrado[0].data[getYears.value];
  averageResult.innerHTML = `<h4>Média por anos apurados ${parseInt(dataAverage(years))}%</h4>`;

  createChart(dataOfYear, years);
});

function createChart(dataOfYear, years) {
  const ctx = document.getElementById("myChart").getContext("2d");

  new Chart(ctx, {
    type: "polarArea",
    data: {
      labels: ["Média anual", "Média por anos apurados"],
      datasets: [{
        label: "# of Votes",
        data: [parseInt(dataOfYear), parseInt(dataAverage(years))],
        backgroundColor: [
          "rgba(100, 154, 46, 0.2)",

          "rgba(8, 8, 138, 0.2)"

        ],
        borderColor: [
          "rgba(100, 154, 46, 1)",
          "rgba(8, 8, 138, 1)"

        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });

  window.scroll({
    top: 900,
    behavior: "smooth"
  });
};

function countryDatas() {
  getData.innerHTML = "<option value=\"\" disabled=\"\" selected=\"\"> Selecione um dado indicador</option>";
  const countryValue = selectPais.value;
  const indicators = WORLDBANK[countryValue].indicators;

  const mapIndicatorsName = indicators.map((elem) => {
    return `<option>${elem.indicatorName}</option>`;
  }).join("");
  getData.innerHTML = mapIndicatorsName;
};

function inputYear(years) {
  getYears.innerHTML = "<option value=\"\" disabled=\"\" selected=\"\"> Selecione o ano apurado</option>";
  const filterYear = Object.entries(years).filter(ano => ano[1] !== "");

  const mapYears = filterYear.map((elem) => {
    return `<option>${elem[0]}</option>`;
  }).join("");
  getYears.innerHTML = mapYears;
};
