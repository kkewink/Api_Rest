const { getAll, getOne } = require('../controllers/ClientController');
const Client = require('../models/client');

const clientService = {
    create: async (data) => {
        try {
            console.log(data)
            const client = await Client.create(data);

            return client
        } catch (error) {
            console.error(error);
            throw new Error('Ocorreu um erro ao Criar Client');
        }
    },
    update: async (id, data) => {
        try {
            const client = await Client.findByPk(id);
            if (!client) {
                return null;
            }

            return await client.update(data);

        } catch (error) {
            throw new Error('Ocorreu um erro ao Atualizar Client');
        }
    },
    getById: async (id) => {
        try {
            const client = await Client.findByPk(id);

            if (!client) {
                return null;
            }
            return client;
        } catch (error) {
            console.error(error);
            throw new Error('Ocorre um erro ao buscar unico Client');
        }
    },
    getAll: async () => {
        try {
            const client = await client.findAll();
            return clients
        } catch (error) {
            throw new Error('Ocorreu um erro ao buscar todos Clientes');
        }
    },
    delete: async (id) => {
        try {
            const client = await Client.findByPk(id);
            if (!client) {
                return null;
            }

            return await client.destroy();
        } catch (error) {
            console.error(error);
            throw new Error('Ocorreu um erro ao deletar o Client');
        }
    }
}

module.exports = clientService;