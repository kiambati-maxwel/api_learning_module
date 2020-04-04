const express = require('express');
const router = express.Router();

router.get('/',(req, res, next) => {
    res.status(200).json({
        message: 'hundling GET requests through /products'
    });
});

router.post('/',(req, res, next) => {
    res.status(201).json({
        message: 'hundling POST requests through /products'
    });
});

router.get('/:prID', (req, res, next) => {
    let id = req.params.prID;
    if(id === 'special'){
        res.status(200).json({
            message: 'you found the special ID',
            ID: id
        })
    }else{
        res.status(200).json({
            message: 'you passed an id',
            ID: id
        })
    }
});

router.patch('/:prID',(req, res, next) => {
    res.status(200).json({
        message: 'updated  product ',
        id: req.params.prID

    });
});

router.delete('/:prID',(req, res, next) => {
    res.status(200).json({
        message: 'product deleted !!',
        id: req.params.prID
    });
});

router.post('/',(req, res, next) => {
    res.status(201).json({
        message: 'order created --- '
    });
});

module.exports = router;
