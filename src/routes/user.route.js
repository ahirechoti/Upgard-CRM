import { findAllUser } from "../controllers/user.controller.js";
import { verifyToken, verifyAdmin } from "../middlewares/auth.js";
const getUsers = (app) => {
    app.get("/crm/api/v1/Users",[verifyToken, verifyAdmin], findAllUser);
}

export { getUsers }