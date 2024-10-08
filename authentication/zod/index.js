const express = require('express');
const zod = require('zod');
const app = express();

// const schema = zod.array(zod.number());

const schema = zod.object({
    email: zod.string().email(),
    password: zod.string(),
    country: zod.literal("BAN").or(zod.literal("CAN")),
    kidney: zod.array(zod.number())
});

app.use(express.json());

app.post('/health', (req, res)=>{
    const kidney = req.body.kidney;
    const response = schema.safeParse(req.body);

    if(!response.success){
        res.status(411).json({
            msg: "Invalid input"
        })
    }
    else{
        res.send({
            response
        })
    }
    
});

app.listen(3001);