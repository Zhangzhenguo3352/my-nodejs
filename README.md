```
报错用户状态需要下载，三个模块
 npm install express-session connect-mongo mongoose --save

//第一步
var mongoose = require('mongoose');
var session = require('express-session');
//加载 session 然后 下面的 传递了参数进去，然后就可以连接数据库了
var MongoStore = require('connect-mongo')(session);

//第二步
mongoose.connect('mongoodb://localhost/blogooo');

//第三步
app.use(session({
  secret: "45454",
  store: new MongoStore({
    cookieSecret: 'jdg2222hjf',
    db: 'blogooo',//  数据库名称
    host: 'localhost' // 服务器
  })
}));

// 第四步
//启动 mongoodb 服务命令
// mongod -dbpath="H:\AppServ\www\nodejs\data"
// start mongod -dbpath D:/phpStudy/WWW/nodejs/data

```