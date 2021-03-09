//Graph 1
let graphOne = () => {
    target = document.getElementById('mw-content-text');
    beforeTarget = document.getElementById('toc');
    let canvasOne = document.createElement('canvas');
    canvasOne.setAttribute('id', 'crimeStatistic');
    this.target.insertBefore(canvasOne, beforeTarget);
    let ctx = document.getElementById("crimeStatistic").getContext("2d");
    let dataPoints = [];
    let label = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    let i = 10;
    let chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: label,
            datasets: [{
                label: ["Crime Statistics"],
                fill: false,
                borderColor: "blue",
                data: dataPoints,
            }]
        }
    })

    function updateGraph() {
        i++;
        label.push(i);
        fetch('https://canvasjs.com/services/data/datapoints.php')
            .then(function (response) {
                return response.json()
            })
            .then(function (data) {
                dataPoints.length + 1;
                data.forEach(element => dataPoints.push(parseInt(element[1])));
                chart.update();
            })
    };
    setInterval(updateGraph, 1000, 10);
}


//Graph 2
let graphTwo = () => {

    function tableToJson(table) {
        let data = [];
        for (i = 1; i < table.rows.length; i++) {
            let tableRow = table.rows[i];
            let rowData = [];
            for (j = 1; j < tableRow.cells.length; j++) {
                rowData.push(tableRow.cells[j].innerHTML);;
            }
            data.push(rowData);
        }
        return data;
    }

    const table2007_2009 = [];
    const table2010_2012 = [];
    let table2 = document.getElementById("table2");

    table2 = tableToJson(table2);
    Array.from(table2).forEach((element) => {
        table2007_2009.push([element[0], element[2]]);
        table2010_2012.push([element[0], element[1]]);

    })
    let randomColor = () => {
        let red = Math.floor(Math.random() * 256);
        let green = Math.floor(Math.random() * 256);
        let blue = Math.floor(Math.random() * 256);
        let color = 'rgb(' + red + ',' + green + ',' + blue + ')';
        return color;
    };

    const label = [];
    const data2 = {};
    const year = [2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012];
    let table1 = document.getElementById("table1");
    table = Array.from(tableToJson(table1));
    for (let j = 1; j < table.length; j++) {
        let sum = [];

        for (let i = 1; i < table[j].length; i++) {

            if (parseFloat(table[j][i])) {

                sum.push(parseFloat(table[j][i]));
            }

        }
        data2[table[j][0]] = sum;
    }
    const values = Object.values(data2).map(e => e.reduce((acc, val) => acc + parseFloat(val), 0));
    console.log(Object.keys(data2)[1]);

    const ctxCrime = document.getElementById('crime').getContext('2d');
    const chartCrime = new Chart(ctxCrime, {

        //The type of chart we want to create
        type: 'line',
        //The data for our dataset Object.keys(data2)
        data: {
            labels: year,
            datasets: [{
                    label: Object.keys(data2)[0],
                    fill: false,
                    borderColor: randomColor(),
                    data: Object.values(data2)[0]

                },
                {
                    label: Object.keys(data2)[1],
                    fill: false,
                    borderColor: randomColor(),
                    data: Object.values(data2)[1]

                },
                {
                    label: Object.keys(data2)[2],
                    fill: false,
                    borderColor: randomColor(),
                    data: Object.values(data2)[2]

                },
                {
                    label: Object.keys(data2)[3],
                    fill: false,
                    borderColor: randomColor(),
                    data: Object.values(data2)[3]

                },
                {
                    label: Object.keys(data2)[4],
                    fill: false,
                    borderColor: randomColor(),
                    data: Object.values(data2)[4]

                },
                {
                    label: Object.keys(data2)[5],
                    fill: false,
                    borderColor: randomColor(),
                    data: Object.values(data2)[5]

                },
                {
                    label: Object.keys(data2)[6],
                    fill: false,
                    borderColor: randomColor(),
                    data: Object.values(data2)[6]

                },
                {
                    label: Object.keys(data2)[7],
                    fill: false,
                    borderColor: 'rgb(255, 99, 132)',
                    data: Object.values(data2)[7]

                },
                {
                    label: Object.keys(data2)[8],
                    fill: false,
                    borderColor: randomColor(),
                    data: Object.values(data2)[8]

                },
                {
                    label: Object.keys(data2)[9],
                    fill: false,
                    borderColor: randomColor(),
                    data: Object.values(data2)[9]

                },
                {
                    label: Object.keys(data2)[10],
                    fill: false,
                    borderColor: randomColor(),
                    data: Object.values(data2)[10]

                },
                {
                    label: Object.keys(data2)[11],
                    fill: false,
                    borderColor: randomColor(),
                    data: Object.values(data2)[11]

                },
                {
                    label: Object.keys(data2)[12],
                    fill: false,
                    borderColor: randomColor(),
                    data: Object.values(data2)[12]

                },
                {
                    label: Object.keys(data2)[13],
                    fill: false,
                    borderColor: randomColor(),
                    data: Object.values(data2)[13]

                },
                {
                    label: Object.keys(data2)[14],
                    fill: false,
                    borderColor: randomColor(),
                    data: Object.values(data2)[14]

                },
                {
                    label: Object.keys(data2)[15],
                    fill: false,
                    borderColor: randomColor(),
                    data: Object.values(data2)[15]

                },
                {
                    label: Object.keys(data2)[16],
                    fill: false,
                    borderColor: randomColor(),
                    data: Object.values(data2)[16]

                },
                {
                    label: Object.keys(data2)[17],
                    fill: false,
                    borderColor: randomColor(),
                    data: Object.values(data2)[17]

                },
                {
                    label: Object.keys(data2)[18],
                    fill: false,
                    borderColor: randomColor(),
                    data: Object.values(data2)[18]

                },
                {
                    label: Object.keys(data2)[19],
                    fill: false,
                    borderColor: randomColor(),
                    data: Object.values(data2)[19]

                },
                {
                    label: Object.keys(data2)[20],
                    fill: false,
                    borderColor: randomColor(),
                    data: Object.values(data2)[20]

                },
                {
                    label: Object.keys(data2)[21],
                    fill: false,
                    borderColor: randomColor(),
                    data: Object.values(data2)[21]

                },
                {
                    label: Object.keys(data2)[22],
                    fill: false,
                    borderColor: randomColor(),
                    data: Object.values(data2)[22]

                },
                {
                    label: Object.keys(data2)[23],
                    fill: false,
                    borderColor: randomColor(),
                    data: Object.values(data2)[23]

                },
                {
                    label: Object.keys(data2)[24],
                    fill: false,
                    borderColor: randomColor(),
                    data: Object.values(data2)[24]

                },
                {
                    label: Object.keys(data2)[25],
                    fill: false,
                    borderColor: randomColor(),
                    data: Object.values(data2)[25]

                },
                {
                    label: Object.keys(data2)[26],
                    fill: false,
                    borderColor: randomColor(),
                    data: Object.values(data2)[26]

                },
                {
                    label: Object.keys(data2)[27],
                    fill: false,
                    borderColor: randomColor(),
                    data: Object.values(data2)[27]

                },
                {
                    label: Object.keys(data2)[28],
                    fill: false,
                    borderColor: randomColor(),
                    data: Object.values(data2)[28]

                },
                {
                    label: Object.keys(data2)[29],
                    fill: false,
                    borderColor: randomColor(),
                    data: Object.values(data2)[29]

                },
                {
                    label: Object.keys(data2)[30],
                    fill: false,
                    borderColor: randomColor(),
                    data: Object.values(data2)[30]

                },
                {
                    label: Object.keys(data2)[31],
                    fill: false,
                    borderColor: randomColor(),
                    data: Object.values(data2)[31]

                },
                {
                    label: Object.keys(data2)[32],
                    fill: false,
                    borderColor: randomColor(),
                    data: Object.values(data2)[32]

                },
                {
                    label: Object.keys(data2)[33],
                    fill: false,
                    borderColor: randomColor(),
                    data: Object.values(data2)[33]

                },
                {
                    label: Object.keys(data2)[34],
                    fill: false,
                    borderColor: randomColor(),
                    data: Object.values(data2)[34]
                }
            ]
        },

        //Configuration options go here
        options: {
            title: {
                display: true,
                text: 'Prison population'
            }
        }
    });

}

