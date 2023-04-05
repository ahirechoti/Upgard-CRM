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

export { findAllUser }