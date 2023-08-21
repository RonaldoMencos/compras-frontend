import * as React from 'react';
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import SearchIcon from '@mui/icons-material/Search'
import Button from '@mui/material/Button'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Top Proveedores',
    },
  },
};

export const options2 = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Top Solicitantes',
    },
  },
};

let labels = ['Prov1', 'Prov2', 'Prov3', 'Prov4', 'Prov5'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Productos',
      data: labels.map(() => Math.floor(Math.random() * (300 - 100) ) + 100),
      backgroundColor: 'rgba(255, 99, 172, 0.5)',
    },
  ],
};

labels = ['Sol1', 'Sol2', 'Sol3', 'Sol4', 'Sol5'];
export const data2 = {
  labels,
  datasets: [
    {
      label: 'Solicitudes',
      data: labels.map(() => Math.floor(Math.random() * (50 - 30) ) + 30),
      backgroundColor: 'rgba(104, 56, 236, 0.5)',
    },
  ],
};


const ReporteGeneral = () => {
  return (
    <Grid container spacing={2} padding={8}>
      <Grid item xs={12} md={6}>
        <Typography>Fecha (Desde)</Typography>
        <TextField id='fechaDesde' fullWidth type='date' variant='outlined' />
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography>Fecha (Hasta)</Typography>
        <TextField id='fechaHasta' fullWidth type='date' variant='outlined' />
      </Grid>
      <Grid container xs={12} justifyContent='center' direction='row' mt={4}>
        <Button variant='outlined' startIcon={<SearchIcon />}>
          Buscar
        </Button>
      </Grid>
      <Grid item xs={12} md={6}>
      <Bar options={options} data={data} />
      </Grid>
      <Grid item xs={12} md={6}>
      <Bar options={options2} data={data2} />
      </Grid>
    </Grid>
  )
}

export default ReporteGeneral
