import { Request, Response } from 'express'
import { Differential } from '../schemas/Differential'
import ErrorsTypes from '../utils/ErrorsTypes';

class DifferentialController {
  public async differentialFind (req: Request, res: Response): Promise<Response> {
    try {
      const result = await Differential.find()
      return res.status(200).json(result)
    } catch(err) {
      return res.json({
        ...ErrorsTypes.server,
        err
      });
    }
  }

  public async differentialFindById (req: Request, res: Response): Promise<Response> {
    try {
      if(req.params.id) {
        const result = await Differential.findById(req.params.id)
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

  public async insertDifferential (req: Request, res: Response): Promise<Response> {
    try {
      if(req.body.email && req.body.senha) {
        const result = await Differential.create(req.body)
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

  public async updateDifferentialById (req: Request, res: Response): Promise<Response> {
    try {
      if(req.params.id) {
        const result = await Differential.findOneAndUpdate(
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

  public async deleteDifferentialById (req: Request, res: Response): Promise<Response> {
    try {
      if(req.params.id) {
        const result = await Differential.findByIdAndRemove(
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

export default new DifferentialController()
