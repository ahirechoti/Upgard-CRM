const userResponse = (users) => {
    let userResult = [];
    users.forEach(user => {
        userResult.push({
            "name": user.name,
            "userId": user.userId,
            //"password": "$2b$10$dDxbYwznxDBucY4ELpsr3.UoP8pPilnvUG3GQbsnMfKWro3vywuiS",
            "email": user.email,
            "userType": user.userType,
            "userStatus": user.userStatus,
            "createdAt": user.createdAt
        })
    });
    return userResult;
}
export {userResponse};