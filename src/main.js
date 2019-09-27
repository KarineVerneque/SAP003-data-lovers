const selectPais = document.getElementById("select-country");
selectPais.addEventListener("change", () => {
  sortData(WORLDBANK[selectPais.value].indicators);
  countryDatas();
});

const getData = document.getElementById("select-dados");
const getYears = document.getElementById("select-ano");
getData.addEventListener("change", () => {
  const indicators = WORLDBANK[selectPais.value].indicators;
  const data = indicators.filter(elem => elem.indicatorName === getData.value ? elem.data : null);
  popularAno(data[0].data);
});

const button = document.getElementById("btn-ver");
const result = document.getElementById("result");
const reduce = document.getElementById("reduce");

button.addEventListener("click", (e) => {
  e.preventDefault();
  const countryValue1 = selectPais.value;
  const indicators1 = WORLDBANK[countryValue1].indicators;
  const dataFiltrado = filterDatas(indicators1, getData.value);// filterDatas(indicators1, getData.value, getYears.value);

  // console.log(dataFiltrado[0].data.filter())
  dataFiltrado.map(item => {    
    if (item.data[getYears.value] === "") {
      result.innerHTML = "Não tem dados!";
    } else {
      result.innerHTML = `Esse é o resultado ${parseInt(item.data[getYears.value])}%`;
    }
  });

  const years = WORLDBANK[countryValue1].indicators[0].data; 
  //console.log(years);
  // const filteredYears = Object.keys(years).filter( year => years[year] !== "");  
  // const soma = Object.values(years).reduce((acc, cur) => {//olhar a constante soma
  //   if (cur !== "") {      
  //     return acc + cur;
  //   }
  //   return acc / filteredYears.length;
  // }, 0);
  // console.log(soma);
  reduce.innerHTML = `Média por anos disponíveis ${parseInt(dataAverage(years))}%`;

  // const years = WORLDBANK[countryValue1].indicators[0].data;
  // const filteredYears = Object.keys(years).filter( year => years[year] !== "");
  
  //reduce.innerHTML = `Média por anos disponíveis ${parseInt((soma / filteredYears.length))}%`
  //CORRIGIR A DIVISÃO
  //console.log(soma / filteredYears.length)
});

function countryDatas() {
  getData.innerHTML = "";
  
  const countryValue = selectPais.value;
  const indicators = WORLDBANK[countryValue].indicators;

  indicators.map((elem) => {
    getData.innerHTML += `<option>${elem.indicatorName}</option>`;
  });

  //const years = WORLDBANK[countryValue].indicators[0].data;

  // for (item of Object.keys(years)) {
  //   if (years[item] != "" && years[item]  >= 2010) {
  //     getYears.innerHTML += `<option>${item}</option>`; 
  //   }
  // }

}

function popularAno(years) {
  getYears.innerHTML = "";
  // console.log(years)
  const xuxu = Object.entries(years).filter(ano => ano[1] !== ""); 
  //const banana = xuxu.map(year => year[0])
     
  xuxu.map((elem) => {
    getYears.innerHTML += `<option>${elem[0]}</option>`;
  });
     
  //console.log(banana); 
  //getYears.innerHTML += `${xuxu.map(year => `<option>${year[0]}</option>`)}`;
    
  // getYears.innerHTML += `<option>${xuxu}</option>`;
  //console.log(xuxu)
  // console.log(xuxu[0])
  //  xuxu.map((elem) => {
  // getYears.innerHTML += `<option>${xuxu[0]}</option>`;
  //  )}
  // })
  //
  
  // for (item of Object.entries(years)) {
  // if (item[1] !== "") {
  // console.log(item)
  //console.log(years[item])
  // getYears.innerHTML += `<option>${item[0]}</option>`;
  //console.log(item[1])
  // }
  // }
}
