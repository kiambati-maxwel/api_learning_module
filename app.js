const express = require('express');
const morgan = require('morgan');
const app = express();

const productRoutes = require('./api/routes/products');
const ordersRoutes = require('./api/routes/orders');

app.use(morgan('dev'));
app.use('/orders', ordersRoutes);
app.use('/products', productRoutes);

app.use('/', (req, res, next) => {
    const error = new Error('not found');
    error.status(404);
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        message: error.message
    })
});

module.exports = app;  