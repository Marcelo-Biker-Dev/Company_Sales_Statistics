import Chart from "react-apexcharts";

const ColumnChart = () => {

    const options = {
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '55%',
                endingShape: 'rounded'
            },
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
        },  
    };

    const mockData = {
        labels: {
            categories: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
        },
        series: [
            {
                name: "% Sucesso",
                data: [40, 100, 70, 50, 70]
            },
            {
                name: "Visits",
                data: [10, 2, 6, 4, 7]
            },
            {
                name: "Deals",
                data: [4, 2, 4, 2, 5]
            }
        ]
    };

    return (
        <Chart
            options={{ ...options, xaxis: mockData.labels }}
            series={mockData.series}
            type="bar"
            height="350"
        />

    );
}

export default ColumnChart;