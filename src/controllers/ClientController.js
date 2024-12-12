const clientService = require("../services/clientService");

const clientController = {
    create: async (req, res) => {
        try {
            const data = {
                nome: req.body.nome,
                email: req.body.email,
            }

            const client = await clientService.create(data);

            if (client.error) {
                return res.status(client.code).json({
                    code: client.code,
                    message: client.error.message
                })
            }

            return res.status(client.code).json({
                msg: client.message,
                client: client.client
            });

        } catch (error) {
            console.error(error);
            return res.status(500).json({
                msg: 'Erro ao tentar criar o Client'
            });
        }
    },
    update: async (req, res) => {
        try {
            const { id } = req.params;

            const data = {
                nome: req.body.nome,
                email: req.body.email
            }

            const client = await clientService.update(id, data);

            if (!client) {
                return res.status(400).json({
                    msg: 'Cliente não encontrado'
                });
            }

            return res.status(200).json({
                msg: "Cliente atualizado com sucesso",
            })
        } catch (error) {
            return res.status(500).json({
                msg: 'Erro ao atualizaro o Client'
            });
        }
    },
    getAll: async (req, res) => {
        try {

            const clients = await clientService.getAll();

            return res.status(200).json({
                msg: 'Todos os clientes',
                clients: clients.clients
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({
                msg: 'Ocorreu um erro no Servidor'
            });
        }
    },
    getOne: async (req, res) => {
        try {
            const { id } = req.params;

            const client = await clientService.getOne(id);

            if (client.error) {
                return res.status(client.code).json({
                    code: client.code,
                    message: client.error.message
                })
            }

            return res.status(client.code).json({
                msg: client.message,
                client: client.client
            });

        } catch (error) {
            console.log(error);

            return res.status(500).json({
                msg: 'Erro ao puxar um'
            });
        }
    },
    delete: async (req, res) => {
        try {
            const { id } = req.params;
            const client = await clientService.delete(id);

            if (!client) {
                return res.status(400).json({
                    msg: 'Cliente nao encontrado'

                });
            }

            return res.status(200).json({
                msg: 'Cliente deletado com sucesso'
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({
                msg: 'Ocorreu um erro no servidor'
            });
        }
    }

};

module.exports = clientController;