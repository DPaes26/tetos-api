const { buscar, criar, editar, deletar } = require("../controllers/usuariosController");
const { usuarioAutenticado } = require("../middlewares/usuariosMiddlewares");

const rotas = require("express").Router();

rotas.get("/",
    /*
      #swagger.tags = ['Usuários']
      #swagger.summary = 'Buscar'
      #swagger.description = 'Retorna os usuários cadastrados sem expor suas senhas'
      #swagger.responses[200] = {
          description: 'Lista de usuários retornada com sucesso',
          schema: [{ id: '550e8400-e29b-41d4-a716-446655440000', nome: 'João Silva', email: 'joao@example.com', createdAt: '2026-11-09T00:00:00.000Z', updatedAt: null, nivel_id: '550e8400-e29b-41d4-a716-446655440001', nivel: { nome: 'Admin' } }]
      }
    */
    buscar);

rotas.post("/",
    /*
      #swagger.tags = ['Usuários']
      #swagger.summary = 'Criar'
      #swagger.description = 'Cria um usuário e armazena a senha criptografada'
      #swagger.parameters['body'] = {
          in: 'body',
          required: true,
          description: 'Dados para criação do usuário',
          schema: {
              $nome: 'João Silva',
              $email: 'joao@example.com',
              $senha: 'senha-segura',
              $nivel_id: '550e8400-e29b-41d4-a716-446655440001'
          }
      }
      #swagger.responses[200] = {
          description: 'Resultado da criação do registro',
          schema: { type: 'success', description: 'Registro criado com sucesso.' }
      }
    */
    criar);

rotas.put("/:id",
    /*
      #swagger.tags = ['Usuários']
      #swagger.summary = 'Editar'
      #swagger.description = 'Edita um usuário existente pelo ID; se informada, a senha é criptografada'
      #swagger.parameters['id'] = { in: 'path', required: true, type: 'string', description: 'ID UUID do usuário' }
      #swagger.parameters['body'] = {
          in: 'body',
          required: true,
          description: 'Campos do usuário a atualizar',
          schema: {
              nome: 'João Silva',
              email: 'joao@example.com',
              senha: 'nova-senha-segura',
              nivel_id: '550e8400-e29b-41d4-a716-446655440001'
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
      #swagger.tags = ['Usuários']
      #swagger.summary = 'Deletar'
      #swagger.description = 'Remove um usuário pelo ID'
      #swagger.parameters['id'] = { in: 'path', required: true, type: 'string', description: 'ID UUID do usuário que será deletado' }
      #swagger.responses[200] = {
          description: 'Resultado da remoção do registro',
          schema: { type: 'success', description: 'Registro apagado com sucesso.' }
      }
    */
    deletar);

module.exports = rotas;
