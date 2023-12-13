import express from 'express'
import env from './config/environments'
import basicRoutes from './routes/basic'
import returnsDiffRoutes from './routes/returnsDiff'
import nestedRoutes from './routes/nestedRoute'
import status from './routes/status'
import routeParans from './routes/routeParams'
import queryParans from './routes/queryParams'

const app = express()

// middleware
app.use((req, res, next)=>{
  console.log(`Data: ${Date.now().toLocaleString('pt-BR')}`)
  // console.log(`Data: ${Intl.DateTimeFormat('pt-BR', {
  //   dateStyle: 'short',
  //   timeStyle: 'long',
  //   timeZone: 'America/Belem',
  // }).format(Date.now())}`)
  next()
})

app.use(basicRoutes)
app.use(returnsDiffRoutes)
app.use('/products', nestedRoutes)
app.use('/status', status)
app.use('/routeParams', routeParans)
app.use('/queryParams', queryParans)

app.listen(env.port, () => {
  console.log(`Listening on port ${env.port}`)
})
