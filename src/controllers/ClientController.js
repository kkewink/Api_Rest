const clientService = require("../services/clientService");

const clientController = {
    create: async(req,res) =>{
        try {
            const data = {
                nome: req.body.nome,
                email: req.body.email,
            }

            const client = await clientService.create(data);

            return res.status(201).json({
                msg:"Client criado com sucesso",
                client,
            });

        } catch (error) {
            console.error(error);
            return res.status(500).json({
                msg:'Erro ao tentar criar o Client'
            });
        }
    },
    update: async(req,res) =>{
        try{
            const {id} = req.params;
            
            const data = {
                nome:req.body.nome,
                email: req.body.email
            }

            const client = await clientService.update(id,data);

            if(!client){
                return res.status(400).json({
                    msg:'Cliente não encontrado'
                });
            }

            return res.status(200).json({
                msg:"Cliente atualizado com sucesso",
            })
        } catch(error){
            return res.status(500).json({
                msg:'Erro ao atualizaro o Client'
            });
        }
    },
    getAll: async(req,res) =>{
        try {
            const clients = await clientService.getAll();

            return res.status(200).json({
                msg:'Todos os clientes',
                clients
            });
        } catch (error) {
            return res.status(500).json({
                msg: 'Ocorreu um erro no Servidor'
            });
        }
    },
    getOne: async(req,res) =>{

    },
    
};

module.exports = clientController;