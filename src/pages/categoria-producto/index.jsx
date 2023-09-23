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

const CategoriaProducto = () => {
    function createData(name, calories, fat, carbs,date) {
        return { name, calories, fat, carbs,date }
      }
    

   
        const rows = [
          createData('Taladro de percusión', 'FERRE123', 'Taladro eléctrico de percusión de 800W con juego de brocas', 89.99, '20 unidades'), ( '20-07-2023', 'INV2023-4567', 'Disponible', 'Pasillo 3, Estantería B-5', '5 unidades', '5 días hábiles', 'Medio'),
          createData('68995','7887', 'MANGUERAS', 42.0, '25-08-2023'),
          createData('69003','7888', 'LAMINAS', 100.0, '25-08-2023'),
          createData('69013','7889', 'LAMPARAS', 470.0, '25-08-2023'),
          createData('69027','7890', 'MADERA', 360.0, '25-08-2023')
        ]
        const [codigo, setcodigo] = React.useState('')
        const [categoria, setcategoria] = React.useState('')
      
        const handleChange = event => {
          setcodigo(event.target.value)
        }
      
        const handleChangeCategoria = event => {
          setcategoria(event.target.value)
        }
      
        return (
          <Grid container spacing={3} padding={8}>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth>
                <InputLabel id='labelcodigo'>Proveedor</InputLabel>
                <Select
                  labelId='labelcodigo'
                  id='codigoSelect'
                  value={codigo}
                  label='codigo'
                  onChange={handleChange}
                >
                  <MenuItem value={10}>IDF S.A.</MenuItem>
                  <MenuItem value={20}>SOLPRO S.A.</MenuItem>
                  <MenuItem value={30}>INMACO S.A.</MenuItem>
                  <MenuItem value={30}>ARMAGUA</MenuItem>
                  <MenuItem value={30}>Cementos Progreso</MenuItem>
                  <MenuItem value={30}>Infymsa</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth>
                <InputLabel id='labelCategoria'>Categoría del Producto</InputLabel>
                <Select
                  labelId='labelCategoria'
                  id='categoriaSelect'
                  value={categoria}
                  label='Categoria'
                  onChange={handleChangeCategoria}
                >
                  <MenuItem value={10}>Pinturas</MenuItem>
                  <MenuItem value={10}>Tuberías PVC</MenuItem>
                  <MenuItem value={10}>Iluminación</MenuItem>
                  <MenuItem value={10}>Material eléctrico</MenuItem>
                  <MenuItem value={10}>Herramientas eléctricas</MenuItem>
                  <MenuItem value={10}>Adhesivos</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            
            <Grid container justifyContent='center' mt={2}>
              <Button variant='outlined' startIcon={<AddIcon />}>
                Agregar Provedor</Button>
                <Button variant='outlined' startIcon={<AddIcon />}>
                Agregar Categoría del Producto</Button>
            </Grid>
            <Grid item xs={12}>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label='simple table'>
                  <TableHead>
                    <TableRow>
                      <TableCell align='center'>Nombre del Producto</TableCell>
                      <TableCell align='center'>Código de Producto</TableCell>
                      <TableCell align='center'>Descripción del Producto</TableCell>
                      <TableCell align='center'>Precio Unitario</TableCell>
                      <TableCell align='center'>Cantidad Comprada</TableCell>
                      <TableCell align='center'>Fecha de Compra</TableCell>
                      <TableCell align='center'>Número de Factura u Orden de Compra</TableCell>
                      <TableCell align='center'>Estado del Producto</TableCell>
                      <TableCell align='center'>Ubicación de Almacenamiento</TableCell>
                      <TableCell align='center'>Nivel de Inventario Mínimo</TableCell>
                      <TableCell align='center'>Plazo de Entrega del Proveedor</TableCell>
                      <TableCell align='center'>Nivel de Demanda</TableCell>
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
                          {''}

                        </TableCell>
                        <TableCell align='right'>{row.date}</TableCell>
                        <TableCell align='center'>
                          {' '}

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
 
export default CategoriaProducto;