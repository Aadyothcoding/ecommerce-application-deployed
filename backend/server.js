import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import productRoutes from './routes/product.route.js';
dotenv.config();
import path from 'path';



const app= express();



app.use(express.json());
const PORT = process.env.PORT

const __dirname = path.resolve();

app.use("/api/products", productRoutes);

if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname, "frontend/dist")));
    
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html'));
    });
   
    
}
app.listen(PORT,()=>{
    connectDB();
    console.log("Server is running on port 3000");
})