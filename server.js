const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults({
  static: './public',
})

// 设置默认中间件 (logger, static, cors and no-cache)
server.use(middlewares)

// 添加CORS支持
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  res.header(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, PATCH, OPTIONS'
  )
  next()
})

// 自定义响应格式中间件
server.use((req, res, next) => {
  // 如果是GET请求访问monthlyStatistics且没有指定ID
  if (req.method === 'GET' && req.path === '/monthlyStatistics') {
    const originalSend = res.send
    res.send = function (body) {
      try {
        const data = JSON.parse(body)
        const total = data.length

        const wrappedResponse = {
          data: {
            page: {
              total: total.toString(),
              rows: data,
            },
            rows: data.map((item) => ({
              id: item.id?.toString() || '',
              bank_code: item.bank_code || '',
              area_code: item.area_code || '',
              platform_code: item.platform_code || '',
              month: item.month || '',
              harvestYearSum: item.harvestYearSum || '',
              sendYearSum: item.sendYearSum || '',
              workCardNum: item.workCardNum || '',
              accountSum: item.accountSum || '',
              projectSum: item.projectSum || '',
            })),
          },
        }

        originalSend.call(this, JSON.stringify(wrappedResponse))
      } catch (error) {
        originalSend.call(this, body)
      }
    }
  }
  next()
})

// 添加自定义路由
server.use(
  jsonServer.rewriter({
    '/api/*': '/$1',
  })
)

// 使用默认路由器
server.use(router)

// 启动服务器
const port = process.env.PORT || 3000
server.listen(port, () => {
  console.log(`JSON Server 正在运行在端口 ${port}`)
  console.log(`访问地址: http://localhost:${port}`)
  console.log(`API文档: http://localhost:${port}/monthlyStatistics`)
})
