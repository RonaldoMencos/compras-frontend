import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import ListSubheader from '@mui/material/ListSubheader';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const DevolucionProductos = () => {
    return ( <div>Devolucion Productos</div> );
}


export default function GroupedSelect() {
    return (
      <div>
  
  
  
        <FormControl sx={{ m: 1, minWidth: 225 }}>
          <InputLabel htmlFor="grouped-native-select">Número de Devolución</InputLabel>
          <Select native defaultValue="" id="grouped-native-select" label="Número de Devolución">
            <option aria-label="None" value="" />
              <option value={1}>Número 1</option>
              <option value={2}>Número 2</option>
              <option value={3}>Número 3</option>
          </Select>
        </FormControl>
  
  
        <FormControl sx={{ m: 1, minWidth: 225 }}>
          <InputLabel htmlFor="grouped-native-select">Fecha de Devolución</InputLabel>
          <Select native defaultValue="" id="grouped-native-select" label="Fecha de Devolución">
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
  
  
      <FormControl sx={{ m: 1, minWidth: 350 }}>
        <InputLabel htmlFor="grouped-native-select">Número de Factura de Compra Original</InputLabel>
        <Select native defaultValue="" id="grouped-native-select" label="Número de Factura de Compra Original">
          <option aria-label="None" value="" />
            <option value={1}>Número 1</option>
            <option value={2}>Número 2</option>
            <option value={3}>Número 3</option>
        </Select>
      </FormControl>
  
  
      <FormControl sx={{ m: 1, minWidth: 225 }}>
        <InputLabel htmlFor="grouped-native-select">Productos Devueltos</InputLabel>
        <Select native defaultValue="" id="grouped-native-select" label="Productos Devueltos">
          <option aria-label="None" value="" />
            <option value={1}>Productos 1</option>
            <option value={2}>Productos 2</option>
            <option value={3}>Productos 3</option>
        </Select>
      </FormControl>
  
      <FormControl sx={{ m: 1, minWidth: 200 }}>
        <InputLabel htmlFor="grouped-native-select">Cantidad Devuelta</InputLabel>
        <Select native defaultValue="" id="grouped-native-select" label="Cantidad Devuelta">
          <option aria-label="None" value="" />
            <option value={1}>Cantidad 1</option>
            <option value={2}>Cantidad 2</option>
            <option value={3}>Cantidad 3</option>
        </Select>
      </FormControl>  
  
      <FormControl sx={{ m: 1, minWidth: 250 }}>
        <InputLabel htmlFor="grouped-native-select">Motivo de la Devolución</InputLabel>
        <Select native defaultValue="" id="grouped-native-select" label="Motivo de la Devolución">
          <option aria-label="None" value="" />
            <option value={1}>Motivo 1</option>
            <option value={2}>Motivo 2</option>
            <option value={3}>Motivo 3</option>
        </Select>
      </FormControl>


      <FormControl sx={{ m: 1, minWidth: 325 }}>
        <InputLabel htmlFor="grouped-native-select">Estado de los Productos Devueltos</InputLabel>
        <Select native defaultValue="" id="grouped-native-select" label="Estado de los Productos Devueltos">
          <option aria-label="None" value="" />
            <option value={1}>Estado 1</option>
            <option value={2}>Estado 2</option>
            <option value={3}>Estado 3</option>
        </Select>
      </FormControl>


      <FormControl sx={{ m: 1, minWidth: 225 }}>
        <InputLabel htmlFor="grouped-native-select">Acciones Realizadas</InputLabel>
        <Select native defaultValue="" id="grouped-native-select" label="Acciones Realizadas">
          <option aria-label="None" value="" />
            <option value={1}>Acciones 1</option>
            <option value={2}>Acciones 2</option>
            <option value={3}>Acciones 3</option>
        </Select>
      </FormControl>


      <FormControl sx={{ m: 1, minWidth: 275 }}>
        <InputLabel htmlFor="grouped-native-select">Responsable de la Devolución</InputLabel>
        <Select native defaultValue="" id="grouped-native-select" label="Responsable de la Devolución">
          <option aria-label="None" value="" />
            <option value={1}>Responsable 1</option>
            <option value={2}>Responsable 2</option>
            <option value={3}>Responsable 3</option>
        </Select>
      </FormControl>


      <FormControl sx={{ m: 1, minWidth: 250 }}>
        <InputLabel htmlFor="grouped-native-select">Estado de la Devolución</InputLabel>
        <Select native defaultValue="" id="grouped-native-select" label="Estado de la Devolución">
          <option aria-label="None" value="" />
            <option value={1}>Estado 1</option>
            <option value={2}>Estado 2</option>
            <option value={3}>Estado 3</option>
        </Select>
      </FormControl>
  
      </div>
    );
  }



//export default DevolucionProductos;