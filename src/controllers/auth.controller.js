import userModel from '../models/user.model.js';
import create from '../models/user.model.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
/**
 * Sign up API
 */
const signup = async (req, res) => {
  var userType = req.body.userType;
  var userStatus = req.body.userStatus;
  if (userType && userType == 'ENGINEER') {
    userStatus = "PENDING";
  }
  const userObj = {
    name: req.body.name,
    userId: req.body.userId,
    userType: userType,
    password: req.body.password,
    email: req.body.email,
    userStatus: userStatus
  };

  try {
    const user = await create(userObj);

    //To save the document on mongoDB use below .save() method.
    await user.save();
    //console.log(user);
    const result_obj = {
      name: user.name,
      userId: user.userId,
      userType: user.userType,
      email: user.email,
      userStatus: user.userStatus
    }
    // console.log(user);
    res.status(200).send(result_obj);
  } catch (e) {
    //next(e);
    res.status(500).send('Internal server error' + e)
  }
}

/**
 * Signin fucntion
 */
const signIn = async (req, res) => {
  const user = await userModel.findOne({ 'userId': req.body.userId });
  if (!user) {
    return res.status(400).send({ message: 'User does not exists' });
  } else {
    //console.log(user);
    if (user.userStatus != 'APPROVED') {
      return res.status(400).send({ message: 'User can not login.' });
    } else {
      if (bcrypt.compareSync(req.body.password, user.password)) {
        var token = jwt.sign({id: user.userId}, process.env.SECRET, {
          expiresIn: 5000
        });
        //console.log(token);


        return res.status(200).send({ message: 'Login successful', token: token });
      } else {
        return res.status(400).send({ message: 'Incorrect password' });
      }

    }
  }
}
/**
 * JWT token
 */

export {signup, signIn};
