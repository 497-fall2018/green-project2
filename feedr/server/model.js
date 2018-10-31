const mongoose = require('mongoose')
// 链接mongo 并且使用imooc这个集合
const DB_URL = 'mongodb://boya:admin123@ds159997.mlab.com:59997/expenses'
mongoose.connect(DB_URL)


const models = {
	restaurant:{
		'temp':{type:String, 'require':true},
		'img':{type:String, 'require':true},
		'desc':{'type':String, 'require':true},
		'addr':{'type':String}
	}
}

for(let m in models){
	mongoose.model(m, new mongoose.Schema(models[m]))
}

module.exports = {
	getModel:function(name){
		return mongoose.model(name)
	}
}


/*现在就开始着手开始更改自己的代码,要开始分包的哦 
首先就是服务器分了三个模块,一个模块是用来搞model的,然后,另外一个模块是,就是我先定义了我的model,然后
也就是对于数据库而言,这个就是model,model就是数据库相关的操作的,引入mooogo,导入这个地址,然后呢,
我定义个models,里面有各种的东西,也就是这个模型是很多的,也就是mongdb是可以处理这些东西的,也就是没有多大的问题的哦.
但是,这些仅仅是定义,并没有让mongdb来scheme来schema一下的,也就是我这个数据库接受了这个东西的,然后,我再暴露一个
借口,这个接口是非常有趣了,因为暴露出去的是一个函数,也就是给我一个名字,我mongoose把这个模型给你的,然后,你 就可以
在这个model,也就是这个小的model里面进行自由操作了,所以,我们在进行学习的时候,虽然代码看起来很简单,但是,你啊哟理解这个中间的
原理,这个是非常重要的,也就是mongdb,是独自的一部分,如果你定义了多个相关的类,那就是多个相关的类喽.然后通过函数,
暴露出接口,那么一切问题就全部都搞定了.所以,这个部分改一改问题是没有多大的哦.


*/