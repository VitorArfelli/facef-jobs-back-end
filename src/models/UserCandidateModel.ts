import { ObjectId } from "mongodb";
import { Candidacy } from "./common/Candidacy";

export interface UserCandidateModel {
    email: string,
    candidaturas: Candidacy[],
  }
  