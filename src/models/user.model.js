import { Schema, model, models } from 'mongoose';
import bcrypt from 'bcrypt';


/**
 * Define User schema
 */
const userSchema = Schema({
    name: {
        type: String,
        required: true
    },
    userId:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true,
        unique: true,
        lowercase: true
    },
    createdAt:{
        type:Date,
        immutable: true,
        default: ()=>{
            return Date.now();
        }
    },
    createdBy:{
        type:String,
        immutable:true
        
    },
    updatedAt:{
        type:Date
    },
    userType:{
        type:String,
        required:true,
        default: "CUSTOMER"
    },
    userStatus:{
        type:String,
        required:true,
        default:"APPROVED"
    },
    ticketsCreated:{
        type: [
            {type: Schema.Types.ObjectId, ref: 'tickets'}
          ]
    }
},{
    collection : "CRM"
});

userSchema.pre('updateOne', function() {
    this.set({ updatedAt: new Date() });
  });

userSchema.pre('save', function(next){
    //if(err)  return next('Error');
    
    try{
        if(this.password && this.isModified('password')){                                                                                                                                                                                                                                                                                      
            this.password  = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8),null);                                                                                                             
        }
        
        return next();
    }catch(ex){
        //console.log(ex);
        return next(ex);
    }
    });
export default model("users", userSchema);

/**
 * {
    "name": "Abhsihek",
    "userId": "1",
    "password": "paasowrd",
    "email": "email@gmail.com",
    "userType": "BYAA",
    "userStatus": "ACTIVE",
    "_id": "64232d43419d6044c122f27a",
    "createdAt": "2023-03-28T18:09:07.284Z"
}
{
    "name": "HIRECHOTI",
    "userId": "2",
    "password": "paasowrd",
    "email": "email1@gmail.com",
    "userType": "INACTIVE",
    "userStatus": "ACTIVE",
    "_id": "6423300a419d6044c122f27b",
    "createdAt": "2023-03-28T18:20:58.760Z"
}
{
    "name": "SUJATHA",
    "userId": "3",
    "password": "passowrd",
    "email": "email2@gmail.com",
    "userType": "ADMIN",
    "userStatus": "ACTIVE",
    "_id": "6423312e5f7d6c346e3f8d6a",
    "createdAt": "2023-03-28T18:25:51.001Z"
}
 */