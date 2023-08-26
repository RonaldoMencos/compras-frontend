import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import ListSubheader from '@mui/material/ListSubheader';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Productos = () => {
    return ( <div>Productos</div> );

} 


export default function GroupedSelect() {
    return (
      <div>
  
  
  
        <FormControl sx={{ m: 1, minWidth: 200 }}>
          <InputLabel htmlFor="grouped-native-select">Número de factura</InputLabel>
          <Select native defaultValue="" id="grouped-native-select" label="Número de factura">
            <option aria-label="None" value="" />
              <option value={1}>Número 1</option>
              <option value={2}>Número 2</option>
              <option value={3}>Número 3</option>
          </Select>
        </FormControl>
  
  
        <FormControl sx={{ m: 1, minWidth: 200 }}>
          <InputLabel htmlFor="grouped-native-select">Fecha de recepción</InputLabel>
          <Select native defaultValue="" id="grouped-native-select" label="Fecha de recepción">
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
  
  
      <FormControl sx={{ m: 1, minWidth: 250 }}>
        <InputLabel htmlFor="grouped-native-select">Detalles de los productos</InputLabel>
        <Select native defaultValue="" id="grouped-native-select" label="Detalles">
          <option aria-label="None" value="" />
            <option value={1}>Detalles 1</option>
            <option value={2}>Detalles 2</option>
            <option value={3}>Detalles 3</option>
        </Select>
      </FormControl>
  
  
      <FormControl sx={{ m: 1, minWidth: 235 }}>
        <InputLabel htmlFor="grouped-native-select">Condiciones de pago</InputLabel>
        <Select native defaultValue="" id="grouped-native-select" label="Condiciones de pago">
          <option aria-label="None" value="" />
            <option value={1}>Condiciones 1</option>
            <option value={2}>Condiciones 2</option>
            <option value={3}>Condiciones 3</option>
        </Select>
      </FormControl>
  
      <FormControl sx={{ m: 1, minWidth: 275 }}>
        <InputLabel htmlFor="grouped-native-select">Número de orden de compra</InputLabel>
        <Select native defaultValue="" id="grouped-native-select" label="Número de orden de compra">
          <option aria-label="None" value="" />
            <option value={1}>Número 1</option>
            <option value={2}>Número 2</option>
            <option value={3}>Número 3</option>
        </Select>
      </FormControl>
  
      <FormControl sx={{ m: 1, minWidth: 235 }}>
        <InputLabel htmlFor="grouped-native-select">Estado de la recepción</InputLabel>
        <Select native defaultValue="" id="grouped-native-select" label="Estado de la recepción">
          <option aria-label="None" value="" />
            <option value={1}>Estado 1</option>
            <option value={2}>Estado 2</option>
            <option value={3}>Estado 3</option>
        </Select>
      </FormControl>
  
  
  
      </div>
    );
  }

//export default Productos;