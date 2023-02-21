import { Grid } from '@mui/material';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  PointElement,
} from 'chart.js';
import { Bar, Bubble, Doughnut } from 'react-chartjs-2';
import { data as doughnutData } from './fixtures/doughnut';
import { data as barData, options as barOptions } from './fixtures/bar';
import {
  data as bubbleData,
  options as bubbleOptions,
} from './fixtures/bubble';

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);
function Dashoard() {
  return (
    <Grid
      container
      data-testid='dashboard'
      height='60vh'
      justifyContent='space-evenly'
    >
      <Grid item sm={3} alignSelf='center'>
        <Doughnut data={doughnutData} />
      </Grid>
      <Grid item sm={3} alignSelf='center'>
        <Bar options={barOptions} data={barData} />;
      </Grid>
      <Grid item sm={3} alignSelf='center'>
        <Bubble options={bubbleOptions} data={bubbleData} />
      </Grid>
    </Grid>
  );
}

export default Dashoard;
