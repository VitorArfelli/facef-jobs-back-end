import { Schema, Model, model } from 'mongoose'
import { QuestionModel } from '../models/QuestionModel';

const QuestionSchema = new Schema({
  _id: {
    type: String,
    require: false,
  },
  cnpj: {
    type: String,
    require: false
  },
  titulo: {
    type: String,
    require: false
  },
  descricao: {
    type: String,
    require: false,
  },
  questoes: {
    type: Object,
    require: false,
  },
}, {
  timestamps: false
})

export const Question: Model<QuestionModel> = model<QuestionModel>('Question', QuestionSchema)
