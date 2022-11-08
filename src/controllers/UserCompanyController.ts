import { Request, Response } from 'express'
import { UserCompany } from '../schemas/UserCompany'
import ErrorsTypes from '../utils/ErrorsTypes';

class UserCompanyController {
  public async userCompanyFind (req: Request, res: Response): Promise<Response> {
    try {
      const result = await UserCompany.find()
      return res.status(200).json(result)
    } catch(err) {
      return res.json({
        ...ErrorsTypes.server,
        err
      });
    }
  }

  public async userCompanyFindById (req: Request, res: Response): Promise<Response> {
    try {
      if(req.params.id) {
        const result = await UserCompany.findById(req.params.id)
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

  public async insertUserCompany (req: Request, res: Response): Promise<Response> {
    try {
      if(req.body.email && req.body.senha) {
        const result = await UserCompany.create(req.body)
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

  public async updateUserCompanyById (req: Request, res: Response): Promise<Response> {
    try {
      if(req.params.id) {
        const result = await UserCompany.findOneAndUpdate(
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

  public async deleteUserCompanyById (req: Request, res: Response): Promise<Response> {
    try {
      if(req.params.id) {
        const result = await UserCompany.findByIdAndRemove(
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

export default new UserCompanyController()
