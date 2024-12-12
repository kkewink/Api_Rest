const Client = require('../models/client');
const Account = require('../models/account')

const ClientService = {
    create: async (dataClient) => {
        try {

            const isEmailExist = await Client.findOne({ where: { email: dataClient.email } });

            if (isEmailExist) {
                return {
                    code: 400,
                    error: {
                        message: "O Email ja existe"
                    }
                }
            }

            const client = await Client.create(dataClient);

            return {
                code: 201,
                message: "Cliente criado com sucesso",
                client: client
            }
        } catch (error) {
            console.error(error);
            throw new Error(error.message);
        }
    },
    update: async (_idClient, dataClient) => {
        try {
            const client = await Client.findByPk(_idClient);
            if (!client) {
                return {
                    code: 400,
                    error: {
                        message: "Cliente não existe"
                    }
                }
            }

            const isEmailExist = await Client.findOne({ email: dataClient.email });
            if (isEmailExist) {
                return {
                    code: 400,
                    error: {
                        message: "O Email ja existe"
                    }
                }
            }

            await client.update(dataClient);
            return res.status(200).json({
                msg: "Cliente atualizado com sucesso",
            })

        } catch (error) {
            console.error(error);
            throw new Error('Ocorreu um erro ao Atualizar Client');
        }
    },
    getOne: async (_idClient) => {
        try {
            const client = await Client.findByPk(_idClient);

            if (!client) {
                return {
                    code: 404,
                    error: {
                        message: "Client not found"
                    }
                }
            }

            return {
                code: 200,
                message: "Client achad",
                client: client
            }

        } catch (error) {
            console.error(error);
            throw new Error('Ocorre um erro ao buscar unico Client');
        }
    },
    getAll: async () => {
        try {
            const clients = await Client.findAll();
            return {
                code: 200,
                message: "Todas os clientes",
                clients: clients
            }

        } catch (error) {
            console.error(error);
            throw new Error('Ocorreu um erro ao buscar todos Clientes');
        }
    },
    delete: async (_idClient) => {
        try {
            const client = await Client.findByPk(_idClient);
            if (!client) {
                return {
                    code: 404,
                    error: {
                        message: "Client não encontrado"
                    }
                }
            }

            const account = await Account.findOne({ _idClient: _idClient });
            if (account) {
                await account.deleteOne();
            }

            await client.deleteOne();
            return res.status(200).json({
                msg: "Cliente deletado",
                client: client,
            });

        } catch (error) {
            console.error(error);
            throw new Error('Ocorreu um erro ao deletar o Client');
        }
    }
}

module.exports = ClientService;