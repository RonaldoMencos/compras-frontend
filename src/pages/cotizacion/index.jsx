import * as React from 'react'
import Grid from '@mui/material/Grid'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import TextField from '@mui/material/TextField'
import { Typography } from '@mui/material'
import Button from '@mui/material/Button'
import AddIcon from '@mui/icons-material/Add'
import PreviewIcon from '@mui/icons-material/Preview';
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import EditIcon from '@mui/icons-material/Edit';

const Cotizacion = () => {
  function createData(name, calories, fat, carbs,date) {
    return { name, calories, fat, carbs,date }
  }

  const rows = [
    createData('5898','4886', 'PROV1', 150.25, '12-02-2023'),
    createData('5899','4886', 'PROV2', 4352.0, '12-02-2023'),
    createData('5900','4886', 'PROV3', 160.0, '12-02-2023'),
    createData('5901','4887', 'PROV1', 370.0, '12-02-2023'),
    createData('5902','4887', 'PROV2', 160.0, '12-02-2023')
  ]
  const [solicitud, setsolicitud] = React.useState('')
  const [proveedor, setproveedor] = React.useState('')

  const handleChange = event => {
    setsolicitud(event.target.value)
  }

  const handleChangeProveedor = event => {
    setproveedor(event.target.value)
  }

  return (
    <Grid container spacing={3} padding={8}>
      <Grid item xs={12} md={6}>
        <FormControl fullWidth>
          <InputLabel id='labelSolicitud'>Solicitud</InputLabel>
          <Select
            labelId='labelSolicitud'
            id='solicitudSelect'
            value={solicitud}
            label='Solicitud'
            onChange={handleChange}
          >
            <MenuItem value={10}>4886</MenuItem>
            <MenuItem value={20}>4887</MenuItem>
            <MenuItem value={30}>4888</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} md={6}>
        <FormControl fullWidth>
          <InputLabel id='labelProveedor'>Proveedor</InputLabel>
          <Select
            labelId='labelProveedor'
            id='proveedorSelect'
            value={proveedor}
            label='Proveedor'
            onChange={handleChangeProveedor}
          >
            <MenuItem value={10}>PROV1</MenuItem>
            <MenuItem value={20}>PROV2</MenuItem>
            <MenuItem value={30}>PROV3</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography>Adjunto Cotización</Typography>
        <TextField id='adjunto' label='' variant='outlined' type='file' fullWidth />
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography>Observaciones</Typography>
        <TextField id='observaciones' label='' fullWidth />
      </Grid>
      <Grid container justifyContent='center' mt={2}>
        <Button variant='outlined' startIcon={<AddIcon />}>
          Agregar
        </Button>
      </Grid>
      <Grid item xs={12}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label='simple table'>
            <TableHead>
              <TableRow>
                <TableCell>No. Cotización</TableCell>
                <TableCell align='right'>No. Solicitud</TableCell>
                <TableCell align='right'>Proveedor</TableCell>
                <TableCell align='center'>Adjunto</TableCell>
                <TableCell align='right'>Fecha Creación</TableCell>
                <TableCell align='center'>Editar</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(row => (
                <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell component='th' scope='row'>
                    {row.name}
                  </TableCell>
                  <TableCell align='right'>{row.calories}</TableCell>
                  <TableCell align='right'>{row.fat}</TableCell>
                  <TableCell align='center'>
                    {' '}
                    <Button variant='outlined' startIcon={<PreviewIcon />}>
                      vER
                    </Button>
                  </TableCell>
                  <TableCell align='right'>{row.date}</TableCell>
                  <TableCell align='center'>
                    {' '}
                    <Button variant='outlined' startIcon={<EditIcon />}>
                      EDITAR
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  )
}

export default Cotizacion
