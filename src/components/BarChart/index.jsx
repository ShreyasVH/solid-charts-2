import { Bar } from 'solid-chartjs'
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Title,
    Tooltip,
    Legend,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

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
        maintainAspectRatio: false
    }

    return (
        <div style={{width: '400px', height: '400px'}}>
            <Bar data={chartData} options={chartOptions} width={400} height={400} />
        </div>
    );
};

export default BarChart;