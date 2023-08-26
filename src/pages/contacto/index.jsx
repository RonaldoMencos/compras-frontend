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


const Contacto = () => {
    function createData(name, calories, fat, carbs,date) {
        return { name, calories, fat, carbs,date }
      }
    

   
        const rows = [
          createData('68984','7886', 'PROV1', 200.25, '25-08-2023'),
          createData('68995','7887', 'PROV2', 502.0, '25-08-2023'),
          createData('69003','7888', 'PROV3', 100.0, '25-08-2023'),
        ]
        const [codigo, setcodigo] = React.useState('')
        const [proveedor, setproveedor] = React.useState('')
      
        const handleChange = event => {
          setcodigo(event.target.value)
        }
      
        const handleChangeProveedor = event => {
          setproveedor(event.target.value)
        }
      
        return (
          <Grid container spacing={3} padding={8}>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth>
                <InputLabel id='labelcodigo'>Código</InputLabel>
                <Select
                  labelId='labelcodigo'
                  id='codigoSelect'
                  value={codigo}
                  label='codigo'
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
            
            <Grid container justifyContent='center' mt={2}>
              <Button variant='outlined' startIcon={<AddIcon />}>
                Agregar Contacto
              </Button>
            </Grid>
            <Grid item xs={12}>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label='simple table'>
                  <TableHead>
                    <TableRow>
                      <TableCell>No. Nit</TableCell>
                      <TableCell align='right'>No. codigo</TableCell>
                      <TableCell align='right'>Proveedor</TableCell>
                      <TableCell align='center'>Contactos</TableCell>
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
 
export default Contacto;