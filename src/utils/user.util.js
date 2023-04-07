const userResponse = (users) => {
    let userResult = [];
    if(Array.isArray(users)){
        users.forEach(user => {
            userResult.push({
                "name": user.name,
                "userId": user.userId,
                //"password": "$2b$10$dDxbYwznxDBucY4ELpsr3.UoP8pPilnvUG3GQbsnMfKWro3vywuiS",
                "email": user.email,
                "userType": user.userType,
                "userStatus": user.userStatus,
                "createdAt": user.createdAt,
                "ticketCreated": user.ticketCreated,
                "ticketAssigned": user.ticketAssigned
            })
        });
    }else if(users){
        
        userResult.push({
            "name": users.name,
            "userId": users.userId,
            //"password": "$2b$10$dDxbYwznxDBucY4ELpsr3.UoP8pPilnvUG3GQbsnMfKWro3vywuiS",
            "email": users.email,
            "userType": users.userType,
            "userStatus": users.userStatus,
            "createdAt": users.createdAt,
            "ticketCreated": users.ticketCreated,
            "ticketAssigned": users.ticketAssigned
        })
    }
    
    return userResult;
}
const ticketObject = (ticket) => {
    return {
        title: ticket.title,
        description: ticket.description,
        ticketPriority: ticket.ticketPriority,
        ticketStatus: ticket.ticketStatus,
        assignee: ticket.assignee,
        reporter: ticket.reporter,
        id: ticket._id,
        createdAt : ticket.createdAt,
        updatedAt: ticket.updatedAt
    }
}
export {userResponse, ticketObject};