const Admin = require("../modules/admin");
const bcrypt = require('bcryptjs');
const { request } = require("express");
const jwt = require('jsonwebtoken');
const adminService = {
    create: async(data) =>{
        try {
            const senhaCript = await bcrypt.hash(data.senha, 10);
            data.senha = senhaCript

            return await Admin.create(data);
        } catch (error) {
            throw new Error ('Ocorreu um erro ao Criar o Admin');
        }
    },
    login: async(data) =>{
        try {
            const adm = Admin.findOne({where: {email : data.email}})

            if(!adm){
                return null
            }
            const isValida = await bcrypt.compare(data.senha, adm.senha)

            if(!isValida){
                return null
            }

            const token = await jwt.sign({
                email: adm.email,
                id: adm.id
            }, process.env.SECRET, {expiresIn: '1h'})

            return token


        } catch (error) {
            console.log(error);
            throw new Error('Ocorreu um erro ao logar ADMIN');
        }
    },
    update:async(id,adminToUpdate) =>{
        try {
            const admin = await Admin.findByPk(id);
            if(!admin) {
                return null;
            }

            return admin.update(adminToUpdate);

        } catch (error) {
            throw new Error ('Ocorreuu um erro ao Atualizar Admin');
        }
    },
    getById: async( id) =>{
        try {
            const admin = await Admin.findByPk(id);
            if(!admin){
                return null;
            }
            return admin;
        } catch (error) {
            console.error(error);
            throw new Error('Ocorreu um erro ao buscar o id do Admin');
        }
    },
    getAll: async ()=>{
        try {

            return await Admin.findAll();

        } catch (error) {
            console.error(error);
            throw new Error('Ocorreu um erro ao buscar todos Admin');
        }
    },
    delete:async (id) =>{
        try {
            const admin = await Admin.findByPk(id);
            if(!admin) {
                return null;
            }
            return await admin.destroy();
           
        } catch (error) {
            console.error(error)
            throw new Error ('Occoreu um erro ao deletar o admin');
        }
    }
}