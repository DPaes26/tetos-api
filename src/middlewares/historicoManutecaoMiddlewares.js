function validarDados(req, res, next) {
    const { descricao, valor, data, imovel_id } = req.body;

    if (!descricao || !valor || !data || !imovel_id) {
        res.json({
            tpe: "warning",
            description: "Coluna 'descricao', 'valor', 'data' ou 'imovel_id' ausente."
        })
    }
    next();
}
module.exports = {
    validarDados
}