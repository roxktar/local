const express=require('express');

const router=express.Router();

const {getUserProfile,updateUserProfile,deleteUser}=require('../controllers/user.contoller');


router.get('/profile',authenticateToken,getUserProfile);
router.put('/profile',authenticateToken,updateUserProfile);
router.delete('/profile',authenticateToken,deleteUser);

module.exports=router;