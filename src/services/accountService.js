const Account = require('../models/account');
const Client = require('../models/client');
const ClientService = require('../services/clientService');

const AccountService = {
    create: async (dataAccount) => {
        try {

            const isClientExist = await Client.findByPk({ dataAccount, _idClient });

            if (!isClientExist) {
                return res.error(404).json({
                    msg: "Client não encontrado",
                });
            }


            const clientHaveAccount = await Account.findOne({
                _idClient: dataAccount._idClient,
            });

            if (clientHaveAccount) {
                return res.error(409).json({
                    msg: "Account ja existe",
                });
            }

            const account = await Account.create(dataAccount);

            return res.status(201).json({
                msg: "Account criado com sucesso",
                account,
            });
        } catch (error) {
            console.error(error);
            throw new Error(error.message);
        }
    },
    update: async (_idAccount, dataAccount) => {
        try {
            const account = await Client.findByPk(_idAccount);
            if (!account) {
                return res.error(404).json({
                    msg: "Account não encontrado",
                });
            }

            if (dataAccount._idClient) {
                const client = await ClientService.getOne(dataAccount._idClient);
                if (client.error) {
                    return client;
                }
            }

            await account.updateOne(dataAccount);
            return res.status(200).json({
                msg: "Account atualizado com sucesso",
                account,
            })

        } catch (error) {
            console.error(error);
            throw new Error('Ocorreu um erro ao Atualizar Client');
        }
    },
    getAll: async () => {
        try {
            const clients = await Client.findAll();
            return res.status(200).json({
                msg: "Clientes encontrado",
                clients,
            });

        } catch (error) {
            throw new Error('Ocorreu um erro ao buscar todos Clientes');
        }
    },
    delete: async (_idAccount) => {
        try {
            const account = await Account.findById(_idAccount);
            if (!account) {
                return res.error(404).json({
                    msg: "Account não encontrado",
                });
            }

            return res.status(200).json({
                msg: "Account deletado",
                account: await Account.findByPkAndDelete(_idAccount),
            });

        } catch (error) {
            console.error(error);
            throw new Error('Ocorreu um erro ao deletar o Client');
        }
    },
}

module.exports = AccountService;