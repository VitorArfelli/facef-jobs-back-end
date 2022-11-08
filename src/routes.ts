import { Router } from 'express'
import UserCompanyController from './controllers/UserCompanyController'
import LoginController from './controllers/LoginController'
import UserCandidateController from './controllers/UserCandidateController'
import VacancyController from './controllers/VacancyController'
import QuestionController from './controllers/QuestionController'
import DifferentialController from './controllers/DifferentialController'
import ExportController from './controllers/ExportController'

const routes = Router()

/*Login*/
routes.post('/login', LoginController.login)

/*Export*/  // Precisa alinhar o body de envio
routes.post('/export/userCandidate', ExportController.export)

/*Usuario Empresa*/
routes.get('/userCompany', UserCompanyController.userCompanyFind)
routes.get('/userCompany/:id', UserCompanyController.userCompanyFindById)
routes.post('/userCompany', UserCompanyController.insertUserCompany)
routes.put('/userCompany/:id', UserCompanyController.updateUserCompanyById)
routes.delete('/userCompany/:id', UserCompanyController.deleteUserCompanyById)

/*Usuario Candidato*/
routes.get('/userCandidate', UserCandidateController.userCandidateFind)
routes.get('/userCandidate/:id', UserCandidateController.userCandidateFindById)
routes.post('/userCandidate', UserCandidateController.insertUserCandidate)
routes.put('/userCandidate/:id', UserCandidateController.updateUserCandidateById)
routes.delete('/userCandidate/:id', UserCandidateController.deleteUserCandidateById)

/*Vagas*/
routes.get('/vacancy', VacancyController.vacancyFind)
routes.get('/vacancy/:id', VacancyController.vacancyFindById)
routes.post('/vacancy', VacancyController.insertVacancy)
routes.put('/vacancy/:id', VacancyController.updateVacancyById)
routes.delete('/vacancy/:id', VacancyController.deleteVacancyById)

/*Questões*/
routes.get('/question', QuestionController.questionFind)
routes.get('/question/:id', QuestionController.questionFindById)
routes.post('/question', QuestionController.insertQuestion)
routes.put('/question/:id', QuestionController.updateQuestionById)
routes.delete('/question/:id', QuestionController.deleteQuestionById)

/*Diferenciais*/
routes.get('/differential', DifferentialController.differentialFind)
routes.get('/differential/:id', DifferentialController.differentialFindById)
routes.post('/differential', DifferentialController.insertDifferential)
routes.put('/differential/:id', DifferentialController.updateDifferentialById)
routes.delete('/differential/:id', DifferentialController.deleteDifferentialById)

export default routes
