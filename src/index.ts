import app from "./app";
import connects from './config/db'
const PORT = process.env.ENVIRONMENT == 'development' ? process.env.DEV_PORT : process.env.PROD_PORT || 3000;
app.listen(PORT, () => {
    connects();
    console.log(`Listening on port ${PORT}`);
});

