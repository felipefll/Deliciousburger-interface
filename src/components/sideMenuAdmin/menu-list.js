import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'

import paths from '../../constants/paths'

const listlinks = [
  {
    id: 1,
    label: 'Pedidos',
    link: paths.Order,
    icon: ShoppingBagOutlinedIcon
  },
  {
    id: 2,
    label: 'Listar produtos',
    link: paths.Products,
    icon: ShoppingCartIcon
  }
]

export default listlinks
