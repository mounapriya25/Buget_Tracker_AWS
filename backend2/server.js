require("dotenv").config();
const path=require("path")
const exp = require("express");
const mg=require("mongoose");
const route=require("./budget_tracker/rout.js")
const cors=require("cors")
console.log("✅ Server is starting...");

// ---- Environment-based config (defaults = local development) ----
const PORT = process.env.PORT || 8000;
const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:3000";

mg.connect(process.env.MONGODB_URI, {
    serverSelectionTimeoutMS:50000,
  }).then(() => console.log("MongoDB connected"))
.catch((err) => console.log("MongoDB connection error:", err));

const app=exp();

app.use(cors({
    origin: [FRONTEND_URL, "http://localhost:3000"],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));
app.use(exp.json())
// category / account icons are served from here
app.use("/images",exp.static(path.join(__dirname,"budget_tracker/img")))

app.use("/",route);

app.listen(PORT,()=>{
    console.log(`connected.. port ${PORT}`);
})
