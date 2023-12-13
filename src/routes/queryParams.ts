import {Router} from "express"

const route = Router()

route.get("/", (req, res)=>{
  let colors = ["vermelho", "verde", "azul", "amarela", "preta", "branca"]
  const kind = req.query.kind?.toString().toLowerCase()
  const filter = req.query.filter?.toString().toLowerCase() || null
  
  console.log(req.query)
  colors = colors.filter(color => {
    return filter ? color.includes(filter) : true
  })

  colors = colors.map(color => {
    return kind === "upper" ? color.toUpperCase() : kind === "lower" ? color.toLowerCase() : color
  })

  colors = colors.map(color => {
    return `<li>${color}</li>`
  })
  res.send(colors)
})

export default route