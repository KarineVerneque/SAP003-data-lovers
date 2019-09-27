function filterDatas(data, indicatorValue) {
  // console.log("data", data);
  // console.log("filterdatas", data.filter(indicador => indicador.indicatorName === indicatorValue));
  return data.filter(indicador => indicador.indicatorName === indicatorValue);
}

function dataAverage(ano) {
  console.log(ano);
  // const years = WORLDBANK[countryValue1].indicators[0].data; 
  // const filteredYears = Object.keys(ano).filter(year => ano[year] !== "");  
  // const soma = Object.values(ano).reduce((acc, cur) => {//olhar a constante soma
  //   if (cur !== "") {      
  //     return acc + cur;
  //   }
  //   return acc / filteredYears.length;
  // }, 0);

  // return soma;
  // //console.log(soma)
  const xuxu = Object.entries(ano).filter(ano => ano[1] !== "");
  const banana = xuxu.map(year => year[1]);
  const soma = banana.reduce((acc, cur) => {//olhar a constante soma
    return acc + cur;
  }, 0);
  
  return soma/banana.length;
}

//console.log(dataAverage({"2002": 31.4799995422363, "2003": 29.6299991607666, "2004": 27.6299991607666}));

function sortData(array) {
  return array.sort(function (a, b) {
    return a.indicatorName.localeCompare(b.indicatorName); //mudar de lugar
  });
}

//function reduceYears(hi, bye) {
//
//}

window.filterDatas = filterDatas;
window.sortData = sortData;
window.dataAverage = dataAverage;
//window.popularAno = popularAno;

