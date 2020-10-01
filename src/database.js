const mon = required('mongoose');

mon.connect('mongodb+srv://Empleate:1234@empleate.wumxo.gcp.mongodb.net/Empleate?retryWrites=true&w=majority',
{
    useCreateindex: true,
    useNewUrlParser: true,
    useFindAndModify: false
}).then (bd => console.log('Db is conected')).catch(err => console.error(err)); 