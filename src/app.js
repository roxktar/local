const express=require('express');
const authRoutes=require('./routes/auth.routes');
const userRoutes=require('./routes/user.routes');
const serviceRoutes=require('./routes/services.routes');
require('dotenv').config();

const cors=require('cors');



const app=express();

app.use(cors());
app.use(express.json());

app.use('/api/auth',authRoutes);
app.use('/api/user',userRoutes);
app.use('/api/services',serviceRoutes);






module.exports=app;