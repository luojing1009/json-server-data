# JSON Server Data API

基于 json-server 的 RESTful API 接口服务，提供月度统计数据的 CRUD 操作。

## 🚀 在线访问

- **项目主页**: `https://你的GitHub用户名.github.io/json-server-data/`
- **格式化 API**: `https://你的GitHub用户名.github.io/json-server-data/monthlyStatistics.json`
- **原始数据**: `https://你的GitHub用户名.github.io/json-server-data/db.json`

## 📊 数据结构

### 月度统计数据 (monthlyStatistics)

```json
{
  "id": 1,
  "bank_code": "1",
  "area_code": "1",
  "platform_code": "1",
  "month": "1760929533",
  "harvestYearSum": "20",
  "sendYearSum": "20",
  "workCardNum": "20",
  "accountSum": "20",
  "projectSum": "20"
}
```

## 🔗 API 接口

### 获取所有月度统计数据

```
GET /monthlyStatistics
```

### 获取单条数据

```
GET /monthlyStatistics/{id}
```

### 创建新数据

```
POST /monthlyStatistics
Content-Type: application/json

{
  "bank_code": "1",
  "area_code": "1",
  "platform_code": "1",
  "month": "1760929533",
  "harvestYearSum": "20",
  "sendYearSum": "20",
  "workCardNum": "20",
  "accountSum": "20",
  "projectSum": "20"
}
```

### 更新数据

```
PUT /monthlyStatistics/{id}
PATCH /monthlyStatistics/{id}
```

### 删除数据

```
DELETE /monthlyStatistics/{id}
```

## 🛠️ 本地开发

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm start
# 或
npm run dev
```

服务器将在 `http://localhost:3000` 启动

## 📝 查询参数

json-server 支持多种查询参数：

### 分页

```
GET /monthlyStatistics?_page=1&_limit=10
```

### 排序

```
GET /monthlyStatistics?_sort=id&_order=desc
```

### 筛选

```
GET /monthlyStatistics?bank_code=1
GET /monthlyStatistics?harvestYearSum_gte=10
```

### 全文搜索

```
GET /monthlyStatistics?q=搜索关键词
```

## 🚀 部署到 GitHub Pages

1. 推送代码到 GitHub 仓库
2. 启用 GitHub Actions
3. 自动部署到 GitHub Pages

## 📄 许可证

MIT License
