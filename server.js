const express = require('express'); 
const cors = require('cors');       
require('dotenv').config();         
const connectDB = require('./config/db'); 

const app = express(); 

connectDB(); 

app.use(cors());           
app.use(express.json());    

app.use('/api/items', require('./routes/items')); 

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
