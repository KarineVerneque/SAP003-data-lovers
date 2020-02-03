const filterDatas = (data, indicatorValue) => {
  return data.filter(indicador => indicador.indicatorName === indicatorValue);
};

const dataAverage = (ano) => {
  const filterYear = Object.entries(ano).filter(ano => ano[1] !== "");
  const mapYear = filterYear.map(year => year[1]);
  const soma = mapYear.reduce((acc, cur) => {
    return acc + cur;
  }, 0);
  return soma / mapYear.length;
};

const sortData = (array) => {
  return array.sort(function (a, b) {
    return a.indicatorName.localeCompare(b.indicatorName);
  });
};

export { filterDatas, sortData, dataAverage };