import cors from 'cors';
import express, { NextFunction, Request, Response, } from 'express';
import markdownit from 'markdown-it';
import { readFile } from 'node:fs/promises';

const app = express()
app.use(express.json());
app.use(cors());
const port = 3000;

// Dummy auth method that will only check if "authorization" header is present
const auth = (req: Request, res: Response, next: NextFunction) => {
    const basic = req.headers['authorization'];

    if (!basic) {
        return res.status(401).json({ message: 'No authentication provided' });
    }

    next();
};

interface score {
    timestamp: Date;
    name: string;
    duration_ms: number;
}

const scores: score[] = [
	{
		timestamp: '2026-03-18T08:00:00',
		name: 'Alice',
		duration_ms: 10000
	}
];

app.get('/', async (req: Request, res: Response) => {
    const readme = await readFile('./README.md', 'utf8')
    res.send(markdownit().render(readme))
})

app.get('/scores', (req: Request, res: Response) => {
    res.send(scores)
})

app.post('/scores', auth, (req: Request, res: Response) => {
    scores.push(req.body)
    res.send(scores)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
