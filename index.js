import express from 'express'
import cors from 'cors'

const app = express()
app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
  res.send("HELLO CARALHO");
});

app.listen(3000, () => {
  console.log('Servidor está rodando na porta 3000');
});