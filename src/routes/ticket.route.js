import { createTicket, getTickets, deleteTicket, updateTicket } from "../controllers/ticket.controller.js";
import { checkUserType, verifyAdmin, verifyToken} from "../middlewares/auth.js";
const createTick = (app) => {
    app.post('/crm/api/v1/ticket',[verifyToken], createTicket);
}
const getTick = (app) => {
    app.get('/crm/api/v1/tickets/:ticket?',[verifyToken, checkUserType], getTickets);
}
const updateTick = (app) => {
    app.post('/crm/api/v1/updateTicket',[verifyToken, checkUserType], updateTicket);
}
const deleteTick = (app) => {
    app.post('/crm/api/v1/deleTicket',[verifyToken, verifyAdmin], deleteTicket);
}
export {createTick, getTick, updateTick, deleteTick}