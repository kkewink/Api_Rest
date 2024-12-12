const AccountService = require("../services/accountService");

const AccountController = {
    create: async (req,res) => {
        try {
            const account = await AccountService.create(req.account);

            if(account.code !==201){
                return res.staus(account.code).json({
                    error:{
                        code: account.code,
                        message:"erro ao criar a Account",
                        details:{
                            controller: "AccountController",
                            cause: account.error.message,
                        },
                    },
                });
            }
        } catch (error) {
            console.error(error);
            return res.staus(500).json({
                error:{
                    code: 500,
                    message:"erro ao criar a Account",
                    cause: account.error.message,
                }
            })
        }
    },
    update: async (req,res) =>{
        try {
            const account = await AccountService.update(req,params.id, req.account);

            if(account.error){
                return res.staus(account.code).json({
                    code: account.code,
                    message: req.method,
                    details:{
                        controller: "accountController",
                        cause: account.error.message,
                    },
                });
            }

            return res.staus(account.code).json({
                code: account.code,
                message: account.message,
                account: account.account,
            })
        } catch (error) {
            
        }
    }

}

module.exports = AccountController;