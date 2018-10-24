/*jshint esversion:6*/
const express = require('express');
const mongoose = require('mongoose');

const DB_URL = "mongodb://boya:admin123@ds159997.mlab.com:59997/expenses"

    // this.tempList = ['Joy Yee Noodle', '10Q Chicken']
    // this.imgList = ['/img/jy.jpg', '/img/10q.jpg']
    // this.descList = ['BYOB eatery offers an extensive menu of Pan-Asian offerings & smoothies in a basic setting.', 'Specializing in fried chicken, 10Q serves up chicken tenders, wings, sandwiches, bowls and combo platters with a variety of sauces available. Sides include bacon ranch cheese fries, white rice, pickled jalapenos and more.']
    // this.addrList = ['519 Davis St', '816 Church St']

mongoose.connect(DB_URL);
mongoose.connection.on('connected',function(){
	console.log('mongo connect success ');
});

const Restaurant = mongoose.model('restaurant',new mongoose.Schema({
		temp:{type:String,required:true},
		img:{type:String,required:true},
		desc:{type:String,required:true},
		addr:{type:String,required:true}
}));


/*Restaurant.create({
	temp:'Joy Yee Noodle',
	img:'/img/jy.jpg',
	desc:'BYOB eatery offers an extensive menu of Pan-Asian offerings & smoothies in a basic setting.',
	addr:'519 Davis St'
},function(err,doc){
	if(!err){
		console.log(doc);
	}else{
		console.log(err);
	}
});

Restaurant.create({
	temp:'10Q Chicken',
	img:'/img/10q.jpg',
	desc:'Specializing in fried chicken, 10Q serves up chicken tenders, wings, sandwiches, bowls and combo platters with a variety of sauces available. Sides include bacon ranch cheese fries, white rice, pickled jalapenos and more.',
	addr:'816 Church St'
},function(err,doc){
	if(!err){
		console.log(doc);
	}else{
		console.log(err);
	}
});*/


var app = express();

app.get('/',function(req,res){
	res.send('<h1>Hello Feedr</h1>');
});

app.get('/data',function(req,res){
	Restaurant.find({},function(err,doc){
		res.json(doc);
	});
});

app.get('/deleteAll',function(req,res){
	Restaurant.remove({},function(err,doc){
		console.log(doc);
	});
});

app.listen(9093,function(){
	console.log('Node app start at port 9093');
});
