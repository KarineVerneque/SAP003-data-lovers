require("../src/data.js");

describe("filterDatas", () => {
  it("is a function", () => {
    expect(typeof filterDatas).toBe("function");
  }); 
  it("funcao filtro", () => {
    expect(filterDatas(
      [
        {
          indicatorName: "Empleo de tiempo parcial, mujeres (% del total de mujeres empleadas)"
        },
        {
          indicatorName: "Fuerza laboral con educación intermedia (% del total)"
        },
        {
          indicatorName: "Fuerza laboral con educación intermedia, varones (% de la fuerza laboral masculina)"
        }
      ]
      , "Empleo de tiempo parcial, mujeres (% del total de mujeres empleadas)")).toEqual(
      [
        {
          indicatorName: "Empleo de tiempo parcial, mujeres (% del total de mujeres empleadas)"
        }
      ]
    );
  });
});

describe("sortData", () => {
  it("is a function", () => {
    expect(typeof sortData).toBe("function");
  });

  it("returns `sortData`", () => {
    expect(sortData(
      [
        {"indicatorName": "Tasa de participación en la fuerza laboral, total (% de la población total mayor de 15 años) (estimación nacional)"},
        {"indicatorName": "Empleo de tiempo parcial, mujeres (% del total de mujeres empleadas)"},
        {"indicatorName": "Proporcin de tasas de participacin laboral femenina y masculina (%) (estimación modelado OIT)"},
        {"indicatorName": "Fuerza laboral con educación intermedia, mujeres (% de la fuerza laboral femenina)"}
      ]
    )).toEqual(
      [
        {"indicatorName": "Empleo de tiempo parcial, mujeres (% del total de mujeres empleadas)"},
        {"indicatorName": "Fuerza laboral con educación intermedia, mujeres (% de la fuerza laboral femenina)"},
        {"indicatorName": "Proporcin de tasas de participacin laboral femenina y masculina (%) (estimación modelado OIT)"},
        {"indicatorName": "Tasa de participación en la fuerza laboral, total (% de la población total mayor de 15 años) (estimación nacional)"}
      ]
    );
  });
});

describe("dataAverage", () => {
  it("is a function", () => {
    expect(typeof dataAverage).toBe("function");
  });

  it("Média", () => {
    expect(dataAverage(
      {
        "2002": 31.4799995422363,
        "2003": 29.6299991607666,
        "2004": 27.6299991607666
      }
    )).toEqual(
      29.57999928792317
    );
  });
});
