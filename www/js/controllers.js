var app = angular.module('cbit.controllers', []);

app.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
});


app.controller('homeCtrl', function($scope){
	$scope.data = 	 "hai";

});
app.controller('transportController', function($scope){
	$scope.data = 	 "hai";

});
app.controller('attendanceController', function($scope, $cordovaInAppBrowser, $ionicPopup, $timeout){
	
	var options = {
      location: 'no',
      clearcache: 'no',
      toolbar: 'no'
   };

   $scope.openBrowser = function() {
      $cordovaInAppBrowser.open('http://erp.cbit.org.in/', '_blank', options)
		
      .then(function(event) {
         // success
      })
		
      .catch(function(event) {
         // error
      });
   }
   
   $scope.pList = [
	70, 75, 80, 85, 90
   ];
	$scope.cAlert = function(data1){
		if(data1>470){
			var alertPopup = $ionicPopup.alert({
					title: 'Limit Exceeds',
					template: "Expected Value Below 470"
				});
				alertPopup.then(function(res) {
					// Custom functionality....
				});	
			}
	};
	$scope.aAlert = function(data2){
		if(data2>470){
			var alertPopup = $ionicPopup.alert({
					title: 'Limit Exceeds',
					template: "Expected Value Below 470"
				});
				alertPopup.then(function(res) {
					// Custom functionality....
				});	
			}
	};
   $scope.mineBunk = function(data){
		alert("noc: "+data.noc+", noa: "+data.noa+", rp: "+data.rp);
			if((data.noa>data.noc)||(data.noc>470)||(data.noa>470)){
				var alertPopup = $ionicPopup.alert({
					title: 'Input Error',
					template: "Please Provide Valid Details"
				});
				alertPopup.then(function(res) {
					// Custom functionality....
				});	
			}else{
				///////////////
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
						if(Math.round((i1/conducted)*100)==required){
							if(Math.round((attended-i1)+df*xf)+conducted>=470){
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
				
			}
		
		
   };
});

app.controller('PlaylistCtrl', function($scope, $stateParams) {
});
app.controller('mineCtrl', function($scope, $stateParams) {

});
app.controller('papersController', function($scope, 
	$stateParams, $cordovaFileOpener2, $cordovaFileTransfer, $ionicPopup, $timeout, $ionicPlatform, $cordovaLocalNotification) {
	$scope.Download = function (url) {
	  $scope.sym = ""
      ionic.Platform.ready(function(){
             var filename = url.split("/").pop();
             var targetPath = cordova.file.externalRootDirectory + 'Download/' + filename;
			 
              $cordovaFileTransfer.download(url, targetPath, {}, true).then(function (result) {
                    $scope.hasil = 'Save file on '+targetPath+' success!';
                    $scope.mywallpaper=targetPath;
              }, function (error) {
                    $scope.hasil = 'Error Download file';
              }, function (progress) {
                    $scope.downloadProgress = (progress.loaded / progress.total) * 100;
					$scope.sym = "%";
					if($scope.downloadProgress>=100){
						$scope.showConfirm = function() {
	
						var confirmPopup = $ionicPopup.confirm({
								title: 'Download Completed',
								template: 'Open File Now'
							});

						confirmPopup.then(function(res) {
							if(res) {
									$scope.openMyFile = function(){
										$cordovaFileOpener2.open(
											'/sdcard/Download/'+filename,
											'application/rar', 
											{ 
												error : function(e) { 
													alert('Error status: ' + e.status + ' - Error message: ' + e.message);
												},
												success : function () {
													//alert.log('file opened successfully'); 				
												}
											}
										);
									}
									$scope.openMyFile();
									console.log('Sure!');
							} else {
								console.log('Not Now!');
							}
						});
		
					};
					$scope.showConfirm();
					}
						
              });
			
      });
  }
});
app.controller('DownloadController', function($scope, $cordovaFileTransfer, $ionicPopup, $timeout, $ionicPlatform, $cordovaLocalNotification, $cordovaFileOpener2) {
	
	  $scope.years = [
		{y:1},
		{y:2},
		{y:3},
		{y:4}
	  ];
	  $scope.depts = [
		{d:"Bio-Tech"},
		{d:"Civil"},
		{d:"Chemical"},
		{d:"CSE"},
		{d:"ECE"},
		{d:"EEE"},
		{d:"IT"},
		{d:"MECH"},
		{d:"PROD"}
	  ];
	  
	  $scope.depts2 = [
	  {d:"MTech CSE"},
	  {d:"ME CIVIL"},
	  {d:"ME CAD CAM"},
	  {d:"ME THERMAL Engg"},
	  {d:"ME EEE (PSPE)"},
	  {d:"ME ECE (Comm.Engg.)"},
	  {d:" ME ECE (ES & VLSI)"},
	  {d:"MTech IT (CNIS)"},
	  {d:"MCA 1/3"},
	  {d:"MBA 2nd year I sem"},
	  {d:"MCA 3rd year I and II sem"}
	  
	  ];
	  var branch;
	branch	  = [
	  {
		"name":"Bio-Tech",
		"year":[
		"http://cbit.ac.in/files/I sem Syllabus - BioTech.pdf",
		"http://cbit.ac.in/files/2nd Year Syllabus - Biotech.pdf",
		"http://cbit.ac.in/files/BTech - Biotech - III Year - Scheme and Syllabus.pdf",
		"http://cbit.ac.in/files/BIOTECH 4th SYLLABUS-16.pdf"
		]  
	  },
	  {
		"name":"Civil",
		"year":[
		"http://cbit.ac.in/files/Civil-ECE-Mech-Prod-Chem-16.pdf",
		"http://cbit.ac.in/files/2nd Year Syllabus - CIVIL.pdf",
		"http://cbit.ac.in/files/BE - CIVIL - III Year - Scheme and Syllabus.pdf",
		"http://cbit.ac.in/files/CIVIL 4th Yr Syllabus -16.pdf"
		]  
	  },
	  {
		"name":"Chemical",
		"year":[
		"http://cbit.ac.in/files/Civil-ECE-Mech-Prod-Chem-16.pdf",
		"http://cbit.ac.in/files/2-4 chemical CHEM-2015.pdf",
		"http://cbit.ac.in/files/BTech-Chem-III year Scheme and Syllabus.pdf",
		"http://cbit.ac.in/files/Chemical Engg4sylla- 2016-17.pdf"
		]  
	  },
	  {
		"name":"CSE",
		"year":[
		"http://cbit.ac.in/files/CSE-ECE-IT-16.pdf",
		"http://cbit.ac.in/files/2nd Year Syllabus - CSE.pdf",
		"http://cbit.ac.in/files/BE - CSE - III Year - Scheme and Syllabus.pdf",
		"http://cbit.ac.in/files/CSE - IV Year Syllabus-16.pdf"
		]  
	  },
	  {
		"name":"ECE",
		"year":[
		"http://cbit.ac.in/files/CSE-ECE-IT-16.pdf",
		"http://cbit.ac.in/files/2nd Year Syllabus - ECE 29.12.14.pdf",
		"http://cbit.ac.in/files/BE - ECE - III Year - Scheme and Syllabus.pdf",
		"http://cbit.ac.in/files/ECE 4 th Year Syllabus-16.pdf"
		]  
	  },
	  {
		"name":"EEE",
		"year":[
		"http://cbit.ac.in/files/Civil-ECE-Mech-Prod-Chem-16.pdf",
		"http://cbit.ac.in/files/2nd Year Syllabus - EEE.pdf",
		"http://cbit.ac.in/files/BE - EEE - III Year - Scheme and Syllabus.pdf",
		"http://cbit.ac.in/files/EEE 4th year syllabus-16.pdf"
		]  
	  },
	  {
		"name":"IT",
		"year":[
		"http://cbit.ac.in/files/CSE-ECE-IT-16.pdf",
		"http://cbit.ac.in/files/2nd Year Syllabus - IT_0.pdf",
		"http://cbit.ac.in/files/BE - IT - III Year - Scheme and Syllabus.pdf",
		"http://cbit.ac.in/files/IT-4th Year 2016-17.pdf"
		]  
	  },
	  {
		"name":"MECH",
		"year":[
		"http://cbit.ac.in/files/Civil-ECE-Mech-Prod-Chem-16.pdf",
		"http://cbit.ac.in/files/2nd Year Syllabus - MECH.pdf",
		"BE - MECH - III Year - Scheme and Syllabus.pdf",
		"http://cbit.ac.in/files/Med 4 th year syllabus-16.PDF"
		]  
	  },
	  {
		"name":"PROD",
		"year":[
		"http://cbit.ac.in/files/Civil-ECE-Mech-Prod-Chem-16.pdf",
		"http://cbit.ac.in/files/2nd Year Syllabus - PROD.pdf",
		"http://cbit.ac.in/files/Prod_0.pdf",
		"http://cbit.ac.in/files/Prod 4th year syllabus-16.PDF"
		]  
	  }
	  ];
	  
	  var branch2 = [
	  {
		"name":"MTech CSE",
		"y":"http://cbit.ac.in/files/M.Tech cse-syllabus-17.pdf"
	  },
	  {
		"name":"ME CIVIL",
		"y":"http://cbit.ac.in/files/ME CIVIL-Struct Engg-Syllabus-2015-16.pdf"
	  },
	  {
		"name":"ME CAD CAM",
		"y":"http://cbit.ac.in/files/ME-CADCAM Syllabus-2016-17.pdf"   
	  },
	  {
		"name":"ME THERMAL Engg",
		"y":"http://cbit.ac.in/files/ME-THERMAL Syllabus-2016-17.pdf"   
	  },
	  {
		"name":"ME EEE (PSPE)",
		"y":"http://cbit.ac.in/files/ME-EEE-Syllabus-2016-17.pdf"   
	  },
	  {
		"name":"ME ECE (Comm.Engg.)",
		"y":"http://cbit.ac.in/files/ME ECE CE-17-pdf.pdf"   
	  },
	  {
		"name":"ME ECE (ES & VLSI)",
		"y":"http://cbit.ac.in/files/ME-ECE-vlsi-17.pdf"   
	  },
	  {
		"name":"MTech IT (CNIS)",
		"y":"http://cbit.ac.in/files/MTech IT CNIS-17.pdf"   
	  },
	  {
		"name":"MCA 1/3",
		"y":"http://cbit.ac.in/files/MCA-CBCS-1by3-2016-17.pdf"   
	  },
	  {
		"name":"MBA 2nd year I sem",
		"y":"http://cbit.ac.in/files/Syllabus with scheme - MBA II yr I sem.pdf"   
	  },
	  {
		"name":"MCA 3rd year I and II sem",
		"y":"http://cbit.ac.in/files/MCA3by3syllabus-17.pdf"   
	  }
	];
	  //$scope.d= "";
	  //$scope.y = 0;
	  
	  
	  
	  
	  
	  
	  
	  
  $scope.Download = function (url) {
	  $scope.sym = "";
      ionic.Platform.ready(function(){
            // var url = "http://3.bp.blogspot.com/-XchURXRz-5c/U5ApPOrPM9I/AAAAAAAADoo/YZEj4qeSlqo/s1600/Final-Fantasy-XV-Noctis-Red-Eyes.png";
             var filename = url.split("/").pop();
             var targetPath = cordova.file.externalRootDirectory + 'Download/' + filename;
			 
	
			
              $cordovaFileTransfer.download(url, targetPath, {}, true).then(function (result) {
                    $scope.hasil = 'Save file on '+targetPath+' success!';
                    $scope.mywallpaper=targetPath;
              }, function (error) {
                    $scope.hasil = 'Error Download file';
              }, function (progress) {
                    $scope.downloadProgress = (progress.loaded / progress.total) * 100;
					$scope.sym = "%";
					if($scope.downloadProgress>=100){
						//$scope.scheduleSingleNotification(targetPath);
						$scope.showConfirm = function() {
	
						var confirmPopup = $ionicPopup.confirm({
								title: 'Download Completed',
								template: 'Open File Now'
							});

						confirmPopup.then(function(res) {
							if(res) {
									$scope.openMyFile = function(){
										$cordovaFileOpener2.open(
											'/sdcard/Download/'+filename,
											'application/pdf', 
											{ 
												error : function(e) { 
													alert('Error status: ' + e.status + ' - Error message: ' + e.message);
												},
												success : function () {
													//alert.log('file opened successfully'); 				
												}
											}
										);
									}
									$scope.openMyFile();
									console.log('Sure!');
							} else {
								console.log('Not Now!');
							}
						});
		
					};
					$scope.showConfirm();
					}
						
              });
			
      });
  }
  
  
  
  var d ="";
	  var y=0;
	  $scope.department = function(s1){
		  d = s1;
		  //j=s1;
		  //alert(d);
	  };
	  $scope.year = function(s2){
		  y = s2;
		  //alert(y);
	  };
	  $scope.download = function(){
		if(d == "" || y==0){
			$scope.showAlert = function() {
				var alertPopup = $ionicPopup.alert({
					title: 'Download',
					template: 'Please Do Select Any!'
				});
				alertPopup.then(function(res) {
					// Custom functionality....
				});	
			}
			$scope.showAlert();
		}else{
			//alert("ThankYou ");
			for(var i=0;i<branch.length;i++){
				if(branch[i].name==d){
					//alert(branch[i].year[y-1]);
					$scope.Download(branch[i].year[y-1]);
				}
			}
			
		}
	  };
	var d2="";
	$scope.department2 = function(s1){
		  d2 = s1;
		  //j=s1;
		  //alert(d2);
	  };
    $scope.download2 = function(){
		if(d2 == ""){
			$scope.showAlert = function() {
				var alertPopup = $ionicPopup.alert({
					title: 'Download',
					template: 'Please Do Select Any!'
				});
				alertPopup.then(function(res) {
					// Custom functionality....
				});	
			}
			$scope.showAlert();
		}else{
			//alert("ThankYou ");
			for(var i=0;i<branch2.length;i++){
				if(branch2[i].name==d2){
					//alert(branch2[i].y);
					$scope.Download(branch2[i].y);
				}
			}
			
		}
	  };
});
