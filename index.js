const Koa = require('koa')
const Router = require('koa-router')

const app = new Koa()
const router = new Router()
const sum = require('./sum')
router.get('/add/:a/:b', (ctx, next) =>{
    const result = sum(parseFloat(ctx.params.a), parseFloat(ctx.partams.b))
    return ctx.body = { resukt }
})

app.use(router.routews())
    .use(router.allowedMethods())

app.listen(process.envPORT || 3000)