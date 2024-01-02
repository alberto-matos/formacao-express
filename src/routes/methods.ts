import Router from "express"

const router = Router()

const peaple = [
  { name: "João", age: 25 },
  { name: "Maria", age: 23 },
  { name: "José", age: 30 },
]

router.post("/", (req, res) => {
  const { name } = req.body
  const age = +req.body.age

  peaple.push({ name, age })
  res.status(201).send(peaple)
})

router.get("/", (req, res) => {
  res.status(200).send(peaple)
})

router.get("/:id", (req, res) => {
  const id = +req.params.id
  if (id >= 0 && id < peaple.length) {
    const peapleById = peaple[id]
    res.status(200).send(peapleById)
  } else {
    res.status(404).send("Pessoa não localizada!")
  }
})

router.delete("/:id", (req, res) => {
  const id = +req.params.id
  if (id >= 0 && id < peaple.length) {
    peaple.splice(id, 1)
    res.status(200).send(peaple)
  } else {
    res.status(404).send("Pessoa não localizada!")
  }
})

router.put("/:id", (req, res) => {
  const id = +req.params.id
  if (id >= 0 && id < peaple.length) {
    if (!req.body.name && !req.body.age) {
      res.status(400).send("Dados inválidos!")
    }

    if (req.body.name) {
      peaple[id].name = req.body.name
    }

    if (req.body.age) {
      peaple[id].age = +req.body.age
    }

    res.status(200).send(peaple)
  }
})

export default router