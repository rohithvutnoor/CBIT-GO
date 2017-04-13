var request = require('request');
var cheerio = require('cheerio');

	var url = "http://cbit.ac.in/?q=node/2219";

	function dos(){
		var obj = {
			urls:[
			]
		};
		request(url,function(err,res,body){
		
		var $ =  cheerio.load(body);
		
		
		$('a', '.node').each(function(){
			var titlep = $(this).text();
			var urlc = $(this).attr('href');
		
		
			var news = {
				title:titlep,
				links:urlc
			};
	//			var url1 = $(this).text();
				obj.urls.push(news);
		
			});
			//console.log(obj.urls);
			done();
		});
		
		return obj;
	};
	var j = dos();
	function done(){
		console.log(j);
		return j;
	}
	
	