import { ticketModel } from "../models/ticket.model.js";
import { ticketObject } from "../utils/user.util.js";
const createTicket = async (req, res) => {
    try {
        const ticket = {
            title: req.body.title,
            description: req.body.description,
            ticketPriority: req.body.ticketPriority || 3,
            ticketStatus: 'Created',
            assignee: req.body.assignee || '',
            reporter: req.currentUser.name
        }
        if(!ticket.title || !ticket.description){
            return res.status(400).send({
                message: 'Bad request'
            })
        }
        const tik = await ticketModel.create(ticket);
        tik.save();
        res.status(200).send(ticketObject(tik));
    } catch (error) {
        res.status(500).send({
            message:'Internal server error'
        })
    }
}
const deleteTicket = async (req, res) => {
    try {
        
    } catch (error) {
        res.status(500).send({
            message:'Internal server error'
        })
    }
}
const getTickets = async (req, res) => {
    try {
        
    } catch (error) {
        res.status(500).send({
            message:'Internal server error'
        })
    }
}
const updateTicket = async (req, res) => {
    try {
        
    } catch (error) {
        res.status(500).send({
            message:'Internal server error'
        })
    }
}
export {createTicket, updateTicket, deleteTicket, getTickets};