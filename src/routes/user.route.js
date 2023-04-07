import { findAllUser, updateUser } from "../controllers/user.controller.js";
import { verifyToken, verifyAdmin, checkUserType } from "../middlewares/auth.js";
const getUsers = (app) => {
    app.get("/crm/api/v1/Users",[verifyToken, verifyAdmin], findAllUser);
}
const updateUserDetails = (app) => {
    app.post("/crm/api/v1/userUpdate", [verifyToken, checkUserType], updateUser);
}
export { getUsers, updateUserDetails }