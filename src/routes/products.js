const express = require('express');
const router = express.Router();

const mysqlConnection =  require('../database');

//solicitud general de los productos
router.get('/', (req, res) => {
    mysqlConnection.query('SELECT * FROM product', (err, rows, fields) => {
        if(!err){
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});

//solicitud por ID del producto
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

//solicitud por nombre del producto
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

//Solicitud por categoria del producto
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

//Solicitud que se refiere a todas las categorias
router.get('/allcategory', (req, res) => {
    mysqlConnection.query('SELECT * FROM category ', 
    (err, rows, fields) =>{
        if(!err){
            res.json(rows);
        } else {
            console.log(err);
        }
    } );
});


module.exports = router;