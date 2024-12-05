const Client = require('../models/client');

const clientService = {
    create: async(data) =>{
        try {
            console.log(data)
            const client = await Client.create(data);

            return client
        } catch (error) {
            console.error(error);
            throw new Error('Ocorreu um erro ao Criar Client');
        }
    }
}

module.exports = clientService;