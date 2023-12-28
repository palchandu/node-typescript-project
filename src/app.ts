import dotenv from 'dotenv'
dotenv.config();
import express, { Request, Response } from 'express';
const app = express();
import bodyParser from 'body-parser';
import swaggerUi from 'swagger-ui-express';
import { apiDocumentation } from './docs/apidoc';
import cors from 'cors';

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
/**
 * Cors
 */
const allowedOrigins = ['http://localhost:4100', 'http://localhost:4200'];
const options: cors.CorsOptions = {
    origin: allowedOrigins
};
app.use(cors(options));


import { userRouter, authRouter } from './routes/index'
app.use('/api/user', userRouter)
app.use('/api/auth', authRouter)
app.use('/doc', swaggerUi.serve, swaggerUi.setup(apiDocumentation));

app.get('/hello', (req: Request, res: Response): void => {
    res.json({ message: "Hello!" });
})
export default app;