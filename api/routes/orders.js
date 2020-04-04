const express = require('express');

const router =  express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'get oders to / orders'
    });
});

router.post('/', (req, res, next) => {
    res.status(201).json({
        message: 'post orders to / orders'
    });
});

router.get('/:orderID', (req, res, next) => {
    res.status(200).json({
        message: 'heres the order',
        orderID: req.params.orderID
    });
});

router.patch('/:orderID', (req, res, next) => {
    res.status(200).json({
        message: 'order updated',
        orderID: req.params.orderID
    });
});

router.post('/:orderID', (req, res, next) => {
    res.status(201).json({
        message: 'order made',
        orderID: req.params.orderID
    });
});

router.delete('/:orderID', (req, res, next) => {
    router.get('/:orderID', (req, res, next) => {
    res.status(200).json({
        message: 'heres the order',
        orderID: req.params.orderID
    });
});
});


module.exports = router;