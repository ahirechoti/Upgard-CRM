import { signup, signIn } from "../controllers/auth.controller.js";

const authSignup = (app) => {
    app.post('/crm/api/v1/auth/signup', signup);

}
const authSignIn = (app) => {
    app.post('/crm/api/v1/auth/signIn', signIn);
}
export  {authSignup, authSignIn};