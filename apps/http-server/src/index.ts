import express from "express";
import {client} from "@repo/db/client";

const app=express();
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Hello World");
})

app.post("/signup",async(req,res)=>{
    const username=req.body.username;
    const password=req.body.password;
    const userId=await client.user.create({
        data: {
            username,
            password
        }
    });

    res.json({
        message: "Signup successful",
        id: userId
    });
});

app.listen(3001, () => {
  console.log("Server is running on port 3000");
});
