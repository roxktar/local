const services =require('../models/services.model');




// create new service
async function createService(req,res){
    try{
        const { name, description, price } = req.body;
        const newService=await services.create({ name, description, price });
        res.status(201).json({ message: 'Service created successfully', service: newService });
    }
    catch(error){
        res.status(500).json({ message: 'Error creating service' });
    }

}
// get all services
async function getAllServices(req,res){
    try{
        const allServices=await services.find();
        res.status(200).json({ services: allServices });
    }
    catch(error){
        res.status(500).json({ message: 'Error fetching services' });
    }
}

// get service by ID
async function getServiceById(req,res){
    try{
        const { id } = req.params;
        const service=await services.findById(id);
        if(!service){
            return res.status(404).json({ message: 'Service not found' });
        }
        res.status(200).json({ service });
    }
    catch(error){
        res.status(500).json({ message: 'Error fetching service' });
    }
}

// update service by ID
async function updateService(req,res){
    try{
        const { id } = req.params;
        const { name, description, price } = req.body;
        const service=await services.findByIdAndUpdate(id, { name, description, price }, { new: true });
        if(!service){
            return res.status(404).json({ message: 'Service not found' });
        }
        res.status(200).json({ message: 'Service updated successfully', service });
    }
    catch(error){
        res.status(500).json({ message: 'Error updating service' });
    }
}

// delete service by ID
async function deleteService(req,res){
    try{
        const { id } = req.params;
        const service=await services.findByIdAndDelete(id);
        if(!service){
            return res.status(404).json({ message: 'Service not found' });
        }
        res.status(200).json({ message: 'Service deleted successfully' });
    }
    catch(error){
        res.status(500).json({ message: 'Error deleting service' });
    }
}


module.exports={createService,getAllServices,getServiceById,updateService,deleteService};
