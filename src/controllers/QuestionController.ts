import { Request, Response } from 'express'
import { Question } from '../schemas/Question'
import ErrorsTypes from '../utils/ErrorsTypes';

class QuestionController {
  public async questionFind (req: Request, res: Response): Promise<Response> {
    try {
      const result = await Question.find()
      return res.status(200).json(result)
    } catch(err) {
      return res.json({
        ...ErrorsTypes.server,
        err
      });
    }
  }

  public async questionFindById (req: Request, res: Response): Promise<Response> {
    try {
      if(req.params.id) {
        const result = await Question.findById(req.params.id)
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

  public async insertQuestion (req: Request, res: Response): Promise<Response> {
    try {
      if(req.body.email && req.body.senha) {
        const result = await Question.create(req.body)
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

  public async updateQuestionById (req: Request, res: Response): Promise<Response> {
    try {
      if(req.params.id) {
        const result = await Question.findOneAndUpdate(
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

  public async deleteQuestionById (req: Request, res: Response): Promise<Response> {
    try {
      if(req.params.id) {
        const result = await Question.findByIdAndRemove(
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

export default new QuestionController()
