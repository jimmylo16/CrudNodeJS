const express= require('express');
const path=require('path');
const morgan=require('morgan') ;
const mysql =require('mysql');
const myConection =require('express-myconnection');
const app= express();


//
const ClientesRoutes = require ('./routes/Clientes')

//Ajustes
app.set('port', process.env.PORT || 3000);
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

//middlewares
app.use(morgan('dev'));
app.use(myConection(mysql, {
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'aviatur'
},'single'));
app.use(express.urlencoded({extended: false})); // para poder enviar los datos del formulario

// routes
app.use('/',ClientesRoutes);

// static files
app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get('port') , ()=>{
    console.log('Server on Port 3000');
});