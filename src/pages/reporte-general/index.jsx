import * as React from 'react'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import SearchIcon from '@mui/icons-material/Search'
import Button from '@mui/material/Button'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top'
    }
  }
}

export const options2 = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top'
    }
  }
}

export const options3 = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top'
    }
  }
}

let labels = ['Prov1', 'Prov2', 'Prov3', 'Prov4', 'Prov5']

export const data = {
  labels,
  datasets: [
    {
      label: 'Ordenes Compra',
      data: labels.map(() => Math.floor(Math.random() * (300 - 100)) + 100),
      backgroundColor: 'rgba(255, 99, 172, 0.5)'
    }
  ]
}

labels = ['Sol1', 'Sol2', 'Sol3', 'Sol4', 'Sol5']
export const data2 = {
  labels,
  datasets: [
    {
      label: 'Ordenes Compra',
      data: labels.map(() => Math.floor(Math.random() * (50 - 30)) + 30),
      backgroundColor: 'rgba(116, 72, 236, 0.5)'
    }
  ]
}

labels = ['Prod1', 'Prod2', 'Prod3', 'Prod4', 'Prod5']
export const data3 = {
  labels,
  datasets: [
    {
      label: 'Ordenes Compra',
      data: labels.map(() => Math.floor(Math.random() * (50 - 30)) + 30),
      backgroundColor: 'rgba(25, 3, 224, 0.5)'
    }
  ]
}

const ReporteGeneral = () => {
  return (
    <Grid container spacing={4} padding={8}>
      <Grid item xs={12} display='flex' justifyContent='center'>
        <Typography variant='h3'>Reportes Generales Compras</Typography>
      </Grid>
      <Grid item xs={12} display='flex' justifyContent='center'>
        <Typography variant='h4'>(Por periodo de fechas)</Typography>
      </Grid>
      <Grid item xs={12} md={3}>
        <Typography>Fecha (Desde)</Typography>
        <TextField id='fechaDesde' fullWidth type='date' variant='outlined' />
      </Grid>
      <Grid item xs={12} md={3}>
        <Typography>Fecha (Hasta)</Typography>
        <TextField id='fechaHasta' fullWidth type='date' variant='outlined' />
      </Grid>
      <Grid container justifyContent='center' direction='row' mt={4}>
        <Button variant='outlined' startIcon={<SearchIcon />}>
          Buscar
        </Button>
      </Grid>
      <Grid item xs={12} display='flex' justifyContent='center' mb={5}>
        <Grid item xs={12} md={8}>
          <Typography variant='h3'>Top Proveedores</Typography>
          <Bar options={options} data={data} />
        </Grid>
      </Grid>
      <Grid item xs={12} display='flex' justifyContent='center'  mb={4}>
        <Grid item xs={12} md={8}>
          <Typography variant='h3'>Top Solicitantes</Typography>
          <Bar options={options2} data={data2} />
        </Grid>
      </Grid>
      <Grid item xs={12} display='flex' justifyContent='center' mb={4}>
        <Grid item xs={12} md={8}>
        <Typography variant='h3'>Top Productos</Typography>
          <Bar options={options3} data={data3} />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default ReporteGeneral
