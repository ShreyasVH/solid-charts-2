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

const DoughnutChart = (props) => {
    const chartData = props.data;
    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
    }

    return (
        <div style={{width: '400px', height: '400px', display: 'inline-block'}}>
            <Doughnut data={chartData} options={chartOptions} width={400} height={400} />
        </div>
    )
};

export default DoughnutChart;