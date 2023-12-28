import dotenv from 'dotenv'
dotenv.config();
import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import swaggerUi from 'swagger-ui-express';
import { apiDocumentation } from './docs/apidoc';
import cors from 'cors';
const app = express();
const PORT = process.env.ENVIRONMENT == 'development' ? process.env.DEV_PORT : process.env.PROD_PORT || 3000;
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

import connects from './config/db'
import { userRouter, authRouter } from './routes/index'
app.use('/api/user', userRouter)
app.use('/api/auth', authRouter)
app.use('/doc', swaggerUi.serve, swaggerUi.setup(apiDocumentation));
connects();
app.get('/hello', (req: Request, res: Response): void => {
    res.json({ message: "Hello!" });
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});

export { app };