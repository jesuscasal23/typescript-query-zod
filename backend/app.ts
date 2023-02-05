import express, { Request, Response, NextFunction } from 'express'
import cors from 'cors'

const app = express()
app.use(cors())
const port = 7000

const todos = [
  { id: '1', text: 'todo number 1' },
  { id: '2', text: 'todo number 2' },
  {
    id: '3',
    text: 'todo number 3',
  },
]

app.get('/todos', (req: Request, res: Response) => {
  res.json({ todos })
})

app.post('/todos', (req: Request, res: Response) => {})

app.listen(port, () => {
  console.log(`running on port ${port}`)
})
