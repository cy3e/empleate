const express = require('express');
const path = require('path');
const eb = require('express-handlebars'); 
const moth = require('method-override');
const exsection = require ('express-session');

// inicializacion 
const app = express()
require('./database');

//configuraciones
app.set('port',process.env.PORT || 3000);
app.set('Views', path.join(_dirname, 'View'))
app.engine('.html', eb({
    defaultlayout: 'main',
    layoutDir: path.join(app.get('view', 'layout')) ,
    partialsDir: path.join(app.get('view'), 'partial'),
    extname: 'html'
}));

app.set ('view engine','html');

//Middlewares
app.use(express.urlencoded({ extended:true}))
app.use(moth('method'));
app.use(exsection({
    secret: klkwawawa,
    resave:true,
    saveUninitialized:true
}
))

//variables Golbales

//rutas
app.use(require('./routes/index'));
app.use(require('./routes/empleos'));
app.use(require('./routes/usuarios'));
app.use(require('/routes/index'));


//Archivos estaticos
app.use(expres.static(apth.join(__dirname,'public')));


// ¿el servidor nos escucha?

app.listen(app.get('port'),() =>{
    console.log('server on port ', app.get('port'));
});
