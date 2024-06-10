import express, { Request, Response } from 'express';
import cors from "cors";
import connectDB from './config/dbConfig';

// Create an Express application
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();

// Define a route for the root path ('/')
app.get('/', (req: Request, res: Response) => {
    // Send a response to the client
    res.send('Hello, TypeScript + Node.js + Express!');
});

export default app;