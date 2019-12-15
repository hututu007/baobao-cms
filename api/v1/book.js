/*
 * @Author: 胡海
 * @Date: 2019-12-15 22:57:55
 * @LastEditors: 胡海
 * @LastEditTime: 2019-12-15 23:46:45
 * @Description: 
 */
const Router = require('koa-router')
const router = new Router()

router.get('/v1/book/list', (ctx,next)=>{
    ctx.body = {
        key:'我是接口一haoshuaernv胡海jn'
    }
})
module.exports = router