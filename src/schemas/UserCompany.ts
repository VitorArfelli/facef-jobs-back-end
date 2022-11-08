import { Schema, Model, model } from 'mongoose'
import { UserCompanyModel } from '../models/UserCompanyModel'

const UserCompanySchema = new Schema({
  _id: {
    type: String,
    require: false,
  },
  cnpj: {
    type: String,
    require: false
  },
  email: {
    type: String,
    require: false
  },
  nome: {
    type: String,
    require: false,
  },
  senha: {
    type: String,
    require: false,
  },
  missao: {
    type: String,
    require: false
  },
  visao: {
    type: String,
    require: false,
  },
  valores: {
    type: String,
    require: false,
  },
}, {
  timestamps: false
})

export const UserCompany: Model<UserCompanyModel> = model<UserCompanyModel>('UserCompany', UserCompanySchema)
