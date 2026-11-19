const { buscar, criar, editar, deletar } = require("../controllers/imoveisController");
const { validarDados } = require("../middlewares/imoveisMiddlewares");
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/imoveis')
    },
    filename: function (req, file, cb) {
        const nome = path.basename(file.originalname);
        cb(null, `${Date.now()}-${nome}`);
    }
});

const upload = multer({
    storage,
    limits: {
        fileSize: 5 * 1024 * 1024
    },
    fileFilter: (_, file, callback) => {
        const tiposAceitos = ["image/jpeg", "image/png", "image/webp", "image/jpg"];
        if (!tiposAceitos.includes(file.mimetype)) {
            callback(new Error("Tipo de arquivo não permitido. Envie apenas imagens."));
            return;
        }
        callback(null, true);
    }
});

const rotas = require("express").Router();

rotas.get("/",
    /*
      #swagger.tags = ['Imóveis']
      #swagger.summary = 'Buscar'
      #swagger.description = 'Retorna os imóveis cadastrados'
      #swagger.responses[200] = {
          description: 'Lista de imóveis retornada com sucesso',
          schema: [{ id: '550e8400-e29b-41d4-a716-446655440000', matricula: null, bairro: 'Centro', cidade: 'São Paulo', estado: 'SP', numero: '100', complemento: null, cep: '01000-000', valor_aluguel: 2500, iptu: null, valor_condominio: null, metragem: 75, quartos: 2, suites: 1, banheiros: 2, garagens: null, tipo_id: '550e8400-e29b-41d4-a716-446655440001', locatario_id: null, createdAt: '2026-11-09T00:00:00.000Z', updatedAt: null, logradouro: 'Rua Exemplo', imagem: '/uploads/imoveis/imagem.jpg' }]
      }
    */
    buscar);

rotas.post("/",
    /*
      #swagger.tags = ['Imóveis']
      #swagger.summary = 'Criar'
      #swagger.description = 'Cria um imóvel e recebe sua imagem em upload'
      #swagger.consumes = ['multipart/form-data']
      #swagger.parameters['logradouro'] = { in: 'formData', required: true, type: 'string', description: 'Logradouro do imóvel' }
      #swagger.parameters['bairro'] = { in: 'formData', required: true, type: 'string', description: 'Bairro do imóvel' }
      #swagger.parameters['cidade'] = { in: 'formData', required: true, type: 'string', description: 'Cidade do imóvel' }
      #swagger.parameters['estado'] = { in: 'formData', required: true, type: 'string', description: 'UF do imóvel' }
      #swagger.parameters['numero'] = { in: 'formData', required: true, type: 'string', description: 'Número do imóvel' }
      #swagger.parameters['cep'] = { in: 'formData', required: true, type: 'string', description: 'CEP do imóvel' }
      #swagger.parameters['valor_aluguel'] = { in: 'formData', required: true, type: 'number', description: 'Valor do aluguel' }
      #swagger.parameters['metragem'] = { in: 'formData', required: true, type: 'number', description: 'Metragem do imóvel' }
      #swagger.parameters['quartos'] = { in: 'formData', required: true, type: 'integer', description: 'Quantidade de quartos' }
      #swagger.parameters['suites'] = { in: 'formData', required: true, type: 'integer', description: 'Quantidade de suítes' }
      #swagger.parameters['banheiros'] = { in: 'formData', required: true, type: 'integer', description: 'Quantidade de banheiros' }
      #swagger.parameters['tipo_id'] = { in: 'formData', required: true, type: 'string', description: 'UUID do tipo de imóvel' }
      #swagger.parameters['matricula'] = { in: 'formData', type: 'integer', description: 'Matrícula do imóvel' }
      #swagger.parameters['complemento'] = { in: 'formData', type: 'string', description: 'Complemento do endereço' }
      #swagger.parameters['iptu'] = { in: 'formData', type: 'number', description: 'Valor do IPTU' }
      #swagger.parameters['valor_condominio'] = { in: 'formData', type: 'number', description: 'Valor do condomínio' }
      #swagger.parameters['garagens'] = { in: 'formData', type: 'integer', description: 'Quantidade de vagas de garagem' }
      #swagger.parameters['locatario_id'] = { in: 'formData', type: 'string', description: 'UUID do locatário, se houver' }
      #swagger.parameters['imagem'] = { in: 'formData', required: true, type: 'file', description: 'Imagem JPEG, PNG ou WEBP (máximo de 5 MB)' }
      #swagger.responses[200] = {
          description: 'Resultado da criação do registro',
          schema: { type: 'success', description: 'Registro criado com sucesso.' }
      }
    */
    upload.single('imagem'), validarDados, criar);

rotas.put("/:id",
    /*
      #swagger.tags = ['Imóveis']
      #swagger.summary = 'Editar'
      #swagger.description = 'Edita um imóvel existente pelo ID'
      #swagger.parameters['id'] = { in: 'path', required: true, type: 'string', description: 'ID UUID do imóvel' }
      #swagger.parameters['body'] = {
          in: 'body',
          required: true,
          description: 'Dados do imóvel a atualizar',
          schema: {
              $dados: {
                  matricula: 123,
                  bairro: 'Centro',
                  cidade: 'São Paulo',
                  estado: 'SP',
                  numero: '100',
                  complemento: 'Apto 12',
                  cep: '01000-000',
                  valor_aluguel: 2500,
                  iptu: 100,
                  valor_condominio: 500,
                  metragem: 75,
                  quartos: 2,
                  suites: 1,
                  banheiros: 2,
                  garagens: 1,
                  tipo_id: '550e8400-e29b-41d4-a716-446655440001',
                  locatario_id: '550e8400-e29b-41d4-a716-446655440002',
                  logradouro: 'Rua Exemplo',
                  imagem: '/uploads/imoveis/imagem.jpg'
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
      #swagger.tags = ['Imóveis']
      #swagger.summary = 'Deletar'
      #swagger.description = 'Remove um imóvel pelo ID'
      #swagger.parameters['id'] = { in: 'path', required: true, type: 'string', description: 'ID UUID do imóvel que será deletado' }
      #swagger.responses[200] = {
          description: 'Resultado da remoção do registro',
          schema: { type: 'success', description: 'Registro apagado com sucesso.' }
      }
    */
    deletar);

module.exports = rotas;
