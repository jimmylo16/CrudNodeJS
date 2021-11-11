const express = require('express');
const router= express.Router();

const clientesController=require('../controller/clientesController');

router.get('/',clientesController.list);
router.post('/add',clientesController.guardarCliente);
router.get('/delete/:id',clientesController.eliminarCliente);
router.get('/actualizar/:id',clientesController.verCliente);
router.post('/actualizar/:id',clientesController.edtiarCliente);

module.exports=router;
