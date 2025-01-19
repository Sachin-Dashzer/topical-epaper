import dotenv from 'dotenv';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import { app } from './app.js';
import database from './db/index.js';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


dotenv.config({ path: path.join(__dirname, '.env') });
const PORT = process.env.PORT || 5000;


app.use(helmet());
app.use(rateLimit({
    windowMs: 15 * 60 * 1000, 
    max: 100 
}));


const errorHandler = (err, req, res, next) => {
    console.error('Error:', err.stack);
    res.status(500).json({
        error: process.env.NODE_ENV === 'production' 
            ? 'Internal Server Error' 
            : err.message
    });
};


const initAdsTxt = () => {
    let adsTxtCache = null;
    let lastRead = 0;
    const CACHE_DURATION = 3600000; 

    app.get('/ads.txt', async (req, res) => {
        try {
            const now = Date.now();
            
            
            if (!adsTxtCache || now - lastRead > CACHE_DURATION) {
                const adsTxtPath = path.join(__dirname, 'ads.txt');
                adsTxtCache = await fs.readFile(adsTxtPath, 'utf8');
                lastRead = now;
            }
            
            res.type('text/plain').send(adsTxtCache);
        } catch (error) {
            console.error('Error serving ads.txt:', error.message);
            res.status(500).send('Internal Server Error');
        }
    });
};


const gracefulShutdown = async (signal) => {
    console.log(`\n${signal} received. Starting graceful shutdown...`);
    
    try {
        
        await database.close();
        console.log('Database connection closed.');
        
        
        server.close(() => {
            console.log('Server closed.');
            process.exit(0);
        });

        
        setTimeout(() => {
            console.error('Could not close connections in time, forcefully shutting down');
            process.exit(1);
        }, 10000);
        
    } catch (error) {
        console.error('Error during shutdown:', error);
        process.exit(1);
    }
};


process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
    
    gracefulShutdown('UNHANDLED REJECTION');
});

process.on('uncaughtException', (error) => {
    console.error('Uncaught Exception:', error);
    gracefulShutdown('UNCAUGHT EXCEPTION');
});


const initRoutes = () => {
    app.get('/', (req, res) => {
        res.json({ status: 'ok', message: 'Server is running' });
    });

    app.get('/health', (req, res) => {
        res.json({ 
            status: 'ok',
            timestamp: new Date().toISOString(),
            uptime: process.uptime()
        });
    });

    
    app.use(errorHandler);
};


const startServer = async () => {
    try {
        
        await database();
        console.log('Database connected successfully');

        
        initAdsTxt();
        initRoutes();

        
        const server = app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
            console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
        });

        
        ['SIGTERM', 'SIGINT'].forEach(signal => {
            process.on(signal, () => gracefulShutdown(signal));
        });

        return server;
    } catch (error) {
        console.error('Failed to start server:', error);
        process.exit(1);
    }
};


startServer();