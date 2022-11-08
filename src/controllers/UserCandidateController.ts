import { Request, Response } from 'express'
import { UserCandidate } from '../schemas/UserCandidate'
import ErrorsTypes from '../utils/ErrorsTypes';

class UserCandidateController {
  public async userCandidateFind (req: Request, res: Response): Promise<Response> {
    try {
      const result = await UserCandidate.find()
      return res.status(200).json(result)
    } catch(err) {
      return res.json({
        ...ErrorsTypes.server,
        err
      });
    }
  }

  public async userCandidateFindById (req: Request, res: Response): Promise<Response> {
    try {
      if(req.params.id) {
        const result = await UserCandidate.findById(req.params.id)
        return res.status(200).json(result)
      }
      return res.status(400).json({
        ...ErrorsTypes.validation
      })
    } catch(err) {
      return res.json({
        ...ErrorsTypes.server,
        err
      });
    }
  }

  public async insertUserCandidate (req: Request, res: Response): Promise<Response> {
    try {
      if(req.body.email) {
        const result = await UserCandidate.create(req.body)
        return res.status(200).json(result)
      }
      return res.status(400).json({
        ...ErrorsTypes.validation
      })
    } catch(err) {
      return res.json({
        ...ErrorsTypes.server,
        err
      });
    }
  }

  public async updateUserCandidateById (req: Request, res: Response): Promise<Response> {
    try {
      if(req.params.id) {
        const result = await UserCandidate.findOneAndUpdate(
          { 
            _id: req.params.id 
          }, 
          req.body, 
          null, 
          (err, result) => {
            console.log(result)
            console.log(err)
        })
        return res.status(200).json(result)
      }
      return res.status(400).json({
        ...ErrorsTypes.validation
      })
    } catch(err) {
      return res.json({
        ...ErrorsTypes.server,
        err
      });
    }
  }

  public async deleteUserCandidateById (req: Request, res: Response): Promise<Response> {
    try {
      if(req.params.id) {
        const result = await UserCandidate.findByIdAndRemove(
          { 
            _id: req.params.id 
          },
          null,
          (err, doc, res) => {
            console.log(res)
            console.log(err)
            console.log(doc)
        })
        return res.status(200).json(result)
      }
      return res.status(400).json({
        ...ErrorsTypes.validation
      })
    } catch(err) {
      return res.json({
        ...ErrorsTypes.server,
        err
      });
    }
  }
}

export default new UserCandidateController()
