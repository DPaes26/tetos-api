const { buscar, criar, editar, deletar } = require("../controllers/locatariosController");
const { validarDados } = require("../middlewares/locatariosMiddlewares");

const rotas = require("express").Router();
rotas.get("/",
    /*
      #swagger.tags = ['Locatários']
      #swagger.summary = 'Buscar'
      #swagger.description = 'Retorna os locatários cadastrados'
      #swagger.responses[200] = {
          description: 'Lista de locatários retornada com sucesso',
          schema: [{ id: '550e8400-e29b-41d4-a716-446655440000', nome: 'Maria Silva', telefone: '(11) 99999-0000', cpf_cnpj: '12345678900', createdAt: '2026-11-09T00:00:00.000Z', updatedAt: null }]
      }
    */
    buscar);

rotas.post("/",
    /*
      #swagger.tags = ['Locatários']
      #swagger.summary = 'Criar'
      #swagger.description = 'Cria um novo locatário'
      #swagger.parameters['body'] = {
          in: 'body',
          required: true,
          description: 'Dados para criação do locatário',
          schema: {
              $nome: 'Maria Silva',
              $telefone: '(11) 99999-0000',
              $cpf_cnpj: '12345678900'
          }
      }
      #swagger.responses[200] = {
          description: 'Resultado da criação do registro',
          schema: { type: 'success', description: 'Registro criado com sucesso.' }
      }
    */
    validarDados, criar);

rotas.put("/:id",
    /*
      #swagger.tags = ['Locatários']
      #swagger.summary = 'Editar'
      #swagger.description = 'Edita um locatário existente pelo ID'
      #swagger.parameters['id'] = { in: 'path', required: true, type: 'string', description: 'ID UUID do locatário' }
      #swagger.parameters['body'] = {
          in: 'body',
          required: true,
          description: 'Dados do locatário a atualizar',
          schema: {
              $dados: {
                  nome: 'Maria Silva',
                  telefone: '(11) 99999-0000',
                  cpf_cnpj: '12345678900'
              }
          }
      }
      #swagger.responses[200] = {
          description: 'Resultado da atualização do registro',
          schema: { type: 'success', description: 'Registro atualizado com sucesso.' }
      }
    */
    editar);

rotas.delete("/:id",
    /*
      #swagger.tags = ['Locatários']
      #swagger.summary = 'Deletar'
      #swagger.description = 'Remove um locatário pelo ID'
      #swagger.parameters['id'] = { in: 'path', required: true, type: 'string', description: 'ID UUID do locatário que será deletado' }
      #swagger.responses[200] = {
          description: 'Resultado da remoção do registro',
          schema: { type: 'success', description: 'Registro apagado com sucesso.' }
      }
    */
    deletar);

module.exports = rotas;
