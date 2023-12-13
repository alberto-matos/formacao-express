import {Router} from "express"

const router = Router()
router.get("/:id", (req, res)=>{
  const fruits = ["Banana", "Maçã", "Pera", "Uva", "Melancia"]
  const id = +req.params.id

  if (id >=0 && id < fruits.length) {
    res.send(fruits[id])
  }else{
    res.status(404).send("Fruta não localizada!")
  }
})

export default router