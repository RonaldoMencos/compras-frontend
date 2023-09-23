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
import DeleteIcon from '@mui/icons-material/Delete'
import PreviewIcon from '@mui/icons-material/Preview';

const Solicitud = () => {
    function createData(name, calories, fat, carbs, date) {
        return { name, calories, fat, carbs, date }
      }
    
      const rows = [
        createData('Martillo', '5'),
        createData('Desarmador', '15'),
        createData('Monitores', '2'),
        createData('Pegamento (botellas)', '20')
      ]
    
      const [cotizacion, setcotizacion] = React.useState('')
      const handleChange = event => {
        setcotizacion(event.target.value)
      }
      return (
          <Grid container spacing={3} padding={8}>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth>
                <InputLabel id='labelCotización'>Buscar Productos</InputLabel>
                <Select
                  labelId='labelCotización'
                  id='cotizaciónSelect'
                  value={cotizacion}
                  label='Cotización'
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Martillo</MenuItem>
                  <MenuItem value={20}>Desarmadores</MenuItem>
                  <MenuItem value={30}>Monitores</MenuItem>
                  <MenuItem value={30}>Tornillos</MenuItem>
                  <MenuItem value={30}>Pegamento</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label='simple table'>
                  <TableHead>
                    <TableRow>
                      <TableCell>Productos a solicitar</TableCell>
                      <TableCell align='right'>Cantidad de Productos</TableCell>
                      <TableCell align='center'></TableCell>
                      <TableCell align='center'> </TableCell>
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
                        </TableCell>
                        <TableCell align='right'>{row.carbs}</TableCell>
                        <TableCell align='right'>{row.date}</TableCell>
                        <TableCell align='center'>
                          {' '}
                          <Button variant="contained" color="success">
                          Agregar
                          </Button>
                          <Button variant="outlined" startIcon={<DeleteIcon />}>
                          Eliminar
                        </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                    <grid>
                    <Button variant="contained">Detalle</Button>
                    </grid>
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </Grid>
        )
   
                    }
 
export default Solicitud;