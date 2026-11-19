const { buscar, criar, editar, deletar } = require("../controllers/historicoManutencaoController");
const { validarDados } = require("../middlewares/historicoManutecaoMiddlewares");

const rotas = require("express").Router();

rotas.get("/",
    /* 
      #swagger.tags = ['Manutencao']
      #swagger.summary = 'Buscar'
      #swagger.description = 'Retorna um array de Manutencoes cadastrados'
      #swagger.responses[200] = {
          description: 'Lista de Manutencoes retornada com sucesso',
          schema: [{ id: 1, descricao: 'Manutenção preventiva', valor: 100.00, data: '2023-01-01', imovel_id: 1 }]
      }
      #swagger.responses[500] = {
          description: 'Erro interno no servidor'
      }
    */
    buscar);

rotas.post("/",
    /* 
      #swagger.tags = ['Manutencao']
      #swagger.summary = 'Criar'
      #swagger.description = 'Cria um novo histórico de manutenção'
      #swagger.parameters['body'] = { 
          in: 'body', 
          required: true, 
          description: 'Dados para criação do histórico de manutenção',
          schema: { 
              $descricao: 'Manutenção preventiva',
              $valor: 100.00,
              $data: '2023-01-01',
              $imovel_id: 1
          } 
      }
      #swagger.responses[201] = {
          description: 'Registro criado com sucesso',
          schema: { id: 1, descricao: 'Manutenção preventiva', valor: 100.00, data: '2023-01-01', imovel_id: 1 }
      }
      #swagger.responses[400] = {
          description: 'Dados inválidos ou faltando'
      }
      #swagger.responses[500] = {
          description: 'Erro interno no servidor'
      }
    */
    validarDados, criar);

rotas.put("/:id",
    /* 
      #swagger.tags = ['Manutencao']
      #swagger.summary = 'Editar'
      #swagger.description = 'Edita um histórico de manutenção existente pelo ID'
      #swagger.parameters['id'] = {
          in: 'path', 
          required: true, 
          type: 'string',
          description: 'ID do histórico de manutenção (UUID ou numérico)'
      }
      #swagger.parameters['body'] = { 
          in: 'body', 
          required: true, 
          description: 'Novos dados do histórico de manutenção',
          schema: { 
              $descricao: 'Manutenção preventiva',
              $valor: 100.00,
              $data: '2023-01-01',
              $imovel_id: 1 
          } 
      }
      #swagger.responses[200] = {
          description: 'Registro atualizado com sucesso',
          schema: { 
            id: 1, 
            descricao: 'Manutenção preventiva', 
            valor: 100.00, 
            data: '2023-01-01', 
            imovel_id: 1 
          }
      }
      #swagger.responses[400] = {
          description: 'Dados inválidos'
      }
      #swagger.responses[404] = {
          description: 'Registro não encontrado'
      }
      #swagger.responses[500] = {
          description: 'Erro interno no servidor'
      }
    */
    validarDados, editar);

rotas.delete("/:id",
    /* 
      #swagger.tags = ['Manutencao']
      #swagger.summary = 'Deletar'
      #swagger.description = 'Remove um histórico de manutenção pelo ID'
      #swagger.parameters['id'] = {
          in: 'path', 
          required: true, 
          type: 'string',
          description: 'ID do histórico de manutenção que será deletado'
      }
      #swagger.responses[204] = {
          description: 'Registro deletado com sucesso'
      }
      #swagger.responses[404] = {
          description: 'Registro não encontrado'
      }
      #swagger.responses[500] = {
          description: 'Erro interno no servidor'
      }
    */
    deletar);

module.exports = rotas;