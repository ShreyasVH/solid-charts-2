import { Doughnut } from 'solid-chartjs'
import {
    Chart as ChartJS,
    ArcElement,
    CategoryScale,
    LinearScale,
    Title,
    Tooltip,
    Legend,
} from "chart.js";

ChartJS.register(ArcElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const DoughnutChart = () => {
    const chartData = {
        labels: [ 'January', 'February', 'March' ],
        datasets: [
            {
                label: 'My Doughnut Chart',
                data: [40, 20, 12],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                ],
                borderWidth: 1
            }
        ]
    }
    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
    }

    return (
        <div style={{width: '400px', height: '400px'}}>
            <Doughnut data={chartData} options={chartOptions} width={400} height={400} />
        </div>
    )
};

export default DoughnutChart;