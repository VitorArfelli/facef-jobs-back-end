import { Schema, Model, model } from 'mongoose'
import { UserCandidateModel } from '../models/UserCandidateModel';

const UserCandidateSchema = new Schema({
  email: {
    type: String,
    require: false
  },
  candidaturas: {
    type: Array,
    require: false
  },
}, {
  timestamps: false
})

export const UserCandidate: Model<UserCandidateModel> = model<UserCandidateModel>('UserCandidate', UserCandidateSchema)
