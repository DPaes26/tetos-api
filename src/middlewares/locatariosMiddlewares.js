function validarDados(req, res, next) {
    const { nome, telefone, cpf_cnpj} = req.body;

    if (!nome) {
        res.json({
            type: "warning",
            description: "Coluna 'nome' ausente."
        })
    }

    if (!telefone) {
        res.json({
            type: "warning",
            description: "Coluna 'telefone' ausente."
        })
    }

    if (!cpf_cnpj) {
        res.json({
            type: "warning",
            description: "Coluna 'cpf_cnpj' ausente."
        })
    }

    next();
}
module.exports = {
    validarDados
}