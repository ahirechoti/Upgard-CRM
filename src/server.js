import express, { json } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';
import path from 'path'

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3030;

mongoose.connect(process.env.MONGOCLIENT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'test'
});
const db = mongoose.connection;
db.once("open", () => {
    console.log('db connected')
})
db.on("error", (e) => {
    console.error("error connecting db", e);
    process.exit();
})
app.use(express.json());
app.use(cors());
import { authSignup, authSignIn } from './routes/auth.router.js';
//sign up
authSignup(app);
//sign in
authSignIn(app);
import { getUsers, updateUserDetails } from './routes/user.route.js';
//get Users list.
getUsers(app);
//update user details
updateUserDetails(app);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
})
app.listen(PORT, () => {
    console.log(`CRM listening at http://localhost:${PORT}/`);
});
//export default app;