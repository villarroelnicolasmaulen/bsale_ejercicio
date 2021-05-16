const express = require('express');
const router = express.Router();

const mysqlConnection =  require('../database');

router.get('/', (req, res) => {
    mysqlConnection.query('SELECT * FROM product', (err, rows, fields) => {
        if(!err){
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});

router.get('/product=:id', (req, res) => {
    const {id} =  req.params;
    mysqlConnection.query('SELECT * FROM product WHERE id = ?', [id], 
    (err, rows, fields) =>{
        if(!err){
            res.json(rows[0]);
        } else {
            console.log(err);
        }
    } );
});

router.get('/name=:id', (req, res) => {
    const {id} =  req.params;
    mysqlConnection.query('SELECT * FROM product WHERE name LIKE ?', '%'+[id]+'%', 
    (err, rows, fields) =>{
        if(!err){
            res.json(rows);
        } else {
            console.log(err);
        }
    } );
});


router.get('/category=:id', (req, res) => {
    const {id} =  req.params;
    mysqlConnection.query('SELECT * FROM product WHERE category = ?', [id], 
    (err, rows, fields) =>{
        if(!err){
            res.json(rows);
        } else {
            console.log(err);
        }
    } );
});


module.exports = router;