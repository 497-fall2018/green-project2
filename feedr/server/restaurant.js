const express = require('express')
const yelp = require('yelp-fusion');

const Router = express.Router()
const model = require('./model')
const Restaurant = model.getModel('restaurant')
const Yelp_Restaurant = model.getModel('yelp_restaurant')

const apiKey = 'h-92ctgESgaQnU1snhIDjHp997zk4U0YAP13T1fps98DT14y4AlTW3bmUoqf1A1HHPDjH2-snhdttnUUF1gupBtFDDP8CF7KRcYb1s2qzKb5Y32EirPW69uVMwLaW3Yx';
const client = yelp.client(apiKey);

Router.get('/',function(req,res){
	res.send('<h1>Hello Feedr</h1>');
});


Router.get('/data',function(req, res){
	Restaurant.find({},function(err,doc){
		return res.json(doc)
	})
})


Router.get('/restaurant_deleteAll',function(req,res){
	Restaurant.remove({},function(err,doc){
		console.log(doc);
	});
});

Router.get('/create_yelp_restaurant_001_Evanston',function(req,res){
	//就是你只要请求这个路径,我就会得到一大堆的东西,也就是开始歘了反应的操作的,我要把那个请求的转发路径放到这个里面来
	const searchRequest = {
		term:'restaurants',
		location:'Evanston',
		limit:5
	  };
    //前面定义好了数据,这边就是直接给发送过去的,也就是我给了一个好的路径,然后,这边给发送过去的哦,然后就是直接回应了,
	client.search(searchRequest).then(response => {
		for(var i=0; i<5; i++){
			const firstResult = response.jsonBody.businesses[i];
			console.log("**************"+firstResult.name)
			const {id, name, alias,image_url,phone} = firstResult;
			console.log(id)
			console.log(name)
			console.log(alias)
			console.log(image_url)
			console.log(phone)
			const yelp_RestaurantrModel = new Yelp_Restaurant({id,user_id:"001",name,alias,image_url,phone,location:"Evanston"})
			yelp_RestaurantrModel.save(function(e,d){
				if (e) {
					return res.json({msg:'data transmission fail'})
				}
				console.log("data transmission succeed");
				})
		}
	  }).catch(e => {
		console.log(e);
	  });	
	  res.send('<h2>A dataset of 5 restaurants in Evanston for user_id 001 have been obtained from Yelp</h2>');  
})

Router.get('/create_yelp_restaurant_001_Chicago',function(req,res){
	//就是你只要请求这个路径,我就会得到一大堆的东西,也就是开始歘了反应的操作的,我要把那个请求的转发路径放到这个里面来
	const searchRequest = {
		term:'restaurants',
		location:'Chicago',
		limit:5
	  };
    //前面定义好了数据,这边就是直接给发送过去的,也就是我给了一个好的路径,然后,这边给发送过去的哦,然后就是直接回应了,
	client.search(searchRequest).then(response => {
		for(var i=0; i<5; i++){
			const firstResult = response.jsonBody.businesses[i];
			console.log("**************"+firstResult.name)
			const {id, name, alias,image_url,phone} = firstResult;
			console.log(id)
			console.log(name)
			console.log(alias)
			console.log(image_url)
			console.log(phone)
			const yelp_RestaurantrModel = new Yelp_Restaurant({id,user_id:"001",name,alias,image_url,phone,location:"Chicago"})
			yelp_RestaurantrModel.save(function(e,d){
				if (e) {
					return res.json({msg:'data transmission fail'})
				}
				console.log("data transmission succeed");
				})
		}
	  }).catch(e => {
		console.log(e);
	  });	  
	  res.send('<h2>A dataset of 5 restaurants in Chicago for user_id 001 have been obtained from Yelp</h2>');  
})
//现在我生成数据的是一方面,为什么我不增加一个请求地址,然后,把这个请求的地址给存储下来的,直接进行发送的啊
Router.get('/request_yelp_restaurant_001_Chicago',function(req,res){
	Yelp_Restaurant.find({user_id:"001",location:'Chicago'},function(err,doc){
		return res.json(doc)
	})
})

Router.get('/request_yelp_restaurant_001_Evanston',function(req,res){
	Yelp_Restaurant.find({user_id:"001",location:'Evanston'},function(err,doc){
		return res.json(doc)
	})
})


Router.get('/yelp_restaurant_deleteAll',function(req,res){
	Yelp_Restaurant.remove({},function(err,doc){
		console.log(doc);
	});
	res.send('<h2>All data in the Yelp_Restaurant has been deleted !</h2>');  
});


