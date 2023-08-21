// ** Icon imports
import HomeOutline from 'mdi-material-ui/HomeOutline'
import CartOutline from 'mdi-material-ui/CartOutline'
import CheckCircleOutline from 'mdi-material-ui/CheckCircleOutline'
import CheckDecagramOutline from 'mdi-material-ui/CheckDecagramOutline'
import AccountGroupOutline from 'mdi-material-ui/AccountGroupOutline'
import CardAccountMailOutline from 'mdi-material-ui/CardAccountMailOutline'
import ShapeOutline from 'mdi-material-ui/ShapeOutline'
import NotePlusOutline from 'mdi-material-ui/NotePlusOutline'
import NoteTextOutline from 'mdi-material-ui/NoteTextOutline'
import LockPlusOutline from 'mdi-material-ui/LockPlusOutline'
import ChartLine from 'mdi-material-ui/ChartLine'
import ChartBar from 'mdi-material-ui/ChartBar'
import Receipt from 'mdi-material-ui/Receipt'
import KeyboardReturn from 'mdi-material-ui/KeyboardReturn'
import Tools from 'mdi-material-ui/Tools'
import DoneIcon from '@mui/icons-material/Done';


// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): VerticalNavItemsType => {
  return [
    {
      title: 'Inicio',
      icon: HomeOutline,
      path: '/'
    },{
      title: 'Solicitud Compra',
      icon: CartOutline,
      path: '/solicitud'
    },
    {
      title: 'Revisión Solicitud',
      icon: CheckCircleOutline,
      path: '/revision-solicitud'
    },
    {
      title: 'Aprobación Solicitud',
      icon: CheckDecagramOutline,
      path: '/aprobacion-solicitud'
    },
    {
      title: 'Proveedores',
      icon: AccountGroupOutline,
      path: '/proveedores'
    }
    ,
    {
      title: 'Categoria Proveedor',
      icon: ShapeOutline,
      path: '/categoria-proveedor'
    },
    {
      title: 'Contactos Proveedor',
      icon: CardAccountMailOutline,
      path: '/contacto'
    }
    ,
    {
      title: 'Cotización',
      icon: NotePlusOutline,
      path: '/cotizacion'
    }
    ,
    {
      title: 'Sel. Cotización',
      icon: DoneIcon,
      path: '/seleccionar-cotizacion'
    }
    ,
    {
      title: 'Orden Compra',
      icon: NoteTextOutline,
      path: '/orden-compra'
    }
    ,
    {
      title: 'Contraseña de Pago',
      icon: LockPlusOutline,
      path: '/contrasenia-pago'
    }
    ,
    {
      title: 'Categoría Producto',
      icon: ShapeOutline,
      path: '/categoria-producto'
    }
    ,
    {
      title: 'Productos',
      icon: Tools,
      path: '/productos'
    }
    ,
    {
      title: 'Recepción Productos',
      icon: Receipt,
      path: '/recepcion-productos'
    }
    ,
    {
      title: 'Devolución Productos',
      icon: KeyboardReturn,
      path: '/devolucion-productos'
    }
    ,
    {
      title: 'Reporte Orden Compra',
      icon: ChartLine,
      path: '/reporte-ordenes'
    }
    ,
    {
      title: 'Reporte General',
      icon: ChartBar,
      path: '/reporte-general'
    }]
    /*
    {
      title: 'Account Settings',
      icon: AccountCogOutline,
      path: '/account-settings'
    },
    {
      sectionTitle: 'Pages'
    },
    {
      title: 'Login',
      icon: Login,
      path: '/pages/login'
    },
    {
      title: 'Register',
      icon: AccountPlusOutline,
      path: '/pages/register',
    },
    {
      title: 'Error',
      icon: AlertCircleOutline,
      path: '/pages/error',
    },
    {
      sectionTitle: 'User Interface'
    },
    {
      title: 'Typography',
      icon: FormatLetterCase,
      path: '/typography'
    },
    {
      title: 'Icons',
      path: '/icons',
      icon: GoogleCirclesExtended
    },
    {
      title: 'Cards',
      icon: CreditCardOutline,
      path: '/cards'
    },
    {
      title: 'Tables',
      icon: Table,
      path: '/tables'
    },
    {
      icon: CubeOutline,
      title: 'Form Layouts',
      path: '/form-layouts'
    }
  ]*/
}

export default navigation
