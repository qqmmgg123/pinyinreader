const router = require('koa-router')()
const pinyin = require("pinyin")

router
  .post('/pingyin', async ctx => {
    const body = ctx.request.body
    const { content } = body
    ctx.set('Access-Control-Allow-Origin', '*')
    ctx.set('Access-Control-Allow-Credentials', true)
    let pinyinArr = []
    let pinyinWord = pinyin(content)
    pinyinWord.forEach(item => {
      if (/[a-zà-ǜ]{1,6}/g.test(item)) {
        pinyinArr = pinyinArr.concat(item)
      } else {
        pinyinArr = pinyinArr.concat(item[0].split(''))
      }
    })
    let result = ''
    for (let i = 0; i < content.length; i++) {
      let p = (pinyinWord[i] && pinyinArr[i] || '')
      result += '<div>' + [ p, content.charAt(i) ].join('<br>') + '</div>'
    }
    ctx.body = {
      content: result,
      pinyinArr
    }
  })

module.exports = router.routes()
