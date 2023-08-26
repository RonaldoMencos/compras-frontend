import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import ListSubheader from '@mui/material/ListSubheader';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const CategoriaProducto = () => {
    return ( <div>Categoria Producto</div> );
}


export default function GroupedSelect() {
  return (
    <div>



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
        <InputLabel htmlFor="grouped-native-select">Código o Identificación del Producto</InputLabel>
        <Select native defaultValue="" id="grouped-native-select" label="Código o Identificación del Producto">
          <option aria-label="None" value="" />
            <option value={1}>Codigo 1</option>
            <option value={2}>Codigo 2</option>
            <option value={3}>Codigo 3</option>
        </Select>
      </FormControl>


      <FormControl sx={{ m: 1, minWidth: 250 }}>
        <InputLabel htmlFor="grouped-native-select">Nombre del Producto</InputLabel>
        <Select native defaultValue="" id="grouped-native-select" label="Nombre del Producto">
          <option aria-label="None" value="" />
            <option value={1}>Nombre 1</option>
            <option value={2}>Nombre 2</option>
            <option value={3}>Nombre 3</option>
        </Select>
      </FormControl>


      <FormControl sx={{ m: 1, minWidth: 225 }}>
        <InputLabel htmlFor="grouped-native-select">Descripción Detallada</InputLabel>
        <Select native defaultValue="" id="grouped-native-select" label="Descripción Detallada">
          <option aria-label="None" value="" />
            <option value={1}>Descripción 1</option>
            <option value={2}>Descripción 2</option>
            <option value={3}>Descripción 3</option>
        </Select>
      </FormControl>


      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel htmlFor="grouped-native-select">Cantidad</InputLabel>
        <Select native defaultValue="" id="grouped-native-select" label="Cantidad">
          <option aria-label="None" value="" />
            <option value={1}>Cantidad 1</option>
            <option value={2}>Cantidad 2</option>
            <option value={3}>Cantidad 3</option>
        </Select>
      </FormControl>

      <FormControl sx={{ m: 1, minWidth: 215 }}>
        <InputLabel htmlFor="grouped-native-select">Fecha de Recepción</InputLabel>
        <Select native defaultValue="" id="grouped-native-select" label="Fecha de Recepción ">
          <option aria-label="None" value="" />
            <option value={1}>Fecha 1</option>
            <option value={2}>Fecha 2</option>
            <option value={3}>Fecha 3</option>
        </Select>
      </FormControl>

      <FormControl sx={{ m: 1, minWidth: 175 }}>
        <InputLabel htmlFor="grouped-native-select">Precio Unitario</InputLabel>
        <Select native defaultValue="" id="grouped-native-select" label="Precio Unitario">
          <option aria-label="None" value="" />
            <option value={1}>Precio 1</option>
            <option value={2}>Precio 2</option>
            <option value={3}>Precio 3</option>
        </Select>
      </FormControl>


      <FormControl sx={{ m: 1, minWidth: 300 }}>
        <InputLabel htmlFor="grouped-native-select">Ubicación de Almacenamiento</InputLabel>
        <Select native defaultValue="" id="grouped-native-select" label="Ubicación de Almacenamiento">
          <option aria-label="None" value="" />
            <option value={1}>Ubicación 1</option>
            <option value={2}>Ubicación 2</option>
            <option value={3}>Ubicación 3</option>
        </Select>
      </FormControl>


      <FormControl sx={{ m: 1, minWidth: 250 }}>
        <InputLabel htmlFor="grouped-native-select">Fecha de Vencimiento </InputLabel>
        <Select native defaultValue="" id="grouped-native-select" label="Fecha de Vencimiento ">
          <option aria-label="None" value="" />
            <option value={1}>Fecha 1</option>
            <option value={2}>Fecha 2</option>
            <option value={3}>Fecha 3</option>
        </Select>
      </FormControl>


      <FormControl sx={{ m: 1, minWidth: 215 }}>
        <InputLabel htmlFor="grouped-native-select">Notas o Comentarios</InputLabel>
        <Select native defaultValue="" id="grouped-native-select" label="Notas o Comentarios">
          <option aria-label="None" value="" />
            <option value={1}>Notas 1</option>
            <option value={2}>Notas 2</option>
            <option value={3}>Notas 3</option>
        </Select>
      </FormControl>

    </div>
  );
}

 
//export default CategoriaProducto;