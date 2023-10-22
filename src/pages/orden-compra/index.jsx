import * as React from 'react'
import { useState, useEffect } from 'react'
import Grid from '@mui/material/Grid'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import AddIcon from '@mui/icons-material/Add'
import DeleteIcon from '@mui/icons-material/Delete';
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import EditIcon from '@mui/icons-material/Edit'
import PreviewIcon from '@mui/icons-material/Preview'
import Typography from '@mui/material/Typography'
import Snackbar from '@mui/material/Snackbar'
import IconButton from '@mui/material/IconButton'
import MuiAlert from '@mui/material/Alert'

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />
})

const OrdenCompra = () => {
  const [message, setmessage] = useState('')
  const [openerror, setopenerror] = useState(false)
  const [erroractivo, seterroractivo] = useState(false)
  const [openmessage, setopenmessage] = useState(false)
  const [cotizaciones, setcotizaciones] = React.useState([])
  const [ordenes, setordenes] = React.useState([])
  const [orden, setorden] = React.useState({
    fecha_creacion: '',
    monto: '',
    cotizacion_compra: '',
    id: null
  })

  const getCotizaciones = async () => {
    const url = 'http://localhost:1337/api/cotizacion-compras?populate=deep'
    const respuesta = await fetch(url)
    const resultado = await respuesta.json()
    const datos = resultado.data
    setcotizaciones(datos)
  }

  const getOrdenes = async () => {
    const url = 'http://localhost:1337/api/orden-compras?populate=deep'
    const respuesta = await fetch(url)
    const resultado = await respuesta.json()
    const datos = resultado.data
    setordenes(datos)
  }

  useEffect(() => {
    getOrdenes()
    getCotizaciones()
  }, [])

  const handleSubmit = async e => {
    e.preventDefault()
    const { cotizacion_compra, monto } = orden
    if ([cotizacion_compra, monto].includes('')) {
      setopenerror(true)
      seterroractivo(true)
      setmessage('Debe de completar todos los campos requeridos.')
      return
    }

    setopenerror(false)
    seterroractivo(false)
    sendPost()
    setopenmessage(true)
    setmessage('Se ha guardado con éxito!.')
  }

  const sendPost = async () => {
    const nuevo = {
      data: {
        fecha_creacion: new Date(),
        monto: orden.monto,
        cotizacion_compra: orden.cotizacion_compra,
        orden_compra_estado: 3
      }
    }

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(nuevo)
    }

    const data = cotizaciones.filter((x) => x.id === orden.cotizacion_compra )
    const url = `http://localhost:1337/api/orden-compras?populate=deep&filters[cotizacion_compra][solicitud_compra][id][$eq]=${data[0].attributes.solicitud_compra.data.id}`
    const respuesta = await fetch(url)
    const resultado = await respuesta.json()
    const datos = resultado.data

    if (datos!==null && datos.length > 0) {
      setopenerror(true)
      setopenmessage(false)
      seterroractivo(true)
      setmessage('Ya se ha creado una orden de compra, de esta cotizacion y/o solicitud.')
      return;
    }

    await fetch('http://localhost:1337/api/orden-compras', requestOptions).then(response => response.json())
    getOrdenes()
    limpiar()
  }

  const handleChange = e => {
    const { name, value } = e.target
    if (name === "monto") {
      if (value<=0) {
        value = '';
      }

      setorden({
        ...orden,
        [name]: value
      })
    }
    
    if (name === "cotizacion_compra") {
      const buscarCotizacion = async () => {
        const url = `http://localhost:1337/api/cotizacion-compras/${value}?populate=deep`
        const respuesta = await fetch(url)
        const resultado = await respuesta.json()
        const datos = resultado.data
        setorden({
          ...orden,
          monto: datos.attributes.total,
          [name]: value
        })
      }
      buscarCotizacion()
    }


  }

  const closeError = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    setopenerror(false)
  }

  const closeMessage = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    setopenmessage(false)
  }

  const limpiar = () => {
    setorden({
      fecha_creacion: '',
      monto: '',
      cotizacion_compra: '',
      id: null
    })
  }

  const cargarDatos = async id => {
    const url = `http://localhost:1337/api/orden-compras/${id}?populate=deep`
    const respuesta = await fetch(url)
    const resultado = await respuesta.json()
    const datos = resultado.data
    const datosJson = {
      id: datos.id,
      fecha_creacion: datos.attributes.fecha_creacion,
      cotizacion_compra: datos.attributes.cotizacion_compra.data.id,
      monto: datos.attributes.monto
    }
    setorden(datosJson)
  }

  const editar = async e => {
    e.preventDefault()
    const { cotizacion_compra, monto } = orden
    if ([cotizacion_compra, monto].includes('')) {
      setopenerror(true)
      seterroractivo(true)
      setmessage('Debe de completar todos los campos requeridos.')
      return
    }

    setopenerror(false)
    seterroractivo(false)
    sendPut(null)
    setopenmessage(true)
    setmessage('Se ha guardado con éxito!.')
    limpiar()
  }

  const sendPut = async () => {
    let objecto = {
      data: {
        monto: orden.monto,
        cotizacion_compra: orden.cotizacion_compra
      }
    }

    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(objecto)
    }

    await fetch(`http://localhost:1337/api/orden-compras/${orden.id}`, requestOptions).then(response => response.json())
    getOrdenes()
  }

  return (
    <Grid container spacing={4} padding={8}>
      <Snackbar
        open={openerror}
        autoHideDuration={6000}
        onClose={closeError}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert onClose={closeError} severity='error' sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>

      <Snackbar
        open={openmessage}
        autoHideDuration={6000}
        onClose={closeMessage}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert onClose={closeMessage} severity='success' sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
      <Grid item xs={12} display='flex' justifyContent='center'>
        <Typography variant='h3'>Orden de Compra</Typography>
      </Grid>
      <Grid item xs={12} md={3}>
        <FormControl fullWidth>
          <InputLabel id='labelCotización'>Cotización</InputLabel>
          <Select
            error={orden.cotizacion_compra === '' && erroractivo}
            labelId='labelCotización'
            name='cotizacion_compra'
            id='cotizaciónSelect'
            value={orden.cotizacion_compra}
            label='Cotización'
            onChange={handleChange}
          >
            <MenuItem value={''}>Seleccione</MenuItem>
            {cotizaciones.map(cot => (
              <MenuItem key={cot.id} value={cot.id}>
                {cot.id}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} md={2}>
        <TextField
          name='monto'
          id='monto'
          label='Monto'
          type='number'
          value={orden.monto}
          error={orden.monto === '' && erroractivo}
          onChange={handleChange}
        />
      </Grid>
      <Grid container item xs={12} md={7}>
        <Button variant='outlined' startIcon={<AddIcon />} onClick={orden.id === null ? handleSubmit : editar}>
          Guardar
        </Button>
        <Button sx={{'marginLeft': '4px'}} autoFocus variant='outlined' startIcon={<DeleteIcon />} onClick={limpiar}>
          Limpiar
        </Button>
      </Grid>
      <Grid item xs={12}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label='simple table'>
            <TableHead>
              <TableRow>
                <TableCell>No. Orden Compra</TableCell>
                <TableCell align='right'>No. Cotizacion</TableCell>
                <TableCell align='center'>Ver Cotización</TableCell>
                <TableCell align='right'>Monto Total</TableCell>
                <TableCell align='right'>Fecha Creación</TableCell>
                <TableCell align='center'>Editar</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {ordenes.map(row => (
                <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell component='th' scope='row'>
                    {row.id}
                  </TableCell>
                  <TableCell align='right'>{row.attributes.cotizacion_compra.data.id}</TableCell>
                  <TableCell align='center'>
                    <IconButton
                      target='_blank'
                    
                      href={`http://localhost:1337${row.attributes.cotizacion_compra.data.attributes.adjunto.data.attributes.url}`}
                    >
                      <PreviewIcon />
                    </IconButton>
                  </TableCell>
                  <TableCell align='right'>{row.attributes.monto}</TableCell>
                  <TableCell align='right'>{row.attributes.fecha_creacion}</TableCell>
                  <TableCell align='center'>
                  <IconButton onClick={() => cargarDatos(row.id)}>
                      <EditIcon />
                    </IconButton>
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

export default OrdenCompra
