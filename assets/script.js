let randomColor = () => {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    let color = 'rgb(' + red + ',' + green + ',' + blue + ')';
    return color;
}

let graphOne = () => {

    let ctx = document.getElementById("crimeStatistic").getContext("2d");
    let dataPoints = [];
    let label = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    let i = 9;
    let chart1 = new Chart(ctx, {
        type: 'line',
        data: {
            labels: label,
            datasets: [{
                label: ["Crime Statistics"],
                borderColor: "red",
                data: dataPoints,
            }]
        }
    })
    //Update and ajax
    function updateGraf() {
        i++;
        label.push(i);
        fetch('https://canvasjs.com/services/data/datapoints.php')
            .then(function (response) {
                return response.json()
            })
            .then(function (data) {
                dataPoints.length + 1;
                data.forEach(element => dataPoints.push(parseInt(element[1])));
                chart1.update();
            })
    };
    setInterval(updateGraf, 1000);
}

graphOne();

//Graph 2
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
        datasets: [
            {
                label: Object.keys(data2)[0],
                borderColor: randomColor(),
                data: Object.values(data2)[0]

            },
            {
                label: Object.keys(data2)[1],
                borderColor: randomColor(),
                data: Object.values(data2)[1]

            },
            {
                label: Object.keys(data2)[2],
                borderColor: randomColor(),
                data: Object.values(data2)[2]

            },
            {
                label: Object.keys(data2)[3],
                borderColor: randomColor(),
                data: Object.values(data2)[3]

            },
            {
                label: Object.keys(data2)[4],
                borderColor: randomColor(),
                data: Object.values(data2)[4]

            },
            {
                label: Object.keys(data2)[5],
                borderColor:  randomColor(),
                data: Object.values(data2)[5]

            },
            {
                label: Object.keys(data2)[6],
                borderColor:  randomColor(),
                data: Object.values(data2)[6]

            },
            {
                label: Object.keys(data2)[7],
                borderColor: 'rgb(255, 99, 132)',
                data: Object.values(data2)[7]

            },
            {
                label: Object.keys(data2)[8],
                borderColor: randomColor(),
                data: Object.values(data2)[8]

            },
            {
                label: Object.keys(data2)[9],
                borderColor: randomColor(),
                data: Object.values(data2)[9]

            },
            {
                label: Object.keys(data2)[10],
                borderColor: randomColor(),
                data: Object.values(data2)[10]

            },
            {
                label: Object.keys(data2)[11],
                borderColor: randomColor(),
                data: Object.values(data2)[11]

            },
            {
                label: Object.keys(data2)[12],
                borderColor: randomColor(),
                data: Object.values(data2)[12]

            },
            {
                label: Object.keys(data2)[13],
                borderColor: randomColor(),
                data: Object.values(data2)[13]

            },
            {
                label: Object.keys(data2)[14],
                borderColor: randomColor(),
                data: Object.values(data2)[14]

            },
            {
                label: Object.keys(data2)[15],
                borderColor: randomColor(),
                data: Object.values(data2)[15]

            },
            {
                label: Object.keys(data2)[16],
                borderColor: randomColor(),
                data: Object.values(data2)[16]

            },
            {
                label: Object.keys(data2)[17],
                borderColor: randomColor(),
                data: Object.values(data2)[17]

            },
            {
                label: Object.keys(data2)[18],
                borderColor: randomColor(),
                data: Object.values(data2)[18]

            },
            {
                label: Object.keys(data2)[19],
                borderColor: randomColor(),
                data: Object.values(data2)[19]

            },
            {
                label: Object.keys(data2)[20],
                borderColor: randomColor(),
                data: Object.values(data2)[20]

            },
            {
                label: Object.keys(data2)[21],
                borderColor:  randomColor(),
                data: Object.values(data2)[21]

            },
            {
                label: Object.keys(data2)[22],
                borderColor:  randomColor(),
                data: Object.values(data2)[22]

            },
            {
                label: Object.keys(data2)[23],
                borderColor:  randomColor(),
                data: Object.values(data2)[23]

            },
            {
                label: Object.keys(data2)[24],
                borderColor:  randomColor(),
                data: Object.values(data2)[24]

            },
            {
                label: Object.keys(data2)[25],
                borderColor:  randomColor(),
                data: Object.values(data2)[25]

            },
            {
                label: Object.keys(data2)[26],
                borderColor:  randomColor(),
                data: Object.values(data2)[26]

            },
            {
                label: Object.keys(data2)[27],
                borderColor:  randomColor(),
                data: Object.values(data2)[27]

            },
            {
                label: Object.keys(data2)[28],
                borderColor:  randomColor(),
                data: Object.values(data2)[28]

            },
            {
                label: Object.keys(data2)[29],
                borderColor:  randomColor(),
                data: Object.values(data2)[29]

            },
            {
                label: Object.keys(data2)[30],
                borderColor:  randomColor(),
                data: Object.values(data2)[30]

            },
            {
                label: Object.keys(data2)[31],
                borderColor:  randomColor(),
                data: Object.values(data2)[31]

            },
            {
                label: Object.keys(data2)[32],
                borderColor:  randomColor(),
                data: Object.values(data2)[32]

            },
            {
                label: Object.keys(data2)[33],
                borderColor:  randomColor(),
                data: Object.values(data2)[33]

            },
            {
                label: Object.keys(data2)[34],
                borderColor:  randomColor(),
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


//Graph 3
const ctxHomicide = document.getElementById('homicide').getContext('2d');
const chartHomicide = new Chart(ctxHomicide, {
    //The type of chart we want to create
    type: 'line',

    //The data for our dataset
    data: {
        labels: ["2007-2009", "2010-2012"],
        datasets: [{
            label: 'Data',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 10, 5, 2, 20, 30, 45]
        }]
    },

    //Configuration options go here
    options: {
        title: {
            display: true,
            text: 'Crime recorded'
        }
    }
});


//conversion tableau en json
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






//get Random color


