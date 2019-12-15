/*
 * @Author: 胡海
 * @Date: 2019-12-15 22:52:39
 * @LastEditors: 胡海
 * @LastEditTime: 2019-12-15 23:46:26
 * @Description: 
 */
const Koa = require('koa')
const Router = require('koa-router')
const requireDirectory = require('require-directory')

const app = new Koa()
//自动导入路由模块
requireDirectory(module, './api', {
    visit: whenLoadModule
})

function whenLoadModule(obj) {
    if (obj instanceof Router) {
        app.use(obj.routes())
    }
}
app.listen(3000)