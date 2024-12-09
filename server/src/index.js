
import dotenv from 'dotenv'
import { app } from './app.js'

dotenv.config({ path: './.env' });
const PORT = process.env.PORT || 5000;

import database from './db/index.js'


database()
    .then(() => {
        app.get('/', (req, res) => {
            res.send('Hello World hfkd');
        })
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        })

    }

    )
    .catch((error) => {
        console.log(`Database connection failed ${error}`);
    })








