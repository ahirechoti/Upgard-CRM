import ticketModel from "../models/ticket.model.js";
import userModel from "../models/user.model.js";
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
        if (!ticket.title || !ticket.description) {
            return res.status(400).send({
                message: 'Bad request'
            })
        }
        //console.log(ticket);
        const tik = await ticketModel(ticket);
        await tik.save();
        if (tik) {
            //get User and push ticket;
            //console.log(req.currentUser);

            const user = await userModel.findOne({ 'userId': req.currentUser.userId });
            //console.log(user);
            user.ticketsCreated.push(tik._id);
            await user.save();
        }

        res.status(200).send(ticketObject(tik));
    } catch (error) {
        console.error(error);
        res.status(500).send({
            message: 'Internal server error'
        })
    }
}
const deleteTicket = async (req, res) => {
    try {

    } catch (error) {
        res.status(500).send({
            message: 'Internal server error'
        })
    }
}
const getTickets = async (req, res) => {
    try {
        const ticketNo = req.query.ticket;
        const queryParam = {}
        if(ticketNo){
            queryParam['_id'] = ticketNo;
        }
       // console.log(queryParam, req.query);
        const tickets = await ticketModel.find(queryParam);
        res.status(200).send(tickets);
    } catch (error) {
        console.error(error)
        res.status(500).send({
            message: 'Internal server error'
        })
    }
}
const updateTicket = async (req, res) => {
    try {

    } catch (error) {
        res.status(500).send({
            message: 'Internal server error'
        })
    }
}
export { createTicket, updateTicket, deleteTicket, getTickets };