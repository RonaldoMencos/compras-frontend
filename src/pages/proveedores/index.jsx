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


const Proveedores = () => {

    function createData(name, calories, fat, carbs, date) {
        return { name, calories, fat, carbs, date }
      }
    
      const rows = [
        createData('FERRETOTAL S.A', '14', 'PROV1'),
        createData('TODO HERRAMIENTAS GT', '12', 'PROV2')
      ]
    
      const [cotizacion, setcotizacion] = React.useState('')
      const handleChange = event => {
        setcotizacion(event.target.value)
      }
      return (
          <Grid container spacing={3} padding={8}>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth>
                <InputLabel id='labelCotización'>Buscar Proveedor</InputLabel>
                <Select
                  labelId='labelCotización'
                  id='cotizaciónSelect'
                  value={cotizacion}
                  label='Cotización'
                  onChange={handleChange}
                >
                  <MenuItem value={10}>FERRETOTAL S.A</MenuItem>
                  <MenuItem value={20}>TODO HERRAMIENTAS GT</MenuItem>
                  <MenuItem value={30}>MR. HERRAMIENTAS</MenuItem>
                  <MenuItem value={30}>HERRAMIENTAS DE GUATEMALA S.A</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid container justifyContent='left' mt={2}>
              <Button variant='outlined'startIcon={<AddIcon />}>
                Agregar Proveedor
              </Button>
              <Button variant='outlined'startIcon={<AddIcon />}>
                Eliminar Proveedor
              </Button>


            </Grid>
            <Grid item xs={12}>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label='simple table'>
                  <TableHead>
                    <TableRow>
                      <TableCell>Nombre Proveedores</TableCell>
                      <TableCell align='right'>Total de compras</TableCell>
                      <TableCell align='center'>Ver Proveedor</TableCell>
                      <TableCell align='center'> </TableCell>
                      <TableCell align='left'> </TableCell>
                      <TableCell align='left'>Modificar</TableCell>
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
 
export default Proveedores