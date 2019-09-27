require("../src/data.js");

describe("filterDatas", () => {
  it("is a function", () => {
    expect(typeof filterDatas).toBe("function");
  }); 
  it("funcao filtro", () => {
    expect(filterDatas(
      [
        {
          indicatorName: "gatinho"
        },
        {
          indicatorName: "xuxu"
        },
        {
          indicatorName: "banana"
        }
      ]
      , "gatinho")).toEqual(
      [
        {
          indicatorName: "gatinho"
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
    expect(sortData([{"indicatorName": "Xuxa"}, {"indicatorName": "Banana"}, {"indicatorName": "Peixinho"}, {"indicatorName": "Palomita"}])).toEqual([{"indicatorName": "Banana"}, {"indicatorName": "Palomita"}, {"indicatorName": "Peixinho"}, {"indicatorName": "Xuxa"}]);
  });
});

describe("dataAverage", () => {
  it("is a function", () => {
    expect(typeof dataAverage).toBe("function");
  });

  it("Média", () => {
    expect(dataAverage({"2002": 31.4799995422363, "2003": 29.6299991607666, "2004": 27.6299991607666})).toEqual(29.57999928792317);
  });

/*
  it("60 por 10", () => {
    expect(divide(60, 10)).toBe(6);
  });

  it("60 por 0", () => {
    expect(divide(60, 0)).toBe(Infinity);
  });
  */
});

/*
it("returns `ordenaPorFavor`", () => {
  expect(ordenaPorFavor(array)).toBe(
    [
      {
        "indicatorName": "Empleo de tiempo parcial, mujeres (% del total de mujeres empleadas)",
      },
      {
        "indicatorName": "Fuerza laboral con educación intermedia (% del total)",
      },
      {
        "indicatorName": "Fuerza laboral con educación intermedia, varones (% de la fuerza laboral masculina)",
      }
    ]
  );
});
*/

//require("../src/data.js");

// describe("example", () => {
//   it("is a function", () => {
//     expect(typeof example).toBe("function");
//   });

//   it("returns `example`", () => {
//     expect(example()).toBe("example");
//   });
// });
// 
/*
require("../src/data.js");

function divide(a, b) {
  return a / b;
}

array = [
  {
    "indicatorName": "Fuerza laboral con educación intermedia (% del total)",
  },
  {
    "indicatorName": "Empleo de tiempo parcial, mujeres (% del total de mujeres empleadas)",
  },
  {
    "indicatorName": "Fuerza laboral con educación intermedia, varones (% de la fuerza laboral masculina)",
  }
]
expect(ordenaPorFavor(array)).toBe(
  [
    {
      "indicatorName": "Empleo de tiempo parcial, mujeres (% del total de mujeres empleadas)",
    },
    {
      "indicatorName": "Fuerza laboral con educación intermedia (% del total)",
    },
    {
      "indicatorName": "Fuerza laboral con educación intermedia, varones (% de la fuerza laboral masculina)",
    }
  ]
)

describe("divide", () => {
  it("10 por 5", () => {
    expect(divide(10, 5)).toBe(2);
  });

  it("60 por 10", () => {
    expect(divide(60, 10)).toBe(6);
  });

  it("60 por 0", () => {
    expect(divide(60, 0)).toBe(Infinity);
  });
});

describe("filterDatas", () => {
  it("is a function", () => {
    expect(typeof filterDatas).toBe("function");
  });

//  it("returns `example`", () => {
  //  expect(example()).toBe("example");
  //});
});*/
