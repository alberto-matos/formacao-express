import Router from 'express'

const router = Router()

router.get("/ok", (req, res)=>{
  res.sendStatus(200)
})

router.get("/404", (req, res)=>{
  res.status(404).send("Não localizado")
})

router.get("/401", (req, res)=>{
  res.status(401).send("Não autorizado")
})

router.get("/403", (req, res)=>{
  res.status(403).send("Não autenticado")
})

export default router