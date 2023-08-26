import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import ListSubheader from '@mui/material/ListSubheader';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const RecepcionProductos = () => {
    return ( <div>Recepcion productos</div> );
}
 

export default function GroupedSelect() {
    return (
      <div>
  
  
  
  <FormControl sx={{ m: 1, minWidth: 225 }}>
        <InputLabel htmlFor="grouped-native-select">Número de Recepción</InputLabel>
        <Select native defaultValue="" id="grouped-native-select" label="Número">
          <option aria-label="None" value="" />
            <option value={1}>Número 1</option>
            <option value={2}>Número 2</option>
            <option value={3}>Número 3</option>
        </Select>
      </FormControl>
  
  
      <FormControl sx={{ m: 1, minWidth: 225 }}>
        <InputLabel htmlFor="grouped-native-select">Fecha de Recepción</InputLabel>
        <Select native defaultValue="" id="grouped-native-select" label="Fecha de Recepción">
          <option aria-label="None" value="" />
            <option value={1}>Fecha 1</option>
            <option value={2}>Fecha 2</option>
            <option value={3}>Fecha 3</option>
        </Select>
      </FormControl>

      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel htmlFor="grouped-native-select">Proveedor</InputLabel>
        <Select native defaultValue="" id="grouped-native-select" label="Proveedor">
          <option aria-label="None" value="" />
            <option value={1}>Proveedor 1</option>
            <option value={2}>Proveedor 2</option>
            <option value={3}>Proveedor 3</option>
        </Select>
      </FormControl>

            
      <FormControl sx={{ m: 1, minWidth: 200 }}>
        <InputLabel htmlFor="grouped-native-select">Productos Recibidos</InputLabel>
        <Select native defaultValue="" id="grouped-native-select" label="Productos Recibidos">
          <option aria-label="None" value="" />
            <option value={1}>Productos 1</option>
            <option value={2}>Productos 2</option>
            <option value={3}>Productos 3</option>
        </Select>
      </FormControl>

            
      <FormControl sx={{ m: 1, minWidth: 200 }}>
        <InputLabel htmlFor="grouped-native-select">Cantidad Recibida</InputLabel>
        <Select native defaultValue="" id="grouped-native-select" label="Cantidad Recibida">
          <option aria-label="None" value="" />
            <option value={1}>Cantidad 1</option>
            <option value={2}>Cantidad 2</option>
            <option value={3}>Cantidad 3</option>
        </Select>
      </FormControl>

            
      <FormControl sx={{ m: 1, minWidth: 275 }}>
        <InputLabel htmlFor="grouped-native-select">Descripción de los Productos</InputLabel>
        <Select native defaultValue="" id="grouped-native-select" label="Descripción de los Productos">
          <option aria-label="None" value="" />
            <option value={1}>Descripción 1</option>
            <option value={2}>Descripción 2</option>
            <option value={3}>Descripción 3</option>
        </Select>
      </FormControl>

            
      <FormControl sx={{ m: 1, minWidth: 315 }}>
        <InputLabel htmlFor="grouped-native-select">Número de Factura del Proveedor</InputLabel>
        <Select native defaultValue="" id="grouped-native-select" label="Número de Factura del Proveedor">
          <option aria-label="None" value="" />
            <option value={1}>Número 1</option>
            <option value={2}>Número 2</option>
            <option value={3}>Número 3</option>
        </Select>
      </FormControl>

            
      <FormControl sx={{ m: 1, minWidth: 175 }}>
        <InputLabel htmlFor="grouped-native-select">Costo Unitario</InputLabel>
        <Select native defaultValue="" id="grouped-native-select" label="Costo Unitario">
          <option aria-label="None" value="" />
            <option value={1}>Costo 1</option>
            <option value={2}>Costo 2</option>
            <option value={3}>Costo 3</option>
        </Select>
      </FormControl>
  
  
      <FormControl sx={{ m: 1, minWidth: 225 }}>
        <InputLabel htmlFor="grouped-native-select">Persona de Recepción</InputLabel>
        <Select native defaultValue="" id="grouped-native-select" label="Persona de Recepción">
          <option aria-label="None" value="" />
            <option value={1}>Persona 1</option>
            <option value={2}>Persona 2</option>
            <option value={3}>Persona 3</option>
        </Select>
      </FormControl>


      <FormControl sx={{ m: 1, minWidth: 250 }}>
        <InputLabel htmlFor="grouped-native-select">Estado de los Productos</InputLabel>
        <Select native defaultValue="" id="grouped-native-select" label="Estado de los Productos">
          <option aria-label="None" value="" />
            <option value={1}>Estado 1</option>
            <option value={2}>Estado 2</option>
            <option value={3}>Estado 3</option>
        </Select>
      </FormControl>


      <FormControl sx={{ m: 1, minWidth: 200 }}>
        <InputLabel htmlFor="grouped-native-select">Estatus de Pago</InputLabel>
        <Select native defaultValue="" id="grouped-native-select" label="Estatus de Pago">
          <option aria-label="None" value="" />
            <option value={1}>Proveedor 1</option>
            <option value={2}>Proveedor 2</option>
            <option value={3}>Proveedor 3</option>
        </Select>
      </FormControl>


      </div>
    );
  }



//export default RecepcionProductos;