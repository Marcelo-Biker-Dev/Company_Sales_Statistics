import Chart from "react-apexcharts";

const PieChart = () => {

    const mockData = {
        series: [477138, 499928, 444867, 220426, 473088],
        labels: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
    }

    const options = {
        plotOptions: {
            pie: {
                startAngle: -90,
                endAngle: 270
            }
        },
        dataLabels: {
            enabled: false
        },
        fill: {
            type: 'gradient',
        },
        legend: {
            show: true
        }
    }


    return (
        <Chart
            options={{ ...options, labels: mockData.labels}}
            series={mockData.series}
            type="donut"
            height="270"
        />

    );
}

export default PieChart;