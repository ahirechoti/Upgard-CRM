import jwt from "jsonwebtoken";
import userModel from "../models/user.model.js";

const verifyToken = async (req, res, next) => {
    
    try{
        let token = req.headers['x-access-token'];
        if(!token){
            return res.status(403).send({
                message: 'Token required'
            });
        }
        jwt.verify(token, process.env.SECRET, (err, data)=>{
            if(err){
                return res.status(401).send({
                    message: 'Unauthorized'
                });
            }
            req.currentUser = data.user;
            next();
        });
        
        
    }catch(ex){
        next(ex);
    }
}

const verifyAdmin = async (req, res, next) => {
    try {
        const user = await userModel.findOne({"userId": req.currentUser.userId});
        if(user && user.userType == 'ADMIN'){
            next();
        }else{
            return res.status(401).send({
                message: 'Unauthorized'
            });
        }
    } catch (error) {
        return res.status(500).send({
            message:'Internal server error'
        });
    }
}

const checkUserType = async (req, res, next) => {
    try {
        const user = await userModel.findOne({"userId": req.currentUser.userId});
        if(user && user.userType == 'ADMIN'){
            next();
        }else if(user && (["ENGINEER", "CUSTOMER"].indexOf(user.userType) != -1) &&
        req.currentUser.userId == req.params.userId){
            next();
        }else{
            return res.status(403).send({
                message: 'You are not the owner'
            });
        }
    } catch (error) {
        return res.status(500).send({
            message:'Internal server error'
        });
    }
}

export { verifyToken, verifyAdmin, checkUserType }