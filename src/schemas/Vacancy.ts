
import { ObjectId } from 'mongodb'
import { Schema, Model, model } from 'mongoose'
import { VacancyModel } from '../models/VacancyModel'

const VacancySchema = new Schema({
    _id: ObjectId,
    cnpj: {
        type: String,
        require: false
    },
    cargo: {
        type: String,
        require: false
    },
    descricao: {
        type: String,
        require: false
    },
    requisitosDaFuncao: {
        type: String,
        require: false
    },
    diferenciais: {
        type: String,
        require: false
    },
    salario: {
        type: Number,
        require: false
    },
    missao: {
        type: String,
        require: false
    },
    visao: {
        type: String,
        require: false
    },
    valores: {
        type: String,
        require: false
    },
    psi: {
        type: String,
        require: false
    },
    dataDaPublicacao: {
        type: Date,
        require: false
    },
    dataDeCriacao: {
        type: Date,
        require: false
    },
    dataDeAceitacao: {
        type: Date,
        require: false
    },
    dataDeEncerramento: {
        type: Date,
        require: false
    },
    status: {
        type: String,
        require: false
    },
}, {
  timestamps: false
})

export const Vacancy: Model<VacancyModel> = model<VacancyModel>('Vacancy', VacancySchema)
