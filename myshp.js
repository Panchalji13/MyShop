import express from "express";
import AdminRouter from "./Routers/admin.route.js";

const app = express;
app.use("/admin",AdminRouter);

app.listen(3000,()=>{
    console.log("server start..............");
})