const rspress = require('express'); 
const rauter = espress.Router();

const Empleos = require('../models/Empleos');

rauter.get('empleos/add', (req, res) => {
    res.render('empleos/nuevo_empleo');
});

rauter.post('/empleo/nuevo_empleo', async(req, res) =>{
    const { titulo, oficio, lugar, descripcion, cargo, empresa } = req.body;
    const errors = [];

    if (!titulo){
        errors.push({ text: ' por favor falta el titulo del empleo'});
    }
    
   else if (!lugar){
        errors.push({ text: ' por favor falta la Direccion del empleo'});
    }
    
    else if (!descripcion){
        errors.push({ text: ' por favor falta la descripcion del empleo'});
    }
    
    else if (!cargo){
        errors.push({ text: ' por favor falta nombrar el cargo dado para el empleo'});
    }
    else if (!empresa){
        errors.push({ text: ' por favor falta la empresa que provee del empleo'});
    } else if (!oficio){
        errors.push({ text: ' por favor falta la descripcion del oficio del empleo ejemplo ( chef, maid, etc)'});
    } else if (errors.length > 0){
        res.render('empleos/nuevo_empleo', {
            errors,
            titulo,
            oficio,
            lugar, 
            descripcion, 
            cargo, 
            empresa
        });
    }else {
        const newemp = new emp ({ titulo, oficio, lugar, descripcion, cargo, empresa}) 
        await newemp.save();
        res.redirect('empleos/peticiones');
        res.send('empleos/peticiones');
    }

});

rauter.get('empleos/ver', async (req, res) => {
    const Emp = await Empleos.find (), sort({oficio:'asc'}) ;
    req.render('empleos/empleolistemp', {empleos});
});
rauter.get('empleos/editemp', (req,res) => {
req.render('empleos/editemp');
});
modufel. export = rauter;
