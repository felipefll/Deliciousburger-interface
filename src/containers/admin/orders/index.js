import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import React, { useEffect, useState } from 'react'

import api from '../../../services/api'
import formatDate from '../../../utils/formatDate'
import Row from './row.js'
import { Container } from './styles'

export function Orders () {
  const [orders, SetOrders] = useState([])
  const [rows, SetRows] = useState([])

  useEffect(() => {
    async function loadOrders () {
      const { data } = await api.get('orders')

      SetOrders(data)
    }

    loadOrders()
  }, [])

  function createData (order) {
    return {
      name: order.user.name,
      orderId: order._id,
      date: formatDate(order.createdAt),
      status: order.status,
      products: order.products
    }
  }

  useEffect(() => {
    const newRows = orders.map(ord => createData(ord))
    SetRows(newRows)
  }, [orders])

  return (
    <Container>
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Pedidos</TableCell>
            <TableCell >Cliente</TableCell>
            <TableCell >Data do pedido</TableCell>
            <TableCell >Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.orderId} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Container>
  )
}
export default Orders
