import { ObjectId } from "mongodb";
import { Candidacy } from "./common/Candidacy";

export interface UserCandidateModel {
    _id: ObjectId,
    email: string,
    candidaturas: Candidacy[],
  }
  