import { Request, Response } from 'express'
import constants from '../utils/Constants'
import jwt from 'jsonwebtoken'
import { UserCompany } from '../schemas/UserCompany'
import ErrorsTypes from '../utils/ErrorsTypes'


class LoginController {
    public async login (req: Request, res: Response): Promise<Response> {
        
        try {
            const result = await UserCompany.findOne({email: req.body.email, senha: req.body.senha})

            if(result) {
                delete result.senha
                var token = jwt.sign({ result }, constants.SECRET_JWT, {
                    expiresIn: 300
                });
                return res.status(200).send({ auth: true, token: token });
            }

            return res.status(401).json({
                ...ErrorsTypes.invalidCredentials
            });
        } catch(err) {
            return res.status(500).json({
                ...ErrorsTypes.server,
                err
            });
        }
    }
}

export default new LoginController()