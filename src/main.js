import { filterDatas, dataAverage, sortData } from "./data.js";
import graphic from "./chart.js";

const selectCountry = document.querySelector(".select-country");
const getData = document.querySelector(".select-data");
const resultBbutton = document.querySelector(".btn-result");
const getYears = document.querySelector(".select-year");
const yearResult = document.querySelector(".year-result");
const averageResult = document.querySelector(".average-result");

selectCountry.addEventListener("change", () => {
  sortData(WORLDBANK[selectCountry.value].indicators);
  countryDatas();
});

getData.addEventListener("change", () => {
  const indicators = WORLDBANK[selectCountry.value].indicators;
  const dataFilter = indicators.filter(elem => elem.indicatorName === getData.value ? elem.data : null);
  inputYear(dataFilter[0].data);
});

resultBbutton.addEventListener("click", (e) => {
  e.preventDefault();
  const countryValue = selectCountry.value;
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
  const countryValue = selectCountry.value;
  const indicators = WORLDBANK[countryValue].indicators;
  indicators.map((elem) => {
    getData.innerHTML += `
      <option>
        ${elem.indicatorName}
      </option>
    `;
  });
};

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
};