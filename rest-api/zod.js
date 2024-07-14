const express = require('express');
const app = express();
const port = 3001;

const zod = require('zod'); //import zod for input validation
app.use(express.json());

function validateInput(object){
    const schema = zod.object({
        email: zod.string().email(),
        password: zod.string().min(5)
    })
    const response = schema.safeParse(object);
    console.log(response);

    return schema.safeParse(object);
}

app.post('/login', (req, res) => {
    const response = validateInput(req.body);

    if(!response.success){
        res.json({
            message: "Invalid input"
        })
        return;
    }
    res.json({
        msg: "Valid input"
    })
})

app.listen(port, ()=>{
    console.log(`Port: ${port} is running...`);
})