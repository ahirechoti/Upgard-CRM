import userModel from '../models/user.model.js'
import { userResponse } from '../utils/user.util.js';
/**
 * Fecth user list 
 */
const findAllUser = async (req, res) => {
    try {
        let userQuery = {};
        let queryUserType = req.query.userType;
        let queryUserStatus = req.query.userStatus;
        if(queryUserType){
            userQuery.userType = queryUserType;
        }
        if(queryUserStatus){
            userQuery.userStatus = queryUserStatus;
        }

        const users = await userModel.find(userQuery);
        return res.status(200).send(userResponse(users));
    } catch (error) {
        console.log(error);
        return res.status(500).send({message: 'Internal server error', error: error});
    }
}

/**
 * Update user details
 */
const updateUser = async (req, res) => {
    try {
        const reqUserId = req.body.userId;
        const user = await userModel.findOne({'userId': reqUserId});
        if(!user){
            return res.status(200).send({
                message: `User with user Id ${reqUserId} does not exists`
            })
        }
        user.name = req.body.name || user.name;
        user.userStatus = req.body.userStatus || user.userStatus,
        user.password = req.body.password || user.password,
        user.userType = req.body.userType || user.userType
        user.save();
       // await userModel.updateOne(updatedUser);
        res.status(200).send(userResponse(user));
    } catch (error) {
        console.log(error);
        return res.status(500).send({message: 'Internal server error', error: error});
    }
}
export { findAllUser, updateUser }