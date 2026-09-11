const express=require('express');

const router=express.Router();

const {getAllServices,getServiceById,createService,updateService,deleteService}=require('../controllers/services.controller');

router.get('/', getAllServices);
router.get('/:id', getServiceById);
router.post('/', createService);
router.put('/:id', updateService);
router.delete('/:id', deleteService);

module.exports=router;