import * as React from 'react'
import { useState, useEffect, useRef } from 'react'
import Grid from '@mui/material/Grid'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import AddIcon from '@mui/icons-material/Add'
import DeleteIcon from '@mui/icons-material/Delete';
import PreviewIcon from '@mui/icons-material/Preview'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import EditIcon from '@mui/icons-material/Edit'
import Snackbar from '@mui/material/Snackbar'
import IconButton from '@mui/material/IconButton'
import MuiAlert from '@mui/material/Alert'

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />
})

const Cotizacion = () => {
  const ref = useRef(null);
  const [message, setmessage] = useState('')
  const [openerror, setopenerror] = useState(false)
  const [erroractivo, seterroractivo] = useState(false)
  const [file, setfile] = useState(null)
  const [openmessage, setopenmessage] = useState(false)
  const [proveedores, setproveedores] = React.useState([])
  const [solicitudes, setsolicitudes] = React.useState([])
  const [cotizaciones, setcotizaciones] = React.useState([])
  const [cotizacion, setcotizacion] = React.useState({
    fecha_creacion: '',
    adjunto: '',
    total: '',
    solicitud_compra: '',
    proveedor: '',
    id: null
  })

  const getProveedores = async () => {
    const url = 'http://localhost:1337/api/proveedors'
    const respuesta = await fetch(url)
    const resultado = await respuesta.json()
    const datos = resultado.data
    setproveedores(datos)
  }

  const getSolicitudes = async () => {
    const url = 'http://localhost:1337/api/solicitud-compras'
    const respuesta = await fetch(url)
    const resultado = await respuesta.json()
    const datos = resultado.data
    setsolicitudes(datos)
  }

  const getCotizaciones = async () => {
    const url = 'http://localhost:1337/api/cotizacion-compras?populate=*'
    const respuesta = await fetch(url)
    const resultado = await respuesta.json()
    const datos = resultado.data
    setcotizaciones(datos)
  }

  useEffect(() => {
    getProveedores()
    getSolicitudes()
    getCotizaciones()
  }, [])

  const handleSubmit = async e => {
    e.preventDefault()
    const { total, solicitud_compra, proveedor } = cotizacion
    if ([total, solicitud_compra, proveedor].includes('') || file===null) {
      setopenerror(true)
      seterroractivo(true)
      setmessage('Debe de completar todos los campos requeridos.')
      return
    }

    setopenerror(false)
    seterroractivo(false)
    const res = await uploadFile()
    sendPost(res)
    setopenmessage(true)
    setmessage('Se ha guardado con éxito!.')
    limpiar()
  }

  const uploadFile = async () => {
    const formData = new FormData()
    formData.append('files', file)

    const res = await fetch('http://localhost:1337/api/upload', {
      method: 'POST',
      body: formData
    })
    const respuesta = await res.json()
    return respuesta
  }

  const sendPost = async res => {
    const nuevo = {
      data: {
        fecha_creacion: new Date(),
        total: cotizacion.total,
        solicitud_compra: cotizacion.solicitud_compra,
        proveedor: cotizacion.proveedor,
        adjunto: res
      }
    }

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(nuevo)
    }

    await fetch('http://localhost:1337/api/cotizacion-compras', requestOptions).then(response => response.json())
    getCotizaciones()
  }

  const handleInputChange = e => {
    const { name, value } = e.target
    if (name === "total") {
      if (value<=0) {
        value = '';
      }
    }
    setcotizacion({
      ...cotizacion,
      [name]: value
    })
  }

  const handleFileChange = e => {
    setfile(e.target.files[0])
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
    setcotizacion({
      fecha_creacion: '',
      adjunto: '',
      total: '',
      solicitud_compra: '',
      proveedor: '',
      id: null
    })
    ref.current.value = ""
    ref.current.type = "text" 
    ref.current.type = "file"
    setfile(null)
  }

  const cargarDatos = async (id) => {
    const url = `http://localhost:1337/api/cotizacion-compras/${id}?populate=*`;
    const respuesta = await fetch(url);
    const resultado = await respuesta.json();
    const datos = resultado.data
    const datosJson = {
      id: datos.id,
      fecha_creacion: datos.attributes.fecha_creacion,
      proveedor: datos.attributes.proveedor.data.id,
      solicitud_compra: datos.attributes.solicitud_compra.data.id,
      total: datos.attributes.total,
    }
    setcotizacion(datosJson);
  };

  const editar = async e  => {
    e.preventDefault()
    const { total, solicitud_compra, proveedor } = cotizacion
    if ([total, solicitud_compra, proveedor].includes('')) {
      setopenerror(true)
      seterroractivo(true)
      setmessage('Debe de completar todos los campos requeridos.')
      return
    }

    setopenerror(false)
    seterroractivo(false)
    if (file!==null) {
      const res = await uploadFile()
      sendPut(res)
    } else {
      sendPut(null)
    }
    setopenmessage(true)
    setmessage('Se ha guardado con éxito!.')
    limpiar()
  }

  const sendPut = async res => {
    let objecto = {
      data: {
        total: cotizacion.total,
        solicitud_compra: cotizacion.solicitud_compra,
        proveedor: cotizacion.proveedor,
      }      
    }

    if (res!== null) {
      objecto = {
        ...objecto,
        adjunto: res
      }
    }

    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(objecto)
    }

    await fetch(`http://localhost:1337/api/cotizacion-compras/${cotizacion.id}`, requestOptions).then(response => response.json())
    getCotizaciones()
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
        <Typography variant='h3'>Cotización</Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <FormControl sx={{ width: '50%' }}>
          <InputLabel id='labelSolicitud'>Solicitud</InputLabel>
          <Select
            error={cotizacion.solicitud_compra === "" && erroractivo}
            autoFocus
            required
            labelId='labelSolicitud'
            id='solicitudSelect'
            name='solicitud_compra'
            value={cotizacion.solicitud_compra}
            onChange={handleInputChange}
          >
            <MenuItem value={''}>Seleccione</MenuItem>
            {solicitudes.map(sol => (
              <MenuItem key={sol.id} value={sol.id}>
                {sol.id}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} md={6}>
        <FormControl fullWidth>
          <InputLabel id='labelProveedor'>Proveedor</InputLabel>
          <Select
          error={cotizacion.proveedor === "" && erroractivo}
            autoFocus
            required
            labelId='labelProveedor'
            id='proveedorSelect'
            label='Proveedor'
            name='proveedor'
            value={cotizacion.proveedor}
            onChange={handleInputChange}
          >
            <MenuItem value={''}>Seleccione</MenuItem>
            {proveedores.map(prov => (
              <MenuItem key={prov.id} value={prov.id}>
                {prov.attributes.nombre_fiscal}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography>Total</Typography>
        <TextField
          error={cotizacion.total === "" && erroractivo}
          autoFocus
          required
          id='total'
          sx={{ width: '50%' }}
          label=''
          type='number'
          fullWidth
          name='total'
          value={cotizacion.total}
          onChange={handleInputChange}
          InputProps={{ inputProps: {type: 'number',min: 0, max:10} }}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography>Adjunto Cotización</Typography>
        <input
          autoFocus
          required
          id='adjunto'
          label=''
          variant='outlined'
          type='file'
          ref={ref}
          onChange={handleFileChange}
        />
      </Grid>

      <Grid container justifyContent='center' mt={2}>
        <Button autoFocus variant='outlined' startIcon={<AddIcon />} onClick={cotizacion.id===null?handleSubmit:editar}>
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
                <TableCell>No. Cotización</TableCell>
                <TableCell align='right'>No. Solicitud</TableCell>
                <TableCell align='right'>Proveedor</TableCell>
                <TableCell align='center'>Adjunto</TableCell>
                <TableCell align='right'>Fecha Creación</TableCell>
                <TableCell align='center'>Editar</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cotizaciones.map(cot => (
                <TableRow key={cot.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell component='th' scope='row'>
                    {cot.id}
                  </TableCell>
                  <TableCell align='right'>{cot.attributes.solicitud_compra.data.id}</TableCell>
                  <TableCell align='right'>{cot.attributes.proveedor.data.attributes.nombre_fiscal}</TableCell>
                  <TableCell align='center'>
                    <IconButton
                      href={`http://localhost:1337${cot.attributes.adjunto.data.attributes.url}`}
                      target='_blank'
                    >
                      <PreviewIcon />
                    </IconButton>
                  </TableCell>
                  <TableCell align='right'>{cot.attributes.fecha_creacion}</TableCell>
                  <TableCell align='center'>
                    <IconButton onClick={() => cargarDatos(cot.id)}>
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

export default Cotizacion
