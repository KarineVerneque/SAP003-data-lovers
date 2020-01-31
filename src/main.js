import { filterDatas, dataAverage, sortData } from "./data.js";
import graphic from "./chart.js"

const selectPais = document.getElementById("select-country");
const getData = document.getElementById("select-dados");
const button = document.getElementById("btn-see");
const getYears = document.getElementById("select-ano");
const yearResult = document.getElementById("year-result");
const averageResult = document.getElementById("average-result");

selectPais.addEventListener("change", () => {
  sortData(WORLDBANK[selectPais.value].indicators);
  countryDatas();
});

getData.addEventListener("change", () => {
  const indicators = WORLDBANK[selectPais.value].indicators;
  const dataFilter = indicators.filter(elem => elem.indicatorName === getData.value ? elem.data : null);
  inputYear(dataFilter[0].data);
});

button.addEventListener("click", (e) => {
  e.preventDefault();
  const countryValue = selectPais.value;
  const indicators = WORLDBANK[countryValue].indicators;
  const dataFiltrado = filterDatas(indicators, getData.value);
  const indicatorFilter = indicators.filter(elem => elem.indicatorName === getData.value ? elem.data : null);

  dataFiltrado.map(item => item.data[getYears.value] === "" ?
    yearResult.innerHTML = "Não tem dados!" :
    yearResult.innerHTML = `
      <h4>
        Média anual ${parseInt(item.data[getYears.value])}%
      </h4>
    `
  );
  const years = indicatorFilter[0].data;
  const dataOfYear = dataFiltrado[0].data[getYears.value];  
  averageResult.innerHTML = `
    <h4>
      Média por anos apurados ${parseInt(dataAverage(years))}%
    </h4>
  `;
  const avgYears = parseInt(dataAverage(years));
  graphic(dataOfYear, avgYears);
});

const countryDatas = () => {
  getData.innerHTML = `
    <option value="" disabled="" selected="">
      Selecione um dado indicador
    </option>
  `;
  const countryValue = selectPais.value;
  const indicators = WORLDBANK[countryValue].indicators;
  indicators.map((elem) => {
    getData.innerHTML += `
      <option>
        ${elem.indicatorName}
      </option>
    `;
  });
}

const inputYear = (years) => {
  getYears.innerHTML = `
    <option value="" disabled="" selected="">
      Selecione o ano apurado
    </option>
  `;
  const filterYear = Object.entries(years).filter(ano => ano[1] !== "");
  filterYear.map((elem) => {
    getYears.innerHTML += `
      <option>
        ${elem[0]}
      </option>`;
  });
}
