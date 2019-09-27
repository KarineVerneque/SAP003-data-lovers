function filterDatas(data, indicatorValue) {
  return data.filter(indicador => indicador.indicatorName === indicatorValue);
}

function dataAverage(ano) {
  const xuxu = Object.entries(ano).filter(ano => ano[1] !== "");
  const banana = xuxu.map(year => year[1]);
  const soma = banana.reduce((acc, cur) => {
    return acc + cur;
  }, 0);
  
  return soma/banana.length;
  const mapYear = filterYear.map(year => year[1]);
  const soma = mapYear.reduce((acc, cur) => {
    return acc + cur;
  }, 0);
  return soma / mapYear.length;

  
}


function sortData(array) {
  return array.sort(function (a, b) {
  });
}


window.filterDatas = filterDatas;
window.sortData = sortData;
window.dataAverage = dataAverage;


