import dotenv from 'dotenv'
const env = dotenv.config().parsed

export default {
    SECRET_JWT: String(env?.SECRET_JWT),
}
