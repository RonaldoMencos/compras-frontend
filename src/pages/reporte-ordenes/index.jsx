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

const ReporteOrdenes = () => {
  function createData(name, calories, fat, carbs) {
    return { name, calories, fat, carbs }
  }

  const rows = [
    createData('ORD-54891', 'JUAN PEREZ', 150.25, '12-02-2023'),
    createData('ORD-54892', 'MARIA RODRIGUEZ', 4352.0, '12-02-2023'),
    createData('ORD-54893', 'PEDRO MARTINEZ', 160.0, '12-02-2023'),
    createData('ORD-54894', 'JUAN PEREZ', 370.0, '12-02-2023'),
    createData('ORD-54895', 'JULIAN MARTINEZ  ', 160.0, '12-02-2023')
  ]

  return (
    <Grid container spacing={2} padding={8}>
      <Grid item xs={12} display='flex' justifyContent='center'>
        <Typography variant='h3'>Reporte Ordenes de Compra</Typography>
      </Grid>
      <Grid item xs={12} display='flex' justifyContent='center'>
        <Typography variant='h4'>(Por periodo de fechas)</Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography>Fecha Orden Compra (Desde)</Typography>
        <TextField id='fechaDesde' fullWidth type='date' variant='outlined' />
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography>Fecha Orden Compra (Hasta)</Typography>
        <TextField id='fechaHasta' fullWidth type='date' variant='outlined' />
      </Grid>
      <Grid container xs={12} justifyContent='center' direction='row'>
        <Button variant='outlined' sx={'margin:0.6rem 0.6rem'} startIcon={<SearchIcon />}>
          Buscar
        </Button>
        <Button item variant='outlined' sx={'margin:0.6rem 0.6rem'} startIcon={<ImportExportIcon />}>
          Exportar
        </Button>
      </Grid>
      <Grid item xs={12} mt={8}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label='simple table'>
            <TableHead>
              <TableRow>
                <TableCell>No. Orden Compra</TableCell>
                <TableCell align='right'>Solicitante</TableCell>
                <TableCell align='right'>Total</TableCell>
                <TableCell align='right'>Fecha Solicitud</TableCell>
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
                  <TableCell align='right'>{row.carbs}</TableCell>
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
