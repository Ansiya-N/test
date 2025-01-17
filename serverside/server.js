import  express from "express"
const app=express();
import {latestwork} from "./UI-Sections/latestwork.js"
import {testimonial} from"./UI-Sections/testimonial.js"
import  {cardsection} from "./UI-Sections/cardsection.js";



app.get("/cardsection",(req,res)=>{
    res.send(cardsection)
})

app.get("/latestwork",(req,res)=>{
    res.send(latestwork)
})

app.get("/testimonial",(req,res)=>{
    res.send(testimonial)
})



app.listen(3000,()=>{
    console.log("server connected")
})