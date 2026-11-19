const { buscar, criar, editar, deletar } = require("../controllers/imoveisTipoController");
const { validarDados } = require("../middlewares/imoveisTipoMiddlewares");

const rotas = require("express").Router();

rotas.get("/",
    /*
      #swagger.tags = ['Tipos de imóveis']
      #swagger.summary = 'Buscar'
      #swagger.description = 'Retorna os tipos de imóveis cadastrados'
      #swagger.responses[200] = {
          description: 'Lista de tipos de imóveis retornada com sucesso',
          schema: [{ id: '550e8400-e29b-41d4-a716-446655440000', nome: 'Apartamento', createdAt: '2026-11-09T00:00:00.000Z', updatedAt: null }]
      }
    */
    buscar);

rotas.post("/",
    /*
      #swagger.tags = ['Tipos de imóveis']
      #swagger.summary = 'Criar'
      #swagger.description = 'Cria um novo tipo de imóvel'
      #swagger.parameters['body'] = {
          in: 'body',
          required: true,
          description: 'Dados para criação do tipo de imóvel',
          schema: {
              $nome: 'Apartamento'
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
      #swagger.tags = ['Tipos de imóveis']
      #swagger.summary = 'Editar'
      #swagger.description = 'Edita um tipo de imóvel existente pelo ID'
      #swagger.parameters['id'] = {
          in: 'path',
          required: true,
          type: 'string',
          description: 'ID UUID do tipo de imóvel'
      }
      #swagger.parameters['body'] = {
          in: 'body',
          required: true,
          description: 'Novos dados do tipo de imóvel',
          schema: {
              $nome: 'Casa'
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
      #swagger.tags = ['Tipos de imóveis']
      #swagger.summary = 'Deletar'
      #swagger.description = 'Remove um tipo de imóvel pelo ID'
      #swagger.parameters['id'] = {
          in: 'path',
          required: true,
          type: 'string',
          description: 'ID UUID do tipo de imóvel que será deletado'
      }
      #swagger.responses[200] = {
          description: 'Resultado da remoção do registro',
          schema: { type: 'success', description: 'Registro apagado com sucesso.' }
      }
    */
    deletar);

module.exports = rotas;
