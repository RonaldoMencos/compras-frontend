import * as React from 'react'
import { useState, useEffect } from 'react'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import SearchIcon from '@mui/icons-material/Search'
import ImportExportIcon from '@mui/icons-material/ImportExport'
import Button from '@mui/material/Button'
import { CSVLink } from 'react-csv'

const ReporteOrdenes = () => {
  const [fechadesde, setfechadesde] = React.useState('')
  const [fechahasta, setfechahasta] = React.useState('')
  const [ordenes, setordenes] = React.useState([])
  const [headers, setheaders] = useState([
    { label: 'NO. ORDEN COMPRA', key: 'id' },
    { label: 'SOLICITANTE', key: 'solicitante' },
    { label: 'TOTAL', key: 'total' },
    { label: 'FECHA COMPRA', key: 'fecha_creacion' },
    { label: 'ESTADO', key: 'estado' }
  ])
  let datsod = []
  const [datos, setdatos] = useState([])

  const getOrdenes = async () => {
    let url = 'http://localhost:1337/api/orden-compras?populate=deep'

    if (fechadesde!=null && fechadesde!== '') {
      url = `${url}&filters[fecha_creacion][$gte]=${fechadesde}`;
    }

    if (fechahasta!=null && fechahasta!== '') {
      url = `${url}&filters[fecha_creacion][$lte]=${fechahasta}`;
    }
    const respuesta = await fetch(url)
    const resultado = await respuesta.json()
    const datos = resultado.data
    setordenes(datos)

    let daa = {}
    datsod = []
    datos.forEach(element => {
      daa = {
        id: element.id,
        solicitante:
          element.attributes.cotizacion_compra.data.attributes.solicitud_compra.data.attributes.solicitante.data
            .attributes.nombres +
          ' ' +
          element.attributes.cotizacion_compra.data.attributes.solicitud_compra.data.attributes.solicitante.data
            .attributes.apellidos,
        total: element.attributes.cotizacion_compra.data.attributes.total,
        fecha_creacion: element.attributes.fecha_creacion,
        estado: element.attributes.orden_compra_estado.data.attributes.nombre
      }
      datsod.push(daa)
    })
    setdatos(datsod)
  }

  useEffect(() => {
    getOrdenes()
  }, [])

  return (
    <Grid container spacing={4} padding={8}>
      <Grid item xs={12} display='flex' justifyContent='center'>
        <Typography variant='h3'>Reporte Ordenes de Compra</Typography>
      </Grid>
      <Grid item xs={12} display='flex' justifyContent='center'>
        <Typography variant='h4'>(Por periodo de fechas)</Typography>
      </Grid>
      <Grid item xs={12} md={3}>
        <Typography>Fecha Orden Compra (Desde)</Typography>
        <TextField
          id='fechaDesde'
          fullWidth
          type='date'
          variant='outlined'
          value={fechadesde}
          onChange={e => setfechadesde(e.target.value)}
        />
      </Grid>
      <Grid item xs={12} md={3}>
        <Typography>Fecha Orden Compra (Hasta)</Typography>
        <TextField id='fechaHasta' fullWidth type='date' variant='outlined' value={fechahasta} onChange={(e) => setfechahasta(e.target.value)}/>
      </Grid>
      <Grid container justifyContent='center' direction='row' gap={4} mt={3}>
        <Button variant='outlined' startIcon={<SearchIcon />} onClick={getOrdenes}>
          Buscar
        </Button>
        <Button variant='outlined' startIcon={<ImportExportIcon />}>
          <CSVLink style={{ textDecoration: 'none', color: '#9155FD' }} data={datos} headers={headers}>
            Exportar
          </CSVLink>
        </Button>
      </Grid>
      <Grid item xs={12} mt={8}>
        <TableContainer component={Paper}>
          <Table aria-label='simple table'>
            <TableHead>
              <TableRow>
                <TableCell>No. Orden Compra</TableCell>
                <TableCell align='right'>Solicitante</TableCell>
                <TableCell align='right'>Total</TableCell>
                <TableCell align='right'>Fecha Compra</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {ordenes.map(row => (
                <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell component='th' scope='row'>
                    {row.id}
                  </TableCell>
                  <TableCell align='right'>
                    {row.attributes.cotizacion_compra.data.attributes.solicitud_compra.data.attributes.solicitante.data
                      .attributes.nombres +
                      ' ' +
                      row.attributes.cotizacion_compra.data.attributes.solicitud_compra.data.attributes.solicitante.data
                        .attributes.apellidos}
                  </TableCell>
                  <TableCell align='right'>{row.attributes.cotizacion_compra.data.attributes.total}</TableCell>
                  <TableCell align='right'>{row.attributes.fecha_creacion}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  )
}

export default ReporteOrdenes
