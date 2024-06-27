const express = require("express");
const users = require("./MOCK_DATA.json");
const fs = require("fs");

const app = express();
const port = 3000;

//Middleware
app.use(express.urlencoded({extended: false}));

//Routes
//Render html document
app.get('/users', function(req,res){
    const html = `
    <ul>
        ${users.map((user) => `<li>${user.first_name}</li>`)}
    </ul>
    `; 
    res.send(html);
});

// REST API
app.get('/api/users', function(req,res){
    return res.json(users);
});

app.route('/api/users/:id')
    .get(function(req,res){
        const id = Number(req.params.id);
        const user = users.find(user => user.id === id); //getting user index
        const userIndex = users.findIndex(user => user.id === id);//checking if user exits
        if(userIndex == -1){
            return res.status(404).json({
                status: 'error',
                message: 'User not found'
            })
        }
        return res.json(user);
    })

    .patch(function(req,res){
        //Edit user with id
        return res.json({status: "pending.."});
    })

    .delete(function(req,res){
        //Delete user with id
        const id = Number(req.params.id); //getting the user id
        const userIndex = users.findIndex(user => user.id === id);//finding index of that user id
        if(userIndex == -1){ //if user not present
            return.status(404).json({
                status: 'Erro',
                message: 'User not found!'
            });
        }
        users.splice(userIndex, 1); //removing user
        
    });

    app.post('/api/users', function(req,res){
        //create new user
        const body = req.body; //get data that has been sent from frontend
        //console.log(body);
        users.push({...body, id: users.length+1});
        fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err,data)=>{
            return res.json({
                status: 'successful', 
                id: users.length
            });
        });
        
    });




app. listen(port, ()=> console.log(`PORT:${port} has started...`));