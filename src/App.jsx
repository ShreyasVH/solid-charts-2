import BarChart from './components/BarChart/index';
import DoughnutChart from './components/DoughnutChart/index';
import { Show } from "solid-js";

function App() {
    let type = 'bar';
    const params = new URLSearchParams(window.location.search);
    if (params.has('type')) {
        type = params.get('type');
    }
  return (
    <>
        <div style="margin-bottom: 30px">
            <a href="?type=bar">Bar Chart</a>
            &nbsp;&nbsp;
            <a href="?type=doughnut">Doughnut Chart</a>
        </div>
        <Show when={type === 'bar'}>
            <BarChart />
        </Show>

        <Show when={type === 'doughnut'}>
            <DoughnutChart />
        </Show>
    </>
  )
}

export default App
