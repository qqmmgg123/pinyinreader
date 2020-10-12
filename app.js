const Koa = require('koa')
const bodyparser = require('koa-bodyparser')
const router = require('koa-router')()
const controller = require('./server/controller')

const app = new Koa()

app.use(bodyparser())

router.use(controller)

app
  .use(router.routes())
  .use(router.allowedMethods());
    
app.listen(3000, () => {
  console.log(`Server started port 3000`)
})

