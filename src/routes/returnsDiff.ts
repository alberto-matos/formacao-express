import path from 'path'
import fs from 'fs'
import { Router } from 'express'

const router = Router()

router.get("/var", (req, res)=>{
  const name = 'Alberto'
  res.send(name)
})

router.get("/varNum", (req, res)=>{
  const num = 10
  res.json(num)
})

router.get("/varObj", (req, res)=>{
  const obj = {
    name: 'Alberto',
    age: 25
  }
  res.send(obj)
})

router.get("/varArr", (req, res)=>{
  const arr = [
    {name: 'Alberto', age: 49},
    {name: 'Mateus', age: 21},
    {name: 'Daiane', age: 39},
  ]
  res.send(arr)
})

router.get("/html", (req, res)=>{
  res.sendFile(path.join(__dirname, '..', 'assets', "page.html"))
})

router.get("/pdf", (req, res)=>{
  res.sendFile(path.join(__dirname, '..', 'assets', "pdf.pdf"))
})


router.get("/img", (req, res)=>{
  if (fs.existsSync(path.join(__dirname, '..', 'assets', "img.jpg"))) {
    res.sendFile(path.join(__dirname, '..', 'assets', "img.jpg"))
  }else{
    res.status(404).send("Arquivo não localizado!")
  }
})

export default router