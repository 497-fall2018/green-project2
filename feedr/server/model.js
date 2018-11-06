const mongoose = require('mongoose')
const DB_URL = 'mongodb://boya:admin123@ds159997.mlab.com:59997/expenses'
mongoose.connect(DB_URL)

const models = {
	restaurant:{
		'name':{type:String, 'require':true},
		'img':{type:String, 'require':true},
		'desc':{'type':String, 'require':true},
		'addr':{'type':String},
	},
	yelp_restaurant:{
		'id':{type:String,'require':true},
		'user_id':{type:String,'require':true},
		'alias':{type:String,'require':true},
		'name':{type:String,'require':true},
		'image_url':{type:String,'require':true},
		//'is_closed':{type:String,'require':true},
		'phone':{type:String,'require':true},
		'location':{type:String,'require':true}
	}
}







//这个就是先来进行实验一下,首先就是就是先去一个请求到evanston,然后
//我觉得,这个模型,应该弄得全面一点,毕竟,这个模块是由我负责的,所以,把模型弄得非常全面是必须要的步骤,所以,现在就开始解决这样的一个问题的哦,就是
//也就是到时候,怎么能把数据一次性全部搞进去,这个才是我需要考虑的问题的哦,所以,现在优先解决这个问题的哦,就是全部都用下来的哦,然后,我觉得一定会有
//简便方法给弄上去的,否则,这样一个个写真的是要累死了,先不用写,这个东西,真的就是体力活,我们先去思考看一看到底能不能直接放进去的哦,我需要这样来强化和加强的哦,
//特别是算法的部分,要有人帮助,指导你来刷题的,注意,所以,下一学期,要把科目给空闲出来,首先就是看一看这些复杂的请求到的数据,怎么才能直接给出去的,
//这个才是问题所在的哦,怎么感觉有点复杂的哦,要不,就先写一下的,基本上就是很清晰了,就是把这个东西弄全面一点的哦

// {
// 	"id": "BFEdIfL23ihfwTO1NPj6tA",
// 	"alias": "soban-korea-evanston-2",
// 	"name": "Soban Korea",
// 	"image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/bgsjXD-_UgMIrXbrXnec_w/o.jpg",
// 	"is_closed": false,
// 	"url": "https://www.yelp.com/biz/soban-korea-evanston-2?adjust_creative=gHBXhE4dHyvoZ2aXpr_PLg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=gHBXhE4dHyvoZ2aXpr_PLg",
// 	"review_count": 35,
// 	"categories": [
// 		{
// 			"alias": "korean",
// 			"title": "Korean"
// 		}
// 	],
// 	"rating": 4,
// 	"coordinates": {
// 		"latitude": 42.0587,
// 		"longitude": -87.6826
// 	},
// 	"transactions": [],
// 	"location": {
// 		"address1": "819 Noyes St",
// 		"address2": "",
// 		"address3": null,
// 		"city": "Evanston",
// 		"zip_code": "60201",
// 		"country": "US",
// 		"state": "IL",
// 		"display_address": [
// 			"819 Noyes St",
// 			"Evanston, IL 60201"
// 		]
// 	},
// 	"phone": "+18478694344",
// 	"display_phone": "(847) 869-4344",
// 	"distance": 1642.8769052431269
// },


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
