function createJson(){
	 finalData={};
	var finalDataDetail=[];
	finalData.type="trafficBilledInUS";
	function processData(data){
		var fjson={};
		fjson.Year=data.Year;
		fjson.WorldTotals=data.WorldTotals.MessageTelephoneServiceDetail.TrafficBilledInUS;
		var Regions=[];

		data.Regions.forEach(function (d){
		    var obj={};
		    obj.RegionName=d.RegionName;
		    obj.RegionTotals=d.RegionTotals.MessageTelephoneServiceDetail.TrafficBilledInUS;
		     var country=[];
		    d.TrafficReportDetails.forEach(function(t){
		       var obj1={};
		       obj1.CountryName=t.CountryName;
		       obj1.CountryDetail=t.MessageTelephoneServiceDetail.TrafficBilledInUS;
		       country.push(obj1);
		    })
		    obj.RegionDetail=country;
		    Regions.push(obj);
		})
		fjson.Regions=Regions;
		finalDataDetail.push(fjson);
		
	}

	d3.json("data/2011.json", function(d){
		processData(d);
		finalData.details=finalDataDetail;
		console.log(JSON.stringify(finalData));
		// d3.json("data/2009.json", function(d){
		// 	processData(d);
		// 	d3.json("data/2008.json", function(d){
		// 		processData(d);
		// 		d3.json("data/2007.json", function(d){
		// 			processData(d);
		// 			d3.json("data/2006.json", function(d){
		// 				processData(d);
		// 				d3.json("data/2005.json", function(d){
		// 					processData(d);
		// 					d3.json("data/2004.json", function(d){
		// 						processData(d);
		// 						d3.json("data/2003.json", function(d){
		// 							processData(d);
		// 							d3.json("data/2002.json", function(d){
		// 								processData(d);
		// 								finalData.details=finalDataDetail;
		// 								console.log(finalData);
		// 							});
		// 						});
		// 					});
		// 				});
		// 			});
		// 		});
		// 	});
		// });	
	});
}