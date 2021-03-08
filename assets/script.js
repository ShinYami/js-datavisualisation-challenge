const source = 'https://canvasjs.com/services/data/datapoints.php';


function callApi(source) {
    fetch(source).then(res => res.json()).
    then((res) => {
        let newArr =  [];
        res.forEach(e => {
            newArr.push(e[1]);
        });
        console.log(newArr);
        return newArr;
    })
}

let newData = callApi(source );



const ctx = document.getElementById('crimeStatistic').getContext('2d');
const chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset

    data: {
        labels: ['2014', '2015', '2016', '2017', '2018', '2019', '2020'],
        datasets: [{
            label: 'Data',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 10, 5, 2, 20, 30, 45]
            
        }]
    },
    

    // Configuration options go here
    options: {}
});
 /*setInterval(() => {
     chart.data.data = callApi(source );
     
 }, 5000);*/
