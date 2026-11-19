// fazer gruds que faltaram

const PRISMA = require("../services/script");


async function buscar(req, res) {
    try {
        const query = {};
        const includeObj = {};

        if(req.query.manutencoes === "true") {
            includeObj.historico_manutencao = true;
        }

        if(req.query.historicos === "true") {
            includeObj.historico_imovel = true;
        }

        if(req.query.locatario === "true") {
            includeObj.locatarios = true;
        }

        if(Object.keys(includeObj).length > 0) {
            query.include = includeObj;
        }
        
        

        const linhas = await PRISMA.imoveis.findMany(query);
        res.json(linhas);
    } catch (error) {
        res.json({
            type: "error",
            description: error.message
        });
    }
}

async function criar(req, res) {
    try {
        const dados = req.body;
        const arquivo = req.file;
        await PRISMA.imoveis.create({
            data: {
                ...dados,
                valor_aluguel: Number(dados.valor_aluguel),
                metragem: Number(dados.metragem),
                quartos: Number(dados.quartos),
                suites: Number(dados.suites),
                banheiros: Number(dados.banheiros),
                garagens: Number(dados.garagens),
                imagem: `/uploads/imoveis/${arquivo.filename}`
            }
        });

        res.json({
            type: "success",
            description: "Registro criado com sucesso."
        })

    } catch (error) {
        res.json({
            type: "error",
            description: error.message
        });
    }
}

async function editar(req, res) {
    try {
        const { dados } = req.body;
        const { id } = req.params;


        await PRISMA.imoveis.update({
            where: {
                id
            },
            data: {
                dados
            }
        });

        res.json({
            type: "success",
            description: "Registro atualizado com sucesso."
        })

    } catch (error) {
        res.json({
            type: "error",
            description: error.message
        });
    }
}

async function deletar(req, res) {
    try {
        const { id } = req.params;


        await PRISMA.imoveis.delete({
            where: {
                id
            },
        });

        res.json({
            type: "success",
            description: "Registro apagado com sucesso."
        })

    } catch (error) {
        res.json({
            type: "error",
            description: error.message
        });
    }
}

module.exports = {
    buscar,
    criar,
    editar,
    deletar
}