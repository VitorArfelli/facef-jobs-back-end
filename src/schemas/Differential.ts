import { Schema, Model, model } from 'mongoose'
import { DifferentialModel } from '../models/DifferentialModel';

const DifferentialSchema = new Schema({
  _id: {
    type: String,
    require: false,
  },
  descricao: {
    type: String,
    require: false
  },
  segmento: {
    type: String,
    require: false
  },
}, {
  timestamps: false
})

export const Differential: Model<DifferentialModel> = model<DifferentialModel>('Differential', DifferentialSchema)
