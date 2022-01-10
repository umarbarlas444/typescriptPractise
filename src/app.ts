import express from "express";

const app: express.Application = express();

app.get('/', (req: express.Request, res: express.Response) => {
    res.send('Hello Moto')
})

app.listen(5000, () => console.log('Server is running at port 5000'))