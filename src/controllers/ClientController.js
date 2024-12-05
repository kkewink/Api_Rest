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
    }
};

module.exports = clientController;