import { Schema } from "mongoose";

const ticketSchema = Schema({
    title:{
        type:String,
        required: true
    },
    description:{
        type: String,
        required: true
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
    ticketPriority:{
        type: Number,
        default: 3
    },
    ticketStatus:{
        type: String,
        required: true
    },
    reporter:{
        type: String,
        required: true
    },
    assignee:{
        type: String
    }
});

export default model("tickets", ticketSchema);