import express, { urlencoded } from 'express';
import { ConnectDB } from './Database/index.js';
import multer from 'multer';
import dotenv from 'dotenv'
// import dotenv from "dotenv"
import { Login, Register } from './controllers/User.js';
import { upload } from './middleware/multer.js';
import cors from 'cors';
import { GetPropertyById, GetPropertyByLocation, PropertyRegister } from './controllers/Property.js';

dotenv.config({
    path :'.env'
})
const app = express();

//middlewares
app.use(cors({
  origin: '*', 
}));
app.use(express.json({limit: '10mb'}));
app.use(express.urlencoded({extended: true, limit: '10mb'}));
app.use("/Uploads/images", express.static("Upload/images"));

//Routes for user
app.post('/register', upload.single('avatar'), Register);
app.post('/login', Login);


//Routes for property
app.post('/property/register' , upload.single('image') , PropertyRegister)
app.post('/property/search' , GetPropertyByLocation);
app.get('/property/:id', GetPropertyById);

await ConnectDB();

app.listen(4000, () => {
  console.log("server is running at http://localhost/:", 4000);
});
