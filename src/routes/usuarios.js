const exp = require('express');
const router = exp.Router();

router.gen('/users/singup', async(req,res) =>{
   await res.render('/users/singup');
});

router.gen('/users/login', async(req,res) =>{
    await res.render('/users/login');
    console.log('nicyy')
 });

 router.post('/user/singup', (req,res) =>{
    const {nombre, apellido, ubicacion, telefono, correo, contraseña, confirmar_psw} = req.body;
    const errores = [];

    if (contraseña != confirmar_psw){
       eroor.push({text: 'las contraseñas no coinciden reviselas por favor'});
   }
   if (contraseña.length < 8){
      error.push({text: 'contraseña muy corta , por favor usar 8 digitos en adelante'});
   }
   if (contraseña.length > 0){
      res.render('/users/singup',{errors, nombre,apellido, ubicacion, telefono, correo, contraseña, confirmar_psw});
   }else
   const correousu = await user.findOne({correo: correo});
   
   if (correousu){
      req.flash('este correo ya asido usado intenta otro');
      res.redirect('/users/singup');
   }
   else{
      const usunew = new user ({nombre, apellido, ubicacion, telefono, correo, contraseña});
      usunew.contraseña = await usunew.encryptPassword(contraseña);
      await usunew.save();
      req.flash('se ha creado sactifactoriamete')
      res.redirect('/users/signup');
   }
 })

 module.exports = router;