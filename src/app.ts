import express from 'express';
import morgan from 'morgan'

const app = express()

app.use(morgan('date[web] :method :url :status :response-time ms - :res[content-length]'));

export default app