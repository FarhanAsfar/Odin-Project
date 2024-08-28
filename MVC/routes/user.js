const express = require("express");

const router = express.Router();


router.get('/', function(req,res){
    return res.json(users);
});

router.route('/:id')
    .get(function(req,res){
        const id = Number(req.params.id);
        const user = users.find(user => user.id === id); //getting user index
        const userIndex = users.findIndex(user => user.id === id);//checking if user exits
        if(userIndex == -1){
            return res.status(404).json({
                status: 'error',
                message: 'User not found'
            });
        }
        return res.json(user);
    })

    .patch(function(req,res){
        //Edit user's information
        const id = Number(req.params.id); //fetch user id from request
        const userIndex = users.findIndex(user => user.id === id); //get user index 

        const body = req.body; //get new user data from request
        
        if(userIndex == -1){ //check if user exist
            return res.status(404).json({
                status: 'Error',
                message: 'User not found!'
            });
        }
        
        users[userIndex] = {...users[userIndex], ...body}; //updating the user with new user data

        const updateUsersJson = JSON.stringify(users, null, 2); //convert updated users array to JSON string

        fs.writeFile('./MOCK_DATA.json', updateUsersJson, (writeErr)=>{
            if(writeErr){
                return res.status(500).json({
                    status: 'Error',
                    message: 'Internal Server Error'
                });
            }
            return res.json({
                status: 'Succesful',
                message: 'User updated',
                user: users[userIndex]
            });
        });

    })

    .delete(function(req,res){
        //Delete user with id
        const id = Number(req.params.id); //getting the user id
        const userIndex = users.findIndex(user => user.id === id);//finding index of that user id
        if(userIndex == -1){ //if user not present
            return res.status(404).json({
                status: 'Error',
                message: 'User does not exist!'
            });
        }
        const deletedUser = users[userIndex]; //keeping info of the deleted user

        users.splice(userIndex, 1); //removing user

        //update the text file(user list)
        const updateUsersJson = JSON.stringify(users, null, 2); //JSON: global object

        fs.writeFile('./MOCK_DATA.json', updateUsersJson, (writeErr)=>{
            if(writeErr){
                return res.status(500).json({
                    status: 'Error',
                    message: `Couldn't update users list`
                })
            }
            return res.json({
                status: 'Succesful',
                message: 'User deleted',
                user: deletedUser
            })
        });
    });

    router.post('/', function(req,res){
        //create new user
        const body = req.body; //get data that has been sent from frontend
        //console.log(body);

        if(!body.first_name || !body.last_name || !body.email || !body.gender || !body.job_title){
            return res.status(400).json({
                Error: "Fill up all the fields"
            })
        }
        const newUserId = users[users.length-1].id+1;
        users.push({...body, id: newUserId});

        fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err,data)=>{
            return res.status(201).json({
                status: 'successful', 
                id: newUserId,
                user: body
            });
        });
        
    });


//global catches -> error handling middleware
router.use((err, req, res, next) => { // will be called if there is any exception above
    res.json({
        message: "Server is not responding"
    })
});


module.exports = router;