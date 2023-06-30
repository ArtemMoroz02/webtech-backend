import * as dotenv from 'dotenv'

dotenv.config();

const config = {
    JWT_SECRET: process.env.JWT_SECRET,
    PORT: process.env.PORT
}

export default config;