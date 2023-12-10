import express, { type Request, type Application, type Response } from 'express'
import dotenv from 'dotenv'

const app: Application = express()
const port: number = process.env.PORT ? Number(process.env.PORT) : 3000

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