//Graph 3 
let graphThree = () => {
    target = document.getElementById('mw-content-text');
    beforeTarget = document.getElementById('table2');
    let canvasThree = document.createElement('canvas');
    canvasThree.setAttribute('id', 'homicide');
    this.target.insertBefore(canvasThree, beforeTarget);
    //convert tb > json
    function tableToJson(table) {
        let data = [];
        for (i = 1; i < table.rows.length; i++) {
            let tableRow = table.rows[i];
            let rowData = [];
            for (j = 1; j < tableRow.cells.length; j++) {
                rowData.push(tableRow.cells[j].innerHTML);;
            }
            data.push(rowData);
        }
        return data;
    }

    let table = document.getElementById("table1");
    table = tableToJson(table1);

    let table2 = document.getElementById("table2");
    table2 = tableToJson(table2);

    //console.log(table);
    //console.log(table2);

    //get Random color
    let getRandomColor = () => {
        let letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    function arrayStringToFloat(table) {
        let data = [];
        for (i = 0; i < table.length; i++) {
            table[i] = table[i].replace(',', '.');
            data.push(parseFloat(table[i]));
        }
        return data
    }

    let removeIndex = function (arr, index) {
        let remove = arr.slice();
        remove.splice(index, 1);
        return remove;
    }

    //Graph 3
    const ctxHomicide = document.getElementById('homicide').getContext('2d');
    const chartHomicide = new Chart(ctxHomicide, {
        // The type of chart we want to create
        type: 'bar',
        data: {
            labels: ["2007-2009", "2010-2012"],
            datasets: [{
                    data: arrayStringToFloat(removeIndex(table2[1], 0)),
                    label: table2[1][0],
                    backgroundColor: getRandomColor(),
                }, {
                    data: arrayStringToFloat(removeIndex(table2[2], 0)),
                    label: table2[2][0],
                    backgroundColor: getRandomColor(),
                }, {
                    data: arrayStringToFloat(removeIndex(table2[3], 0)),
                    label: table2[3][0],
                    backgroundColor: getRandomColor(),
                }, {
                    data: arrayStringToFloat(removeIndex(table2[4], 0)),
                    label: table2[4][0],
                    backgroundColor: getRandomColor(),
                }, {
                    data: arrayStringToFloat(removeIndex(table2[5], 0)),
                    label: table2[5][0],
                    backgroundColor: getRandomColor(),
                }, {
                    data: arrayStringToFloat(removeIndex(table2[6], 0)),
                    label: table2[6][0],
                    backgroundColor: getRandomColor(),
                }, {
                    data: arrayStringToFloat(removeIndex(table2[7], 0)),
                    label: "UK & Wales",
                    backgroundColor: getRandomColor(),
                }, {
                    data: arrayStringToFloat(removeIndex(table2[8], 0)),
                    label: 'Scotland',
                    backgroundColor: getRandomColor(),
                }, {
                    data: arrayStringToFloat(removeIndex(table2[9], 0)),
                    label: table2[9][0],
                    backgroundColor: getRandomColor(),
                }, {
                    data: arrayStringToFloat(removeIndex(table2[10], 0)),
                    label: table2[10][0],
                    backgroundColor: getRandomColor(),
                }, {
                    data: arrayStringToFloat(removeIndex(table2[11], 0)),
                    label: table2[11][0],
                    backgroundColor: getRandomColor(),
                }, {
                    data: arrayStringToFloat(removeIndex(table2[12], 0)),
                    label: table2[12][0],
                    backgroundColor: getRandomColor(),
                }, {
                    data: arrayStringToFloat(removeIndex(table2[13], 0)),
                    label: table2[13][0],
                    backgroundColor: getRandomColor(),
                }, {
                    data: arrayStringToFloat(removeIndex(table2[14], 0)),
                    label: table2[14][0],
                    backgroundColor: getRandomColor(),
                }, {
                    data: arrayStringToFloat(removeIndex(table2[15], 0)),
                    label: table2[15][0],
                    backgroundColor: getRandomColor(),
                }, {
                    data: arrayStringToFloat(removeIndex(table2[16], 0)),
                    label: table2[16][0],
                    backgroundColor: getRandomColor(),
                }, {
                    data: arrayStringToFloat(removeIndex(table2[17], 0)),
                    label: table2[17][0],
                    backgroundColor: getRandomColor(),
                }, {
                    data: arrayStringToFloat(removeIndex(table2[18], 0)),
                    label: table2[18][0],
                    backgroundColor: getRandomColor(),
                }, {
                    data: arrayStringToFloat(removeIndex(table2[19], 0)),
                    label: table2[19][0],
                    backgroundColor: getRandomColor(),
                }, {
                    data: arrayStringToFloat(removeIndex(table2[20], 0)),
                    label: table2[20][0],
                    backgroundColor: getRandomColor(),
                }, {
                    data: arrayStringToFloat(removeIndex(table2[21], 0)),
                    label: 'Northern Ireland',
                    backgroundColor: getRandomColor(),
                }, {
                    data: arrayStringToFloat(removeIndex(table2[22], 0)),
                    label: table2[22][0],
                    backgroundColor: getRandomColor(),
                }, {
                    data: arrayStringToFloat(removeIndex(table2[23], 0)),
                    label: table2[23][0],
                    backgroundColor: getRandomColor(),
                },
                {
                    data: arrayStringToFloat(removeIndex(table2[24], 0)),
                    label: table2[24][0],
                    backgroundColor: getRandomColor(),
                }, {
                    data: arrayStringToFloat(removeIndex(table2[25], 0)),
                    label: table2[25][0],
                    backgroundColor: getRandomColor(),
                }, {
                    data: arrayStringToFloat(removeIndex(table2[26], 0)),
                    label: table2[26][0],
                    backgroundColor: getRandomColor(),
                }, {
                    data: arrayStringToFloat(removeIndex(table2[27], 0)),
                    label: table2[27][0],
                    backgroundColor: getRandomColor(),
                }, {
                    data: arrayStringToFloat(removeIndex(table2[28], 0)),
                    label: table2[28][0],
                    backgroundColor: getRandomColor(),
                }, {
                    data: arrayStringToFloat(removeIndex(table2[29], 0)),
                    label: table2[29][0],
                    backgroundColor: getRandomColor(),
                }
            ]
        },
        options: {
            title: {
                display: true,
                text: 'Prison population average per year'
            }
        }
    });

}

graphOne();
graphTwo();
graphThree();