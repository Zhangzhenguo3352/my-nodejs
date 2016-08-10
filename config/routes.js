//nodejs 路由配置文件
module.exports = function(app){
    app.get('/',function(req,res,next){
        res.render('index',{title:'wqwqwe'})
    });
    app.get('/zhuCe',function(req,res,next){
        // 渲染的模板文件 zheCe
        res.render('zhuCe',{title:'注册'})
    });
    // 这是注册post 提交的 数据
    app.post('/zhuCe',function(req,res,next){
        // req.body 可以拿到表单提交的给来的值
        var postaDate = {
            name : req.body.name,
            password : req.body.password

        }
        console.log(postaDate)
        // send 返回来的内容
        res.send('注册成功')
    });


    app.get('/dengLu',function(req,res,next){
        res.render('dengLu',{title:'登录'})
    });
    app.get('/tiChu',function(req,res,next){
        res.render('tiChu',{title:'退出'})
    });
}