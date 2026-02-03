import { Bar } from 'solid-chartjs'
import "chart.js/auto";

const BarChart = () => {
    const chartData = {
        labels: [ 'January', 'February', 'March' ],
        datasets: [
            {
                label: 'My Bar Chart',
                data: [40, 20, 12],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgb(255, 99, 132)',
                borderWidth: 1
            }
        ]
    }
    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
    }

    return (
        <div>
            <Bar data={chartData} options={chartOptions} width={400} height={400} />
        </div>
    )
}

export default BarChart;