import * as React from 'react'
import Grid from '@mui/material/Grid'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import AddIcon from '@mui/icons-material/Add'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import EditIcon from '@mui/icons-material/Edit'
import PreviewIcon from '@mui/icons-material/Preview';
import CheckIcon from '@mui/icons-material/Check';
import PrintIcon from '@mui/icons-material/Print';

const ContraseniaPago = () => {
    function createData(name, calories, fat, carbs, date) {
        return { name, calories, fat, carbs, date }
      }
    
      const rows = [
        createData('PROV1', '6898', 'PROV1', 200.25, '25-08-2023'),
        createData('PROV2', '6902', 'PROV2', 100.36, '25-08-2023')
      ]
    
      const [cotizacion, setcotizacion] = React.useState('')
      const handleChange = event => {
        setcotizacion(event.target.value)
      }
      return (
        <Grid container spacing={3} padding={8}>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <InputLabel id='labelCotización'>Contraseña</InputLabel>
              <Select
                labelId='labelCotización'
                id='cotizaciónSelect'
                value={cotizacion}
                label='Cotización'
                onChange={handleChange}
              >
                <MenuItem value={10}>5898</MenuItem>
                <MenuItem value={20}>5899</MenuItem>
                <MenuItem value={30}>5900</MenuItem>
                <MenuItem value={30}>5901</MenuItem>
                <MenuItem value={30}>5902</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField id='monto' label='Monto' type='number' fullWidth />
          </Grid>
          <Grid container justifyContent='center' mt={2}>
        <Button variant='outlined'startIcon={<AddIcon />}>
          Agregar Contraseña
        </Button>
      </Grid>
          <Grid item xs={12}>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label='simple table'>
                <TableHead>
                  <TableRow>
                    <TableCell>Proveedor</TableCell>
                    <TableCell align='right'>No. Contraseña</TableCell>
                    <TableCell align='center'>Ver Contraseña</TableCell>
                    <TableCell align='right'>Monto Total</TableCell>
                    <TableCell align='right'>Fecha Creación</TableCell>
                    <TableCell align='center'>Imprimir</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map(row => (
                    <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                      <TableCell component='th' scope='row'>
                        {row.name}
                      </TableCell>
                      <TableCell align='right'>{row.calories}</TableCell>
                      <TableCell align='center'>
                        {' '}
                        <Button variant='outlined' startIcon={<PreviewIcon />}>
                          Ver
                        </Button>
                      </TableCell>
                      <TableCell align='right'>{row.carbs}</TableCell>
                      <TableCell align='right'>{row.date}</TableCell>
                      <TableCell align='center'>
                        {' '}
                        <Button variant='outlined' startIcon={<PrintIcon />}>
                          Imprimir
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
 
export default ContraseniaPago;