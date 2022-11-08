import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import routes from './routes'

class App {
  public express: express.Application

  public constructor () {
    this.express = express()
    require('dotenv').config()
    this.middlewares()
    this.database()
    this.routes()
  }

  private middlewares (): void {
      this.express.use(express.json())
      this.express.use(cors({
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH']
      }))
      this.express.use((request, response, next) => {
      response.header("Access-Control-Allow-Origin: *");
      response.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PATCH,DELETE");
      response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
      next();
    })
  }

  private database (): void {
    mongoose.connect(`mongodb://localhost:27017/???`, 
    { 
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: true
    }
    )
  }

  private routes (): void {
    this.express.use(routes)
  }
}

export default new App().express
