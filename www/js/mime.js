var attended = data.noa;
				var conducted = data.noc;
				var required = data.rp;
				
				var p = (attended/conducted)*100;
				var xf = conducted/attended;
				var df = p-required;
				
				if(p<required){
					for(var i=attended+1;i>0;i++){
						conducted += 1;
						if((i/conducted)*100>=required){
							if(conducted>470){
								alert("You cant reach");
								break;
							}else{
								alert("you should attend "+ Math.round(i-attended)+" classes");
								break;
							}
						}
					}
				}else if(p>required){
					for(var i1=attended;i1>0;i1--){
						if(round((i1/conducted)*100)==required){
							if(round((attended-i1)+df*xf)+conducted>=470){
								alert("Total Classes Exceeded");
								break;
							}else{
								alert("You Can Bunk : "+Math.round((attended-i1)+df*xf)+" Classes.");
								break;
							}
				
						}
					}
				}else{
					alert("Level");
				}