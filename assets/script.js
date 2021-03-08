let graphOne = () => {

let ctx = document.getElementById("crimeStatistic").getContext("2d");
let dataPoints = [];
let label =[1,2,3,4,5,6,7,8,9]
let i=9;
let chart1 = new Chart(ctx,{
    type: 'line',
    data : {
        labels : label,
        datasets: [{
            label : ["Crime Statistics"],
            borderColor : "red",
            data : dataPoints,
        }]
    }
})
// Update and ajax
function updateGraf() {
    i++;
    label.push(i);
        fetch('https://canvasjs.com/services/data/datapoints.php')
        .then(function (response){
        return response.json()
    })
        .then(function (data){
        dataPoints.length + 1;
        data.forEach(element => dataPoints.push(parseInt(element[1])));
        chart1.update();
    })
    };
        setInterval(updateGraf,1000);
}

graphOne();

//Graph 2
const ctxCrime = document.getElementById('crime').getContext('2d');
const chartCrime = new Chart(ctxCrime, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ["2002", "2012"],
        datasets: [{
            label: 'Data',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 10, 5, 2, 20, 30, 45]
        }]
    },

    // Configuration options go here
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
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ["2007-2009", "2010-2012"],
        datasets: [{
            label: 'Data',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 10, 5, 2, 20, 30, 45]
        }]
    },

    // Configuration options go here
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

let table1 = document.getElementById("table1");
table = tableToJson(table1);

let table2 = document.getElementById("table2");
table2 = tableToJson(table2);

//console.log(table);
//console.log(table2);

//get Random color
let randomColor = () => {
	let red = Math.floor(Math.random() * 256);
	let green = Math.floor(Math.random() * 256);
	let blue = Math.floor(Math.random() * 256);
	let color = 'rgb(' + red + ',' + green + ',' + blue + ')';
	return color;
}

