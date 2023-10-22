import * as React from 'react'
import { useState, useEffect } from 'react'
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


const ReporteGeneral = () => {
  const [fechadesde, setfechadesde] = React.useState('')
  const [fechahasta, setfechahasta] = React.useState('')
  const [ordenes, setordenes] = React.useState([])
  let labels = []

  const [chartData, setChartData] = React.useState({
    labels,
    datasets: [
      {
        label: 'Ordenes Compra',
        data: labels.map(() => Math.floor(Math.random() * (50 - 30)) + 30),
        backgroundColor: 'rgba(116, 72, 236, 0.5)'
      }
    ]
  })

  const [chartData2, setChartData2] = React.useState({
    labels,
    datasets: [
      {
        label: 'Ordenes Compra',
        data: labels.map(() => Math.floor(Math.random() * (50 - 30)) + 30),
        backgroundColor: 'rgba(116, 72, 236, 0.5)'
      }
    ]
  })

  const [chartData3, setChartData3] = React.useState({
    labels,
    datasets: [
      {
        label: 'Ordenes Compra',
        data: labels.map(() => Math.floor(Math.random() * (50 - 30)) + 30),
        backgroundColor: 'rgba(25, 3, 224, 0.5)'
      }
    ]
  })

  const getOrdenes = async () => {
    let url = 'http://localhost:1337/api/orden-compras?populate=deep'

    if (fechadesde != null && fechadesde !== '') {
      url = `${url}&filters[fecha_creacion][$gte]=${fechadesde}`
    }

    if (fechahasta != null && fechahasta !== '') {
      url = `${url}&filters[fecha_creacion][$lte]=${fechahasta}`
    }
    const respuesta = await fetch(url)
    const resultado = await respuesta.json()
    const datos = await resultado.data
    setordenes(datos)

    let counts = {}
    datos.forEach(function (x) {
      counts[x.attributes.cotizacion_compra.data.attributes.proveedor.data.attributes.nombre_fiscal] =
        (counts[x.attributes.cotizacion_compra.data.attributes.proveedor.data.attributes.nombre_fiscal] || 0) + 1
    })
    let data = Object.entries(counts).reverse().splice(0, 4)
    counts = Object.fromEntries(data)

    labels = Object.keys(counts)
    setChartData({
      labels,
      datasets: [
        {
          label: 'Ordenes Compra',
          data: counts,
          backgroundColor: 'rgba(255, 99, 172, 0.5)'
        }
      ]
    })


    let counts2 = {}
    datos.forEach(function (x) {
      counts2[x.attributes.cotizacion_compra.data.attributes.solicitud_compra.data.attributes.solicitante.data.attributes.nombres] =
        (counts2[x.attributes.cotizacion_compra.data.attributes.solicitud_compra.data.attributes.solicitante.data.attributes.nombres] || 0) + 1
    })
    let data2 = Object.entries(counts2).reverse().splice(0, 4)
    counts2 = Object.fromEntries(data2)

    labels = Object.keys(counts2)
    setChartData2({
      labels,
      datasets: [
        {
          label: 'Ordenes Compra',
          data: counts2,
          backgroundColor: 'rgba(116, 72, 236, 0.5)'
        }
      ]
    })



    let counts3 = {}
    const respuesta2 = await fetch(`http://localhost:1337/api/solicitud-compra-detalles?populate=deep`)
    const resultado2 = await respuesta2.json()
    const datos2 = await resultado2.data
    datos2.forEach(function (x) {
      counts3[x.attributes.producto.data.attributes.nombre] =
        (counts3[x.attributes.producto.data.attributes.nombre] || 0) + 1
    })
    let data3 = Object.entries(counts3).reverse().splice(0, 4)
    counts3 = Object.fromEntries(data3)

    labels = Object.keys(counts3)
    setChartData3({
      labels,
      datasets: [
        {
          label: 'Ordenes Compra',
          data: counts3,
          backgroundColor: 'rgba(25, 3, 224, 0.5)'
        }
      ]
    })
  }
  useEffect(() => {
    getOrdenes()
  }, [])

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
          <Bar options={options} data={chartData} />
        </Grid>
      </Grid>
      <Grid item xs={12} display='flex' justifyContent='center' mb={4}>
        <Grid item xs={12} md={8}>
          <Typography variant='h3'>Top Solicitantes</Typography>
          <Bar options={options2} data={chartData2} />
        </Grid>
      </Grid>
      <Grid item xs={12} display='flex' justifyContent='center' mb={4}>
        <Grid item xs={12} md={8}>
          <Typography variant='h3'>Top Productos</Typography>
          <Bar options={options3} data={chartData3} />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default ReporteGeneral