////gettask
// router.get('/gettask',function(req, res,next){
//     var e=request({url:'http://xxx:123456/getVerify?account=123456',
//     method:'GET',
//     headers:{'Content-Type':'text/json' }
//     },function(error,response,body){
//         if(!error && response.statusCode==200){
//             res.render('task',{'data':JSON.parse(body) } );
//         }
//     });
// })


module.exports = Router

//继续用这个API吧,毕竟别的东西都不怎么会用的哦,还是这个用起来比较简单一点的哦.毕竟这个api封装的很好,基本上所有的东西全部都有了,那么,
//我觉得我应该把这个数据库设计的更为完善一点的哦,就是再加入一些数据,使得这个数据库更为完善才可以的哦,基本上就是这样决定的啦,哈哈哈,
//一步步来就可以了,难不成我的mongdb也要存储图片,fastdfs图片存储系统,应该怎么去弄得啊,先不用管数据库中的数据不够完善的问题,先去解决图片显示的问题,
//这个才是重要的问题的哦,



//你看上面的路径,就是很简答的就是把这个路径给搞一下就可以了,所以,接下来,就先去研究yelp的API,我要根据里面的数据类型开始重新编写数据库
//格式,也就是结构,然后,直接进行存储东西的哦,所以,图片的处理还是一个大问题的,要迅速去解决,我挺喜欢这个作业的哦.

/*
看视频是不能够让人加深学习的哦,所以,还是按照自己的逻辑继续往前走,首先,就是要看完这三章,但是,看的过程中,又要思考为什么,自己能做出一个小项目的哦,
比如,我为什么不在服务器端口进行发送yelp API的请求,然后获取数据,然后更改成我所需要的东西,然后返回前端请求页面的,所以,这个流程我想做一下,所以,首先就是
要了解yelp的API,看一看能不能发送请求,发送成功之后,然后再自动存储到数据库当中,没错,就是这样来进行执行的.下午讨论之前做完这件事情已经很了不起了.
 想一下下一步怎么走,就是要加入一个api,在服务器端口的api,还要设置一下自己的偏好,也就是自己不喜欢哪一家餐厅的
 不用先搞那么复杂,先从最简单的开始,首先就是要发送一个地址请求,然后获取了数据,然后,将这些数据存储起来就可以了,所以,我应该设置一个服务器请求路径,
 重新开始设置服务器的请求路径的问题,这个非常重要的哦,
*/
			//const prettyJson = JSON.stringify(firstResult, null, 4);
			//console.log(prettyJson.name);
			//漂亮,真的是一步步把这个问题个解决了,真的很是享受这种探索的过程的哦,真的是很棒的哦,太具有感觉了,现在就是要进行下一步处理了,
			//分析一下为什么这个样子的哦,首先就是数据返回的时候,直接给的就是那个真实的数据,只要.body也就是表示已经解析好了,因为这个本来就又有这个
			//jsonBody的东西,所以,我们只要要这个就可以了,基本上已经算是结束的了,所以,现在的问题是存放进去的哦,
			//今天晚上再考虑这个NU VENTION的项目,现在先按照自己的进度快速前进吧,今天应该了解一下学校的选课政策的哦,就是准备好这些问题,尽可能一次性把
			//这个后续的打算给想清楚的哦,真的就不用触碰机器学习的领域了,自己只是了解有这个东西就可以了,自己的强项在与软件开发,所以,注意,你自己的强项在
			//哪个地方,自己真的不要参加了,因为你需要去刷题,去这样做的,不要再在自己的长处上浪费时间了

					//console.log(response)
        //return res.json('msg':"你已经连接成功了,并且数据已经返回去啦!!!!!")
		// return prettyJson;    
		//这个返回模式有点搞不清啊,我们七千查到的对象,直接打印是打印到服务器上面的, 所以,我想直接输出到浏览器好像就是很困难的哦
		//所以,想办法把这个东西给搞定一下的哦,就是处理这些问题的哦,
		//这个小小的请求的页面都没办法返回去,真是可笑啊,略过这个部分,快速开进下一个流程的,
		//我取出来五个,我想把这5个给循环遍历出来,有没有这种操作,
		//循环遍历是有了,现在想办法转换一下,就是钱取出来这些数据,然后,村阿奇了的

		//然后存储起来,到时候展示一下自己的进展的哦
		/*我现在遇到了极大的问题的哦,所以,这个要迅速去解决的哦,首先就是请求我这个服务器的时候,
		我服务器也能够发送请求,然后存储到服务器,我现在的关键是让这个能够返回,今天一定要早一点进行提交的,这个版本先自己创建一个库然后提交
		检查一下,不要再出现什么错误了,这样子真的是很危险的哦,注意,不要出现十五的哦. */