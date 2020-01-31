const graphic = (dataOfYear, avgYears) => {
    const ctx = document.getElementById("myChart").getContext("2d");
    new Chart(ctx, {
        type: "polarArea",
        data: {
            labels: ["Média anual", "Média por anos apurados"],
            datasets: [{
                label: "# of Votes",
                data: [parseInt(dataOfYear), parseInt(avgYears)],
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
        behavior: 'smooth'
    });
}
export default graphic;