
const userModel=require('../models/user.model');

//get user profile

async function getUserProfile(req,res){
    try{
        const userId=req.user.id;
        const user=await userModel.findById(userId);
        res.status(200).json({ user });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching user profile' });
    }
}


// update user profile

async function updateUserProfile(req,res){
    try{
        const userId=req.user.id;
        const { name, email, phone, location } = req.body;
         const updatedUser=await userModel.findByIdAndUpdate(userId,{ name, email, phone, location },{ new: true });
         res.status(200).json({ message: 'User profile updated successfully', user: updatedUser });
    } catch (error) {
        res.status(500).json({ message: 'Error updating user profile' });
    }
}

// user ko delete karne ke liye function

async function deleteUser(req,res){
    try{
        const userId=req.user.id;
        await userModel.findByIdAndDelete(userId);
        res.status(200).json({ message: 'User deleted successfully' });
    }
    catch (error) {
        res.status(500).json({ message: 'Error deleting user' });
    }
}

module.exports = { getUserProfile, updateUserProfile , deleteUser };