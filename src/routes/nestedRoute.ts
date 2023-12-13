import Router from 'express'

const router = Router()

router.get("/", (req, res)=>{
  res.send("<h1>Lista de Produtos</h1>")
})

router.get("/kitchen", (req, res)=>{
  const prods = [
    "Fogão",
    "Geladeira",
    "Microondas",
    "Liquidificador"    
  ]
  res.send(prods)
})

router.get("/technology", (req, res)=>{
  const prods = [
    "Computador",
    "Notebook",
    "Tablet",
    "Smartphone"    
  ]
  res.send(prods)
})

export default router