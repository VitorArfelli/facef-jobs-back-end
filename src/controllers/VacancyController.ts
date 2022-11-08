import { Request, Response } from 'express'
import { Vacancy } from '../schemas/Vacancy'
import ErrorsTypes from '../utils/ErrorsTypes';

class VacancyController {
  public async vacancyFind (req: Request, res: Response): Promise<Response> {
    try {
      const result = await Vacancy.find()
      return res.status(200).json(result)
    } catch(err) {
      return res.json({
        ...ErrorsTypes.server,
        err
      });
    }
  }

  public async vacancyFindById (req: Request, res: Response): Promise<Response> {
    try {
      if(req.params.id) {
        const result = await Vacancy.findById(req.params.id)
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

  public async insertVacancy (req: Request, res: Response): Promise<Response> {
    try {
      if(req.body.email && req.body.senha) {
        const result = await Vacancy.create(req.body())
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

  public async updateVacancyById (req: Request, res: Response): Promise<Response> {
    try {
      if(req.params.id) {
        const result = await Vacancy.findOneAndUpdate(
          { 
            _id: req.params.id 
          }, 
          req.body(), 
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

  public async deleteVacancyById (req: Request, res: Response): Promise<Response> {
    try {
      if(req.params.id) {
        const result = await Vacancy.findByIdAndRemove(
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

export default new VacancyController()
