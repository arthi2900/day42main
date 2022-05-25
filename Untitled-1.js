/* DEMO
console.log("hi");
import express from "express";
import{MongoClient} from "mongodb";
const MONGO_URL="mongodb://localhost";
//const express=require("express");
const app= express();
async function createConnection(){
    const client=new MongoClient(MONGO_URL);
    await client.connect();
   console.log("mongodb connected");
}
createConnection();
app.get("/",function(req,res){
    res.send("hi all");
})

app.listen(5000);*/
/*
console.log("hi");
import express from "express";
import{MongoClient} from "mongodb";
const MONGO_URL="mongodb://localhost";
//const express=require("express");

const app= express();
app.use(express.json());
 async function createConnection(){
    const client=new MongoClient(MONGO_URL);
      await client.connect();
      //const db=client.db("datatable");
       console.log("mongodb connected");
      
//db.createCollection("mentor");  */
return client;
}
const client=await createConnection();
app.get("/",function(req,res){
       res.send("hi all");
})
app.post("/mentor", async function (req, res) 
{// db.movies.insertMany(data)
    const data = req.body;
    console.log(data);
    //create a db,table
    const result = await client.db("datalist1")
    .collection("mentor").insertMany(data);
    res.send(result);});

app.post("/student", async function (req, res) 
{// db.movies.insertMany(data)
    const data1 = req.body;
    console.log(data1);
    //create a db,table
    const result = await client.db("datalist1")
    .collection("student").insertMany(data1);
    res.send(result);});

    //find only display 1-id
 /*   app.get("/student/:id",async function(req,res){
        console.log(req.params);
        const{id}=req.params;
        //const stud=student.find((mv)=>mv.id === id);
        const result1 = await client.db("datalist1")
        .collection("student").findOne({id:"1"});
        res.send(result1);});
*/
        app.get("/student/:id",async function(req,res){
            console.log(req.params);
            const{id}=req.params;
            //const stud=student.find((mv)=>mv.id === id);
            const result1 = await client.db("datalist1")
            .collection("student").find({id:id});
            res.send(result1);});
            //
 //find all send
 //DISPLAY DEVA MENTOR AND STUDENT
 app.get("/student",async function(req,res){
       //const stud=student.find((mv)=>mv.id === id);
    const result2 = await client.db("datalist1")
    .collection("student").find({tname: "Deva"}).toArray();
    res.send(result2);
});

app.put("/student/:id",async function(req,res){
    console.log(req.params);
    const {id}=req.params;
    const upadateData=req.body;
    //const stud=student.find((mv)=>mv.id === id);
    const result1 = await client.db("datalist1")
    .collection("student").updateOne({id:id},{$set: upadateData});
    res.send(result1);});


app.listen(5000);
*/