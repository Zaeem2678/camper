import React from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';

const AllOrdersComponent = () => {
  const { t } = useTranslation();
  
  // Sample data for orders
  const orders = [
    {
      orderNo: 'ORD1234',
      vehicleDetails: 'Toyota Corolla 2020',
      vehicleOwner: 'John Doe',
      user: 'Jane Smith',
      startDate: '2025-05-01',
      endDate: '2025-05-10',
      totalDays: 9,
      subTotal: 450,
      tax: 85.5,
      total: 535.5,
      invoice: 'INV1234',
      orderStatus: t('profile.orders.status.completed'),
      action: t('profile.orders.table.view'),
    },
    // Add more order objects here if necessary
  ];

  return (
    <Box sx={{ width: { xs: '100%', sm: '95%', md: '90%' }, px: 1, mb: 1 }}>
      {/* Heading */}
      <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
        {t('profile.orders.title')}
      </Typography>

      {/* Table */}
      <TableContainer component={Paper} sx={{ boxShadow: 3 }}>
        <Table sx={{ minWidth: '100%' }}>
          <TableHead>
            <TableRow>
              <TableCell align="center">{t('profile.orders.table.orderNo')}</TableCell>
              <TableCell align="center">{t('profile.orders.table.vehicleDetails')}</TableCell>
              <TableCell align="center">{t('profile.orders.table.vehicleOwner')}</TableCell>
              <TableCell align="center">{t('profile.orders.table.user')}</TableCell>
              <TableCell align="center">{t('profile.orders.table.startDate')}</TableCell>
              <TableCell align="center">{t('profile.orders.table.endDate')}</TableCell>
              <TableCell align="center">{t('profile.orders.table.totalDays')}</TableCell>
              <TableCell align="center">{t('profile.orders.table.subTotal')}</TableCell>
              <TableCell align="center">{t('profile.orders.table.tax')}</TableCell>
              <TableCell align="center">{t('profile.orders.table.total')}</TableCell>
              <TableCell align="center">{t('profile.orders.table.invoice')}</TableCell>
              <TableCell align="center">{t('profile.orders.table.orderStatus')}</TableCell>
              <TableCell align="center">{t('profile.orders.table.action')}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order, index) => (
              <TableRow key={index}>
                <TableCell align="center">{order.orderNo}</TableCell>
                <TableCell align="center">{order.vehicleDetails}</TableCell>
                <TableCell align="center">{order.vehicleOwner}</TableCell>
                <TableCell align="center">{order.user}</TableCell>
                <TableCell align="center">{order.startDate}</TableCell>
                <TableCell align="center">{order.endDate}</TableCell>
                <TableCell align="center">{order.totalDays}</TableCell>
                <TableCell align="center">{order.subTotal}</TableCell>
                <TableCell align="center">{order.tax}</TableCell>
                <TableCell align="center">{order.total}</TableCell>
                <TableCell align="center">{order.invoice}</TableCell>
                <TableCell align="center">{order.orderStatus}</TableCell>
                <TableCell align="center">
                  <Button variant="outlined" size="small" color="primary">
                    {order.action}
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default AllOrdersComponent;
