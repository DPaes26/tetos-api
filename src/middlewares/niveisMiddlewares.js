function validarDados(req, res, next) {
    const { nome } = req.body;
    
    if(!nome){
        res.json({
            tpe: "warning",
            description: "Coluna 'nome' ausente."
        })
    }
    next();
}
    module.exports = {
        validarDados
    }