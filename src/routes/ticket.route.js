import { createTicket, getTickets, deleteTicket, updateTicket } from "../controllers/ticket.controller.js";
import { checkUserType, verifyAdmin, verifyToken} from "../middlewares/auth.js";
const createTick = (app) => {
    app.post('/crm/v1/api/ticket',[verifyToken], createTicket);
}
const getTick = (app) => {
    app.get('/crm/v1/api/tickets/:ticket?',[verifyToken, checkUserType], createTicket);
}
const updateTick = (app) => {
    app.post('/crm/v1/api/updateTicket',[verifyToken, checkUserType], createTicket);
}
const deleteTick = (app) => {
    app.post('/crm/v1/api/deleTicket',[verifyToken, verifyAdmin], createTicket);
}
export {createTick, getTick, updateTick, deleteTick}