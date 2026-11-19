const { buscar, criar, editar, deletar } = require("../controllers/historicoImovelController");
const { validarDados } = require("../middlewares/historicoImovelMiddlewares");

const rotas = require("express").Router();

rotas.get("/",
    /* 
      #swagger.tags = ['Historico']
      #swagger.summary = 'Buscar'
      #swagger.description = 'Retorna um array de Historicos cadastrados'
      #swagger.responses[200] = {
          description: 'Lista de Historicos retornada com sucesso',
          schema: [{ 
          id: 1, 
          descricao: 'troca de torneira', 
          valor_aluguel: 1000,
          valor_iptu: 100,
          valor_condominio: 200, 
          data_entrada: '2023-01-01', 
          data_saida: '2023-01-01',
          imovel_id: 1 }]
      }
      #swagger.responses[500] = {
          description: 'Erro interno no servidor'
      }
    */
    buscar);

rotas.post("/",
    /* 
      #swagger.tags = ['Historico']
      #swagger.summary = 'Criar'
      #swagger.description = 'Cria um novo histórico'
      #swagger.parameters['body'] = { 
          in: 'body', 
          required: true, 
          description: 'Dados para criação do histórico',
          schema: { 
              $descricao: 'troca de torneira',
              $valor_aluguel: 1000,
              $valor_iptu: 100,
              $valor_condominio: 200,
              $data_entrada: '2023-01-01',
              $data_saida: '2023-01-01',
              $imovel_id: 1,
              $locatario_id: 1
          } 
      }
      #swagger.responses[201] = {
          description: 'Registro criado com sucesso',
          schema: { id: 1, 
          descricao: 'troca de torneira', 
          valor_aluguel: 1000, valor_iptu: 100, 
          valor_condominio: 200, 
          data_entrada: '2023-01-01', 
          data_saida: '2023-01-01', 
          imovel_id: 1, 
          locatario_id: 1 }
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
      #swagger.tags = ['Historico']
      #swagger.summary = 'Editar'
      #swagger.description = 'Edita um histórico existente pelo ID'
      #swagger.parameters['id'] = {
          in: 'path', 
          required: true, 
          type: 'string',
          description: 'ID do histórico (UUID ou numérico)'
      }
      #swagger.parameters['body'] = { 
          in: 'body', 
          required: true, 
          description: 'Novos dados do histórico',
          schema: { 
              $descricao: 'troca de torneira',
              $valor_aluguel: 1000,
              $valor_iptu: 100,
              $valor_condominio: 200,
              $data_entrada: '2023-01-01',
              $data_saida: '2023-01-01',
              $imovel_id: 1,
              $locatario_id: 1
          } 
      }
      #swagger.responses[200] = {
          description: 'Registro atualizado com sucesso',
          schema: { 
            id: 1, 
            descricao: 'troca de torneira', 
            valor_aluguel: 1000,
            valor_iptu: 100,
            valor_condominio: 200,
            data_entrada: '2023-01-01',
            data_saida: '2023-01-01',
            imovel_id: 1,
            locatario_id: 1
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
      #swagger.tags = ['historico']
      #swagger.summary = 'Deletar'
      #swagger.description = 'Remove um histórico pelo ID'
      #swagger.parameters['id'] = {
          in: 'path', 
          required: true, 
          type: 'string',
          description: 'ID do histórico que será deletado'
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