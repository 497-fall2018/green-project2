const express = require('express')

const Router = express.Router()
const model = require('./model')
const Restaurant = model.getModel('restaurant')

Router.get('/',function(req,res){
	res.send('<h1>Hello Feedr</h1>');
});


Router.get('/data',function(req, res){
	// User.remove({},function(e,d){})
	Restaurant.find({},function(err,doc){
		return res.json(doc)
	})
})


Router.get('/deleteAll',function(req,res){
	Restaurant.remove({},function(err,doc){
		console.log(doc);
	});
});

// Router.post('/login', function(req,res){
// 	const {user, pwd} = req.body
// 	User.findOne({user,pwd:md5Pwd(pwd)},_filter,function(err,doc){
// 		if (!doc) {
// 			return res.json({code:1,msg:'用户名或者密码错误'})
// 		}
// 		res.cookie('userid', doc._id)
// 		return res.json({code:0,data:doc})
// 	})
// })
// Router.post('/register', function(req, res){
// 	const {user, pwd, type} = req.body
// 	User.findOne({user},function(err,doc){
// 		if (doc) {
// 			return res.json({code:1,msg:'用户名重复'})
// 		}
		
// 		const userModel = new User({user,type,pwd:md5Pwd(pwd)})
// 		userModel.save(function(e,d){
// 			if (e) {
// 				return res.json({code:1,msg:'后端出错了'})
// 			}
// 			const {user, type, _id} = d
// 			res.cookie('userid', _id)
// 			return res.json({code:0,data:{user, type, _id}})
// 		})
// 	})
// })
// Router.get('/info',function(req, res){
// 	const {userid} = req.cookies
// 	if (!userid) {
// 		return res.json({code:1})
// 	}
// 	User.findOne({_id:userid} ,_filter , function(err,doc){
// 		if (err) {
// 			return res.json({code:1, msg:'后端出错了'})
// 		}
// 		if (doc) {
// 			return res.json({code:0,data:doc})
// 		}
// 	})
// 	// 用户有没有cookie
// })



module.exports = Router

/*这个里面很多东西都用不上,就先搞最简单的部分吧,没错,就先去搞这个list的就好了 */