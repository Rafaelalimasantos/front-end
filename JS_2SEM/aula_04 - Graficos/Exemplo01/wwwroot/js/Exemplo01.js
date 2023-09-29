//dados para o grafico
var data = {
    //rotulos do grafico
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],

    //propriedades do grafico

    datasets: [{
        label: 'Vendas 2023',
        borderWidth: 1,
        data: [12, 19, 3, 5, 2, 5]
    },
    {
        label: 'Vendas 2022',
        borderWidth: 1,
        data: [3, 6, 20, 5, 14, 8],
    },
    {
        label: 'Vendas 2021',
        borderWidth: 1,
        data: [8, 7, 15, 20, 10, 9],
    },
    {
        label: 'Vendas 2020',
        borderWidth: 1,
        data: [3, 15, 25, 4, 12, 6],
    },
    {
        label: 'Vendas 2019',
        borderWidth: 1,
        data: [1, 5, 10, 5, 25, 8],
    }
]
};

//configurações do grafico
var options = {
    scales: {
        y: {
            beginAtZero: true
        }
    }
};

//criar o grafico de barras
var ctx = document.querySelector('#grafico').getContext('2d');
var barChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: options
});


