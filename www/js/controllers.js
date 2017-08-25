var app = angular.module('cbit.controllers', []);

app.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

});

app.controller('splashCtrl', function($scope, $cordovaSplashscreen) {

  $cordovaSplashscreen.show();

});

app.controller('otherCtrl', function($scope) {
   $scope.image = "img/calender.jpg";
   //http://library.cbit.ac.in/CBIT%20Newsletter%202016-06.pdf  

});

app.controller('homeCtrl', function($scope, $http, $cordovaInAppBrowser){

   $scope.image = "img/home5.jpg";//, "img/home2.jpg", "img/home3.jpg"

   
   $scope.sendMail = function(){
      cordova.plugins.email.open({
         to:      'rohithvutnoor@gmail.com',
         cc:      '',
         bcc:     [],
         subject: 'CBIT GO',
         body:    ''
      });
   };

   $http({
      method: "GET",
      url: "http://rohithvutnoor.com/cbitdata/data.json"
   }).then(function(getData){
         $scope.data = getData.data.notifications;
         $scope.links = $scope.data.titles;

      });

   var options = {
      location: 'no',
      clearcache: 'no',
      toolbar: 'yes'
   };

   $scope.openBrowser = function() {
      $cordovaInAppBrowser.open('http://www.cbit.ac.in/', '_blank', options)
      
      .then(function(event) {
         // success
      })
      
      .catch(function(event) {
         // error
      });
   }

});

app.controller('clubsCtrl', function($scope){
	$scope.data = 	 "hai";

});

app.controller('devCtrl', function($scope, $ionicPopup){
   $scope.data =   "hai";

   $scope.open = function(url){
      var confirmPopup = $ionicPopup.confirm({
         title: 'Open In Browser',
         template: ''
      });

      confirmPopup.then(function(res) {
         if(res) {
            window.open(url,'_system');
         } else {
               console.log('Not Now!');
            }
      });
   }

});

app.controller('festsCtrl', function($scope, $ionicSlideBoxDelegate){
	$scope.data = 	 "hai";
   $scope.images1 = ["img/shruthi1.jpg", "img/shruthi2.jpg", "img/shruthi3.jpg"];
   $scope.images2 = ["img/sudhee1.jpg", "img/sudhee2.jpg", "img/sudhee3.jpg"];
   $scope.images3 = ["img/carpedium1.jpg", "img/carpedium2.jpg", "img/carpedium3.jpg"];
   //$scope.images = results.data.d.results;
            setTimeout(function() {
                $ionicSlideBoxDelegate.slide(0);
                $ionicSlideBoxDelegate.update();
                $scope.$apply();
   });

});

app.controller('mapsCtrl', function($scope){
	$scope.data = 	 "hai";

});
app.controller('contactsCtrl', function($scope){
	
	$scope.depts =[
 {
   "index": 1,
   "nod": "Civil Engg.",
   "name":"Dr. K. Jagannadha Rao",
   "phno": "08413201311",
   "email": "hod_civil@cbit.ac.in"
 },
 {
   "index": 2,
   "nod": "Electrical and Electronics Engg.",
   "name":"Dr. P.V. Prasad",
   "phno": "08413201313",
   "email": "hod_eee@cbit.ac.in"
 },
 {
   "index": 3,
   "nod": "Electronics and Communication Engg.",
   "name":"Dr. N.V. Koteswara Rao",
   "phno": "08413201307",
   "email": "hod_ece@cbit.ac.in"
 },
 {
   "index": 4,
   "nod": "Information Technology",
   "name":"Dr. K. Radhika",
   "phno": "04024193276",
   "email": "hod_it@cbit.ac.in"
 },
 {
   "index": 5,
   "nod": "Mechanical Engg",
   "name":"Dr. P. Ravinder Reddy",
   "phno": "08413201361",
   "email": "hod_me@cbit.ac.in"
 },
 {
   "index": 6,
   "nod": "Production Engg.",
   "name":"Dr. G. Haragopal",
   "phno": "08413201361",
   "email": "hod_pe@cbit.ac.in"
 },
 {
   "index": 7,
   "nod": "Computer Science and Engineering",
   "name":"Dr. Y. Rama Devi",
   "phno": "8466997208",
   "email": "hod_cse@cbit.ac.in"
 },
 {
   "index": 8,
   "nod": "Chemical Enginerrng",
   "name":"Dr. P.V. Naga Prapurna",
   "phno": "08413201308",
   "email": "hod_chem@cbit.ac.in"
 },
 {
   "index": 9,
   "nod": "Bio-Technology",
   "name":"Dr. T. SaiKrishna",
   "phno": "08413201017",
   "email": "hod_bt@cbit.ac.in"
 },
 {
   "index": 10,
   "nod": "School of Management Studies(MBA)",
   "name":"Dr. Saraswathi",
   "phno": "08413201317",
   "email": "hod_sms@cbit.ac.in"
 },
 {
   "index": 11,
   "nod": "Master of Computer Applications(MCA)",
   "name":"Dr. K.Sagar",
   "phno": "8466997209",
   "email": "hod_mca@cbit.ac.in"
 },
 {
   "index": 12,
   "nod": "Maths and Humanities",
   "name":"Dr. M. Ganeshwar Rao",
   "phno": "08413201342",
   "email": "hod_math@cbit.ac.in"
 },
 {
   "index": 13,
   "nod": "Physics",
   "name":"Dr. B. Linga Reddy",
   "phno": "08413201043",
   "email": "hod_physics@cbit.ac.in"
 },
 {
   "index": 14,
   "nod": "Chemistry",
   "name":"Dr. K. Laxmi",
   "phno": "08413201341",
   "email": "hod_chemistry@cbit.ac.in"
 },
 {
   "index": 18,
   "nod": "Acad & Exams",
   "name":"Prof. Y. Krishna Reddy",
   "phno": "04024193279",
   "email": "aec@cbit.ac.in"
 },
 {
   "index": 15,
   "nod": "Library and Info Center",
   "name":"Dr. Srikanth Reddy",
   "phno": "08413232161",
   "email": "librarian@cbit.ac.in"
 },
 {
   "index": 16,
   "nod": "Physical Education",
   "name":"Sri G. Shyam Mohan Reddy",
   "phno": "9866240157",
   "email": "pd@cbiti.ac.in"
 },
 {
   "index": 17,
   "nod": "Trainining and Placements",
   "name":"Dr. N.L.N. REDDY",
   "phno": "9849466587",
   "email": "nlnreddypo@gmail.com"
 }
];

//$scope.toggle = function() {
  //      $scope.myVar = !$scope.myVar;
    //};
	//$scope.call = function(number){
	//	alert(number);
	//};
	
	$scope.view = "";

});
app.controller('transportController', function($scope){
	$scope.data = 	 [
 {
   "busNo": 19,
   "routeName": "Uppal x Roads",
   "time": 7.04
 },
 {
   "busNo": 19,
   "routeName": "Survey of India",
   "time": 7.43
 },
 {
   "busNo": 19,
   "routeName": "Habsiguda St 8",
   "time": 7.47
 },
 {
   "busNo": 19,
   "routeName": "Ramanthapur",
   "time": 7.55
 },
 {
   "busNo": 19,
   "routeName": "Amberpet",
   "time": 8.03
 },
 {
   "busNo": 19,
   "routeName": "6 no. Junction",
   "time": 8.06
 },
 {
   "busNo": 19,
   "routeName": "Syndicate bank",
   "time": 8.08
 },
 {
   "busNo": 19,
   "routeName": "Vidyanagar (SVES)",
   "time": 8.09
 },
 {
   "busNo": 19,
   "routeName": "Nallakunta",
   "time": 8.11
 },
 {
   "busNo": 19,
   "routeName": "Fever hospital",
   "time": 8.13
 },
 {
   "busNo": 19,
   "routeName": "Barkatpura",
   "time": 8.15
 },
 {
   "busNo": 19,
   "routeName": "Narayanguda",
   "time": 8.21
 },
 {
   "busNo": 19,
   "routeName": "Himayath nagar",
   "time": 8.27
 },
 {
   "busNo": 19,
   "routeName": "Lakdi ka pool",
   "time": 8.30
 },
 {
   "busNo": 19,
   "routeName": "Masab Tank",
   "time": 8.35
 },
 {
   "busNo": 19,
   "routeName": "NMDC",
   "time": 8.37
 },
 {
   "busNo": 19,
   "routeName": "Mehdipatnam",
   "time": 8.40
 },
 {
   "busNo": 19,
   "routeName": "Kakatiya Nagar",
   "time": 8.51
 },
 {
   "busNo": 19,
   "routeName": "CBIT",
   "time": 9.23
 },
 {
   "busNo": 28,
   "routeName": "Sangeet",
   "time": 7.58
 },
 {
   "busNo": 28,
   "routeName": "Patny",
   "time": 8.05
 },
 {
   "busNo": 28,
   "routeName": "Paradise",
   "time": 8.09
 },
 {
   "busNo": 28,
   "routeName": "Airport",
   "time": 8.13
 },
 {
   "busNo": 28,
   "routeName": "HPS",
   "time": 8.15
 },
 {
   "busNo": 28,
   "routeName": "Life style",
   "time": 8.21
 },
 {
   "busNo": 28,
   "routeName": "JVR park",
   "time": 8.23
 },
 {
   "busNo": 28,
   "routeName": "Care hospital",
   "time": 8.27
 },
 {
   "busNo": 28,
   "routeName": "Mehdipatnam",
   "time": 8.40
 },
 {
   "busNo": 28,
   "routeName": "Tolichowki",
   "time": 8.47
 },
 {
   "busNo": 28,
   "routeName": "Tolichowki cross road",
   "time": 8.50
 },
 {
   "busNo": 28,
   "routeName": "Narayanamma college",
   "time": 9.00
 },
 {
   "busNo": 28,
   "routeName": "Dargah",
   "time": 9.05
 },
 {
   "busNo": 28,
   "routeName": "Delhi Public School",
   "time": 9.09
 },
 {
   "busNo": 28,
   "routeName": "CBIT",
   "time": 9.23
 },
 {
   "busNo": 29,
   "routeName": "Radhika (ECIL)",
   "time": 7.35
 },
 {
   "busNo": 29,
   "routeName": "Officers colony",
   "time": 7.38
 },
 {
   "busNo": 29,
   "routeName": "Sainikpuri x Road",
   "time": 7.42
 },
 {
   "busNo": 29,
   "routeName": "Neredmet x Road",
   "time": 7.47
 },
 {
   "busNo": 29,
   "routeName": "Vinayak Nagar",
   "time": 7.47
 },
 {
   "busNo": 29,
   "routeName": "Krupa Complex",
   "time": 7.50
 },
 {
   "busNo": 29,
   "routeName": "Safilguda  x roads",
   "time": 7.53
 },
 {
   "busNo": 29,
   "routeName": "Anandbagh",
   "time": 7.55
 },
 {
   "busNo": 29,
   "routeName": "Anutex -Malkajgiri",
   "time": 7.58
 },
 {
   "busNo": 29,
   "routeName": "Sai Ram Theatre",
   "time": 8.00
 },
 {
   "busNo": 29,
   "routeName": "Mettuguda",
   "time": 8.08
 },
 {
   "busNo": 29,
   "routeName": "Chilakalaguda",
   "time": 8.15
 },
 {
   "busNo": 29,
   "routeName": "Musheerabad",
   "time": 8.20
 },
 {
   "busNo": 29,
   "routeName": "Kavadiguda",
   "time": 8.23
 },
 {
   "busNo": 29,
   "routeName": "Mehidipatnam",
   "time": 8.40
 },
 {
   "busNo": 29,
   "routeName": "CBIT",
   "time": 9.23
 },
 {
   "busNo": 39,
   "routeName": "L B Nagar",
   "time": 7.40
 },
 {
   "busNo": 39,
   "routeName": "Astalakshmi Temple",
   "time": 7.47
 },
 {
   "busNo": 39,
   "routeName": "Kothapet Fruit Market",
   "time": 7.53
 },
 {
   "busNo": 39,
   "routeName": "Chaitanyapuri",
   "time": 7.56
 },
 {
   "busNo": 39,
   "routeName": "Dilsukh Nagar",
   "time": 8.00
 },
 {
   "busNo": 39,
   "routeName": "Moosarambagh",
   "time": 8.03
 },
 {
   "busNo": 39,
   "routeName": "Malakpet",
   "time": 8.05
 },
 {
   "busNo": 39,
   "routeName": "Nalgonda x Roads",
   "time": 8.07
 },
 {
   "busNo": 39,
   "routeName": "Chaderghat",
   "time": 8.09
 },
 {
   "busNo": 39,
   "routeName": "Koti",
   "time": 8.13
 },
 {
   "busNo": 39,
   "routeName": "Nampally/Abids",
   "time": 8.23
 },
 {
   "busNo": 39,
   "routeName": "Lakdi - Ka - Pool",
   "time": 8.27
 },
 {
   "busNo": 39,
   "routeName": "NMDC",
   "time": 8.35
 },
 {
   "busNo": 39,
   "routeName": "Mehdipatnam",
   "time": 8.40
 },
 {
   "busNo": 39,
   "routeName": "CBIT",
   "time": 9.23
 },
 {
   "busNo": 49,
   "routeName": "L.B.Nagar",
   "time": 7.55
 },
 {
   "busNo": 49,
   "routeName": "Sagar Ring Road",
   "time": 8.00
 },
 {
   "busNo": 49,
   "routeName": "Biramalguda",
   "time": 8.05
 },
 {
   "busNo": 49,
   "routeName": "Kharmanghat",
   "time": 8.09
 },
 {
   "busNo": 49,
   "routeName": "Green park colony",
   "time": 8.15
 },
 {
   "busNo": 49,
   "routeName": "Champapet",
   "time": 8.21
 },
 {
   "busNo": 49,
   "routeName": "IS Sadan",
   "time": 8.23
 },
 {
   "busNo": 49,
   "routeName": "Santhosh Nagar",
   "time": 8.27
 },
 {
   "busNo": 49,
   "routeName": "DRDL",
   "time": 8.33
 },
 {
   "busNo": 49,
   "routeName": "Chandrayangutta",
   "time": 8.42
 },
 {
   "busNo": 49,
   "routeName": "Aramghar ring road",
   "time": 8.50
 },
 {
   "busNo": 49,
   "routeName": "Attapur",
   "time": 9.00
 },
 {
   "busNo": 49,
   "routeName": "CBIT",
   "time": 9.23
 },
 {
   "busNo": 59,
   "routeName": "Erragadda",
   "time": 7.50
 },
 {
   "busNo": 59,
   "routeName": "ESI",
   "time": 7.53
 },
 {
   "busNo": 59,
   "routeName": "S R Nagar",
   "time": 7.55
 },
 {
   "busNo": 59,
   "routeName": "Maitrivanam",
   "time": 7.58
 },
 {
   "busNo": 59,
   "routeName": "Yousufguda",
   "time": 8.05
 },
 {
   "busNo": 59,
   "routeName": "Yousufguda Basti",
   "time": 8.09
 },
 {
   "busNo": 59,
   "routeName": "Ratnadeep",
   "time": 8.13
 },
 {
   "busNo": 59,
   "routeName": "TV9",
   "time": 8.15
 },
 {
   "busNo": 59,
   "routeName": "Annapoorna studio",
   "time": 8.21
 },
 {
   "busNo": 59,
   "routeName": "LVP Eye Hospital",
   "time": 8.23
 },
 {
   "busNo": 59,
   "routeName": "Jubilee Check Post",
   "time": 8.27
 },
 {
   "busNo": 59,
   "routeName": "Peddamma Temple",
   "time": 8.35
 },
 {
   "busNo": 59,
   "routeName": "Madhapur",
   "time": 8.40
 },
 {
   "busNo": 59,
   "routeName": "Hi-tech city",
   "time": 8.47
 },
 {
   "busNo": 59,
   "routeName": "Kothaguda x Roads",
   "time": 8.57
 },
 {
   "busNo": 59,
   "routeName": "Gachibowli",
   "time": 9.00
 },
 {
   "busNo": 59,
   "routeName": "CBIT",
   "time": 9.23
 },
 {
   "busNo": 69,
   "routeName": "Kukatpally Y Junction",
   "time": 7.50
 },
 {
   "busNo": 69,
   "routeName": "Kukatpally",
   "time": 7.55
 },
 {
   "busNo": 69,
   "routeName": "KPHB",
   "time": 8.00
 },
 {
   "busNo": 69,
   "routeName": "JNTU",
   "time": 8.09
 },
 {
   "busNo": 69,
   "routeName": "Nizampet",
   "time": 8.15
 },
 {
   "busNo": 69,
   "routeName": "Hydernagar",
   "time": 8.20
 },
 {
   "busNo": 69,
   "routeName": "Miyapur",
   "time": 8.23
 },
 {
   "busNo": 69,
   "routeName": "Huda Colony",
   "time": 8.30
 },
 {
   "busNo": 69,
   "routeName": "Madina Guda",
   "time": 8.33
 },
 {
   "busNo": 69,
   "routeName": "Chanda Nagar",
   "time": 8.35
 },
 {
   "busNo": 69,
   "routeName": "Lingampally",
   "time": 8.47
 },
 {
   "busNo": 69,
   "routeName": "Railway Gate",
   "time": 8.51
 },
 {
   "busNo": 69,
   "routeName": "Gulmohar Park",
   "time": 8.53
 },
 {
   "busNo": 69,
   "routeName": "HCU",
   "time": 8.55
 },
 {
   "busNo": 69,
   "routeName": "Indira Nagar",
   "time": 9.00
 },
 {
   "busNo": 69,
   "routeName": "Gachibowli",
   "time": 9.05
 },
 {
   "busNo": 69,
   "routeName": "CBIT",
   "time": 9.23
 },
 {
   "busNo": 10,
   "routeName": "Ramanthapur Public School",
   "time": 7.47
 },
 {
   "busNo": 10,
   "routeName": "T V Studio",
   "time": 7.57
 },
 {
   "busNo": 10,
   "routeName": "Amberpet Irani Hotel",
   "time": 8.00
 },
 {
   "busNo": 10,
   "routeName": "Amberpet Temple",
   "time": 8.02
 },
 {
   "busNo": 10,
   "routeName": "6 no. Junction",
   "time": 8.03
 },
 {
   "busNo": 10,
   "routeName": "Syndicate bank",
   "time": 8.06
 },
 {
   "busNo": 10,
   "routeName": "NCC airtel",
   "time": 8.07
 },
 {
   "busNo": 10,
   "routeName": "SVE School",
   "time": 8.08
 },
 {
   "busNo": 10,
   "routeName": "Vidya Nagar",
   "time": 8.09
 },
 {
   "busNo": 10,
   "routeName": "VST",
   "time": 8.11
 },
 {
   "busNo": 10,
   "routeName": "RTC x roads",
   "time": 8.13
 },
 {
   "busNo": 10,
   "routeName": "Gandhi nagar",
   "time": 8.15
 },
 {
   "busNo": 10,
   "routeName": "Ashok nagar",
   "time": 8.21
 },
 {
   "busNo": 10,
   "routeName": "Indira park",
   "time": 8.23
 },
 {
   "busNo": 10,
   "routeName": "Lakdi-ka-pool",
   "time": 8.31
 },
 {
   "busNo": 10,
   "routeName": "NMDC",
   "time": 8.35
 },
 {
   "busNo": 10,
   "routeName": "Mehidipatnam",
   "time": 8.40
 },
 {
   "busNo": 10,
   "routeName": "Tolichowki",
   "time": 8.47
 },
 {
   "busNo": 10,
   "routeName": "Dargah",
   "time": 9.00
 },
 {
   "busNo": 10,
   "routeName": "CBIT",
   "time": 9.23
 },
 {
   "busNo": 12,
   "routeName": "Uppal x roads",
   "time": 7.55
 },
 {
   "busNo": 12,
   "routeName": "Survey of India",
   "time": 7.57
 },
 {
   "busNo": 12,
   "routeName": "Habsiguda",
   "time": 8.00
 },
 {
   "busNo": 12,
   "routeName": "Tarnaka x roads",
   "time": 8.03
 },
 {
   "busNo": 12,
   "routeName": "Vidyanagar (SVES)",
   "time": 8.08
 },
 {
   "busNo": 12,
   "routeName": "Nallakunta",
   "time": 8.13
 },
 {
   "busNo": 12,
   "routeName": "Fever hospital",
   "time": 8.15
 },
 {
   "busNo": 12,
   "routeName": "Barkatpura",
   "time": 8.21
 },
 {
   "busNo": 12,
   "routeName": "Narayanguda",
   "time": 8.23
 },
 {
   "busNo": 12,
   "routeName": "Himayath nagar",
   "time": 8.27
 },
 {
   "busNo": 12,
   "routeName": "Lakdi ka pool",
   "time": 8.31
 },
 {
   "busNo": 12,
   "routeName": "Masab Tank",
   "time": 8.33
 },
 {
   "busNo": 12,
   "routeName": "NMDC",
   "time": 8.37
 },
 {
   "busNo": 12,
   "routeName": "Mehdipatnam",
   "time": 8.40
 },
 {
   "busNo": 12,
   "routeName": "Kakatiya Nagar",
   "time": 8.47
 },
 {
   "busNo": 12,
   "routeName": "CBIT",
   "time": 9.23
 },
 {
   "busNo": 14,
   "routeName": "Uppal x roads",
   "time": 7.55
 },
 {
   "busNo": 14,
   "routeName": "Survey of India",
   "time": 7.57
 },
 {
   "busNo": 14,
   "routeName": "Habsiguda",
   "time": 8.00
 },
 {
   "busNo": 14,
   "routeName": "Tarnaka x roads",
   "time": 8.03
 },
 {
   "busNo": 14,
   "routeName": "Vidyanagar (SVES)",
   "time": 8.08
 },
 {
   "busNo": 14,
   "routeName": "Nallakunta",
   "time": 8.11
 },
 {
   "busNo": 14,
   "routeName": "Fever hospital",
   "time": 8.13
 },
 {
   "busNo": 14,
   "routeName": "Barkatpura",
   "time": 8.15
 },
 {
   "busNo": 14,
   "routeName": "Narayanguda",
   "time": 8.21
 },
 {
   "busNo": 14,
   "routeName": "Himayath nagar",
   "time": 8.27
 },
 {
   "busNo": 14,
   "routeName": "Lakdi ka pool",
   "time": 8.31
 },
 {
   "busNo": 14,
   "routeName": "Masab Tank",
   "time": 8.33
 },
 {
   "busNo": 14,
   "routeName": "NMDC",
   "time": 8.37
 },
 {
   "busNo": 14,
   "routeName": "Mehdipatnam",
   "time": 8.40
 },
 {
   "busNo": 14,
   "routeName": "Kakatiya Nagar",
   "time": 8.47
 },
 {
   "busNo": 14,
   "routeName": "CBIT",
   "time": 9.23
 },
  {
   "busNo": 16,
   "routeName": "T V Studio",
   "time": 7.55
 },
 {
   "busNo": 16,
   "routeName": "Amberpet Irani",
   "time": 8.00
 },
 {
   "busNo": 16,
   "routeName": "Amberpet Temple",
   "time": 8.02
 },
 {
   "busNo": 16,
   "routeName": "6 no. Junction",
   "time": 8.03
 },
 {
   "busNo": 16,
   "routeName": "Tilak Nagar",
   "time": 8.08
 },
 {
   "busNo": 16,
   "routeName": "Fever hospital",
   "time": 8.13
 },
 {
   "busNo": 16,
   "routeName": "Barkatpura",
   "time": 8.15
 },
 {
   "busNo": 16,
   "routeName": "Narayanguda",
   "time": 8.21
 },
 {
   "busNo": 16,
   "routeName": "Himayath nagar",
   "time": 8.27
 },
 {
   "busNo": 16,
   "routeName": "Lakdi ka pool",
   "time": 8.30
 },
 {
   "busNo": 16,
   "routeName": "Masab Tank",
   "time": 8.33
 },
 {
   "busNo": 16,
   "routeName": "NMDC",
   "time": 8.37
 },
 {
   "busNo": 16,
   "routeName": "Mehdipatnam",
   "time": 8.40
 },
 {
   "busNo": 16,
   "routeName": "Kakatiya Nagar",
   "time": 8.47
 },
 {
   "busNo": 16,
   "routeName": "CBIT",
   "time": 9.23
 },
 {
   "busNo": 17,
   "routeName": "ZTS",
   "time": 7.40
 },
 {
   "busNo": 17,
   "routeName": "Lalapet",
   "time": 7.50
 },
 {
   "busNo": 17,
   "routeName": "Tarnaka",
   "time": 8.00
 },
 {
   "busNo": 17,
   "routeName": "Padma Rao Nagar",
   "time": 8.15
 },
 {
   "busNo": 17,
   "routeName": "Musheerabad x road",
   "time": 8.20
 },
 {
   "busNo": 17,
   "routeName": "Golconda x road",
   "time": 8.23
 },
 {
   "busNo": 17,
   "routeName": "RTC x Road",
   "time": 8.23
 },
 {
   "busNo": 17,
   "routeName": "Ashok Nagar",
   "time": 8.27
 },
 {
   "busNo": 17,
   "routeName": "Indira Park",
   "time": 8.27
 },
 {
   "busNo": 17,
   "routeName": "Lakdi-ka-pool",
   "time": 8.33
 },
 {
   "busNo": 17,
   "routeName": "NMDC",
   "time": 8.38
 },
 {
   "busNo": 17,
   "routeName": "Mehidipatnam",
   "time": 8.43
 },
 {
   "busNo": 17,
   "routeName": "Jyothi Nagar/Ring Road",
   "time": 8.51
 },
 {
   "busNo": 17,
   "routeName": "Langar House",
   "time": 8.55
 },
 {
   "busNo": 17,
   "routeName": "CBIT",
   "time": 9.23
 },
 {
   "busNo": 18,
   "routeName": "ECIL x roads",
   "time": 7.40
 },
 {
   "busNo": 18,
   "routeName": "H B Colony",
   "time": 7.47
 },
 {
   "busNo": 18,
   "routeName": "NFC",
   "time": 7.50
 },
 {
   "busNo": 18,
   "routeName": "Mallapur",
   "time": 7.53
 },
 {
   "busNo": 18,
   "routeName": "Nacharam",
   "time": 8.00
 },
 {
   "busNo": 18,
   "routeName": "HMT nagar",
   "time": 8.02
 },
 {
   "busNo": 18,
   "routeName": "Habsiguda",
   "time": 8.05
 },
 {
   "busNo": 18,
   "routeName": "Tarnaka x roads",
   "time": 8.08
 },
 {
   "busNo": 18,
   "routeName": "Chilakalaguda",
   "time": 8.15
 },
 {
   "busNo": 18,
   "routeName": "Musheerabad",
   "time": 8.20
 },
 {
   "busNo": 18,
   "routeName": "Kavadiguda",
   "time": 8.23
 },
 {
   "busNo": 18,
   "routeName": "Mehidipatnam",
   "time": 8.40
 },
 {
   "busNo": 18,
   "routeName": "CBIT",
   "time": 9.23
 },
 {
   "busNo": 20,
   "routeName": "Radhika (ECIL)",
   "time": 7.35
 },
 {
   "busNo": 20,
   "routeName": "Officers colony",
   "time": 7.38
 },
 {
   "busNo": 20,
   "routeName": "Sainikpuri x Road",
   "time": 7.42
 },
 {
   "busNo": 20,
   "routeName": "Neredmet x Road",
   "time": 7.47
 },
 {
   "busNo": 20,
   "routeName": "Vinayak Nagar",
   "time": 7.47
 },
 {
   "busNo": 20,
   "routeName": "Krupa Complex",
   "time": 7.50
 },
 {
   "busNo": 20,
   "routeName": "Safilguda  x roads",
   "time": 7.53
 },
 {
   "busNo": 20,
   "routeName": "Anandbagh",
   "time": 7.55
 },
 {
   "busNo": 20,
   "routeName": "Anutex -Malkajgiri",
   "time": 7.58
 },
 {
   "busNo": 20,
   "routeName": "Sai Ram Theatre",
   "time": 8.00
 },
 {
   "busNo": 20,
   "routeName": "Mettuguda",
   "time": 8.08
 },
 {
   "busNo": 20,
   "routeName": "Chilakalaguda",
   "time": 8.15
 },
 {
   "busNo": 20,
   "routeName": "Musheerabad",
   "time": 8.20
 },
 {
   "busNo": 20,
   "routeName": "Kavadiguda",
   "time": 8.23
 },
 {
   "busNo": 20,
   "routeName": "Mehidipatnam",
   "time": 8.40
 },
 {
   "busNo": 20,
   "routeName": "CBIT",
   "time": 9.23
 },
 {
   "busNo": 22,
   "routeName": "Radhika (ECIL)",
   "time": 7.35
 },
 {
   "busNo": 22,
   "routeName": "Officers colony",
   "time": 7.38
 },
 {
   "busNo": 22,
   "routeName": "Sainikpuri x road",
   "time": 7.42
 },
 {
   "busNo": 22,
   "routeName": "Neredmet x road",
   "time": 7.50
 },
 {
   "busNo": 22,
   "routeName": "Maredpally",
   "time": 8.05
 },
 {
   "busNo": 22,
   "routeName": "Maredpally",
   "time": 8.08
 },
 {
   "busNo": 22,
   "routeName": "Sangeeth",
   "time": 8.09
 },
 {
   "busNo": 22,
   "routeName": "Patny",
   "time": 8.13
 },
 {
   "busNo": 22,
   "routeName": "Pizza Hut",
   "time": 8.15
 },
 {
   "busNo": 22,
   "routeName": "HPS",
   "time": 8.21
 },
 {
   "busNo": 22,
   "routeName": "Life Style",
   "time": 8.22
 },
 {
   "busNo": 22,
   "routeName": "Care hospital",
   "time": 8.33
 },
 {
   "busNo": 22,
   "routeName": "Mehdipatnam",
   "time": 8.47
 },
 {
   "busNo": 22,
   "routeName": "CBIT",
   "time": 9.23
 },
 {
   "busNo": 24,
   "routeName": "Alwal",
   "time": 7.40
 },
 {
   "busNo": 24,
   "routeName": "Lothukunta",
   "time": 7.47
 },
 {
   "busNo": 24,
   "routeName": "Lalbazar",
   "time": 7.50
 },
 {
   "busNo": 24,
   "routeName": "Thirumalgherry",
   "time": 7.55
 },
 {
   "busNo": 24,
   "routeName": "Kharkhana",
   "time": 8.00
 },
 {
   "busNo": 24,
   "routeName": "Vikrampuri",
   "time": 8.03
 },
 {
   "busNo": 24,
   "routeName": "JBS",
   "time": 8.07
 },
 {
   "busNo": 24,
   "routeName": "Patny",
   "time": 8.09
 },
 {
   "busNo": 24,
   "routeName": "Pizza hut",
   "time": 8.11
 },
 {
   "busNo": 24,
   "routeName": "Airport",
   "time": 8.13
 },
 {
   "busNo": 24,
   "routeName": "HPS",
   "time": 8.15
 },
 {
   "busNo": 24,
   "routeName": "Life style",
   "time": 8.21
 },
 {
   "busNo": 24,
   "routeName": "JVR park",
   "time": 8.23
 },
 {
   "busNo": 24,
   "routeName": "Care hospital",
   "time": 8.27
 },
 {
   "busNo": 24,
   "routeName": "Pension Office",
   "time": 8.31
 },
 {
   "busNo": 24,
   "routeName": "Mehdipatnam",
   "time": 8.40
 },
 {
   "busNo": 24,
   "routeName": "CBIT",
   "time": 9.23
 },
 {
   "busNo": 25,
   "routeName": "JBS",
   "time": 8.05
 },
 {
   "busNo": 25,
   "routeName": "Patny",
   "time": 8.09
 },
 {
   "busNo": 25,
   "routeName": "Pizza hut",
   "time": 8.11
 },
 {
   "busNo": 25,
   "routeName": "Airport",
   "time": 8.13
 },
 {
   "busNo": 25,
   "routeName": "HPS",
   "time": 8.15
 },
 {
   "busNo": 25,
   "routeName": "Life style",
   "time": 8.21
 },
 {
   "busNo": 25,
   "routeName": "JVR park",
   "time": 8.23
 },
 {
   "busNo": 25,
   "routeName": "Care hospital",
   "time": 8.27
 },
 {
   "busNo": 25,
   "routeName": "Pension Office",
   "time": 8.33
 },
 {
   "busNo": 25,
   "routeName": "Mehdipatnam",
   "time": 8.40
 },
 {
   "busNo": 25,
   "routeName": "CBIT",
   "time": 9.23
 },
 {
   "busNo": 26,
   "routeName": "Kompally",
   "time": 7.47
 },
 {
   "busNo": 26,
   "routeName": "Bowenpally",
   "time": 7.55
 },
 {
   "busNo": 26,
   "routeName": "Sowjanya colony",
   "time": 7.57
 },
 {
   "busNo": 26,
   "routeName": "Ashok gardens",
   "time": 8.00
 },
 {
   "busNo": 26,
   "routeName": "Tadbund",
   "time": 8.04
 },
 {
   "busNo": 26,
   "routeName": "Paradise",
   "time": 8.11
 },
 {
   "busNo": 26,
   "routeName": "Airport",
   "time": 8.13
 },
 {
   "busNo": 26,
   "routeName": "HPS",
   "time": 8.15
 },
 {
   "busNo": 26,
   "routeName": "Life style",
   "time": 8.21
 },
 {
   "busNo": 26,
   "routeName": "JVR park",
   "time": 8.23
 },
 {
   "busNo": 26,
   "routeName": "Care hospital",
   "time": 8.27
 },
 {
   "busNo": 26,
   "routeName": "Mehdipatnam",
   "time": 8.40
 },
 {
   "busNo": 26,
   "routeName": "CBIT",
   "time": 9.23
 },
  {
   "busNo": 30,
   "routeName": "Nagole x roads",
   "time": 7.47
 },
 {
   "busNo": 30,
   "routeName": "Mohan Nagar",
   "time": 7.51
 },
 {
   "busNo": 30,
   "routeName": "Kothapet fruit market",
   "time": 7.53
 },
 {
   "busNo": 30,
   "routeName": "Chaitanyapuri",
   "time": 7.56
 },
 {
   "busNo": 30,
   "routeName": "Dilsukh Nagar",
   "time": 8.00
 },
 {
   "busNo": 30,
   "routeName": "Moosarambagh",
   "time": 8.03
 },
 {
   "busNo": 30,
   "routeName": "Malakpet",
   "time": 8.05
 },
 {
   "busNo": 30,
   "routeName": "Nalgonda x roads",
   "time": 8.08
 },
 {
   "busNo": 30,
   "routeName": "Chaderghat",
   "time": 8.09
 },
 {
   "busNo": 30,
   "routeName": "Afzal gunj",
   "time": 8.13
 },
 {
   "busNo": 30,
   "routeName": "Abids",
   "time": 8.23
 },
 {
   "busNo": 30,
   "routeName": "Lakdi - ka - pool",
   "time": 8.27
 },
 {
   "busNo": 30,
   "routeName": "NMDC",
   "time": 8.35
 },
 {
   "busNo": 30,
   "routeName": "Mehdipatnam",
   "time": 8.40
 },
 {
   "busNo": 30,
   "routeName": "CBIT",
   "time": 9.23
 },
 {
   "busNo": 32,
   "routeName": "Alakapuri",
   "time": 7.40
 },
 {
   "busNo": 32,
   "routeName": "Telephone Colony",
   "time": 7.47
 },
 {
   "busNo": 32,
   "routeName": "Kothapet fruit market",
   "time": 7.53
 },
 {
   "busNo": 32,
   "routeName": "Chaitanyapuri",
   "time": 7.56
 },
 {
   "busNo": 32,
   "routeName": "Dilsukh Nagar",
   "time": 8.00
 },
 {
   "busNo": 32,
   "routeName": "Malakpet",
   "time": 8.05
 },
 {
   "busNo": 32,
   "routeName": "Nalgonda x roads",
   "time": 8.08
 },
 {
   "busNo": 32,
   "routeName": "Chaderghat",
   "time": 8.09
 },
 {
   "busNo": 32,
   "routeName": "Nimboli Adda",
   "time": 8.11
 },
 {
   "busNo": 32,
   "routeName": "Kachiguda",
   "time": 8.15
 },
 {
   "busNo": 32,
   "routeName": "Narayanguda",
   "time": 8.21
 },
 {
   "busNo": 32,
   "routeName": "MLA Quarters",
   "time": 8.23
 },
 {
   "busNo": 32,
   "routeName": "Lakdi - ka - pool",
   "time": 8.27
 },
 {
   "busNo": 32,
   "routeName": "NMDC",
   "time": 8.35
 },
 {
   "busNo": 32,
   "routeName": "Mehdipatnam",
   "time": 8.40
 },
 {
   "busNo": 32,
   "routeName": "CBIT",
   "time": 9.23
 },
 {
   "busNo": 34,
   "routeName": "L.B. Nagar",
   "time": 7.47
 },
 {
   "busNo": 34,
   "routeName": "Astalaxmi Temple",
   "time": 7.47
 },
 {
   "busNo": 34,
   "routeName": "Kothapet fruit market",
   "time": 7.53
 },
 {
   "busNo": 34,
   "routeName": "Chaitanyapuri",
   "time": 7.56
 },
 {
   "busNo": 34,
   "routeName": "Dilsukh Nagar",
   "time": 8.00
 },
 {
   "busNo": 34,
   "routeName": "Moosarambagh",
   "time": 8.03
 },
 {
   "busNo": 34,
   "routeName": "Malakpet",
   "time": 8.05
 },
 {
   "busNo": 34,
   "routeName": "Nalgonda x roads",
   "time": 8.08
 },
 {
   "busNo": 34,
   "routeName": "Chaderghat",
   "time": 8.09
 },
 {
   "busNo": 34,
   "routeName": "Koti",
   "time": 8.13
 },
 {
   "busNo": 34,
   "routeName": "Abids",
   "time": 8.23
 },
 {
   "busNo": 34,
   "routeName": "Lakdikapool",
   "time": 8.27
 },
 {
   "busNo": 34,
   "routeName": "NMDC",
   "time": 8.35
 },
 {
   "busNo": 34,
   "routeName": "Mehdipatnam",
   "time": 8.40
 },
 {
   "busNo": 34,
   "routeName": "CBIT",
   "time": 9.23
 },
 {
   "busNo": 44,
   "routeName": "Alakapuri",
   "time": 8.09
 },
 {
   "busNo": 44,
   "routeName": "L.B. Nagar",
   "time": 8.15
 },
 {
   "busNo": 44,
   "routeName": "Sagar Ring Road",
   "time": 8.20
 },
 {
   "busNo": 44,
   "routeName": "Gayathri Nagar",
   "time": 8.23
 },
 {
   "busNo": 44,
   "routeName": "Manda mallamma fn hall",
   "time": 8.30
 },
 {
   "busNo": 44,
   "routeName": "Owaisi Hospital",
   "time": 8.35
 },
 {
   "busNo": 44,
   "routeName": "DRDL",
   "time": 8.40
 },
 {
   "busNo": 44,
   "routeName": "Chandrayangutta",
   "time": 8.47
 },
 {
   "busNo": 44,
   "routeName": "Aramghar ring road",
   "time": 8.55
 },
 {
   "busNo": 44,
   "routeName": "CBIT",
   "time": 9.30
 },
 {
   "busNo": 45,
   "routeName": "Sagar X Roads",
   "time": 8.09
 },
 {
   "busNo": 45,
   "routeName": "Champapet",
   "time": 8.23
 },
 {
   "busNo": 45,
   "routeName": "Santhosh Nagar",
   "time": 8.27
 },
 {
   "busNo": 45,
   "routeName": "DRDL",
   "time": 8.33
 },
 
 {
   "busNo": 45,
   "routeName": "Chandrayangutta",
   "time": 8.42
 },
 {
   "busNo": 45,
   "routeName": "Aramghar ring road",
   "time": 8.50
 },
 {
   "busNo": 45,
   "routeName": "Attapur",
   "time": 9.00
 },
 {
   "busNo": 45,
   "routeName": "Hyderguda",
   "time": 9.05
 },
 {
   "busNo": 45,
   "routeName": "Langarhouse",
   "time": 9.09
 },
 {
   "busNo": 45,
   "routeName": "CBIT",
   "time": 9.23
 },
 {
   "busNo": 46,
   "routeName": "Panama",
   "time": 8.05
 },
 {
   "busNo": 46,
   "routeName": "Chinthalkunta",
   "time": 8.09
 },
 {
   "busNo": 46,
   "routeName": "Sagar Ring Road",
   "time": 8.20
 },
 {
   "busNo": 46,
   "routeName": "Champapet",
   "time": 8.23
 },
 {
   "busNo": 46,
   "routeName": "Owaisi Hospital",
   "time": 8.35
 },
 {
   "busNo": 46,
   "routeName": "DRDL",
   "time": 8.40
 },
 {
   "busNo": 46,
   "routeName": "Chandrayangutta",
   "time": 8.47
 },
 {
   "busNo": 46,
   "routeName": "Aramghar ring road",
   "time": 8.55
 },
 {
   "busNo": 46,
   "routeName": "Rajendra Nagar",
   "time": 9.00
 },
 {
   "busNo": 46,
   "routeName": "Appa Junction",
   "time": 9.09
 },
 {
   "busNo": 46,
   "routeName": "CBIT",
   "time": 9.23
 },
 {
   "busNo": 48,
   "routeName": "NGOs Colony",
   "time": 7.47
 },
 {
   "busNo": 48,
   "routeName": "BN Reddy Nagar",
   "time": 7.50
 },
 {
   "busNo": 48,
   "routeName": "Hasmathpet",
   "time": 7.53
 },
 {
   "busNo": 48,
   "routeName": "Sagar Ring Road",
   "time": 8.00
 },
 {
   "busNo": 48,
   "routeName": "Biramalguda",
   "time": 8.05
 },
 {
   "busNo": 48,
   "routeName": "Kharmanghat",
   "time": 8.09
 },
 {
   "busNo": 48,
   "routeName": "IS Sadan",
   "time": 8.23
 },
 {
   "busNo": 48,
   "routeName": "Santhosh Nagar",
   "time": 8.27
 },
 {
   "busNo": 48,
   "routeName": "DRDL",
   "time": 8.33
 },
 {
   "busNo": 48,
   "routeName": "Chandrayangutta",
   "time": 8.42
 },
 {
   "busNo": 48,
   "routeName": "Aramghar ring road",
   "time": 8.50
 },
 {
   "busNo": 48,
   "routeName": "Attapur",
   "time": 9.00
 },
 {
   "busNo": 48,
   "routeName": "CBIT",
   "time": 9.23
 },
 {
   "busNo": 50,
   "routeName": "Gokul Theatre",
   "time": 8.09
 },
 {
   "busNo": 50,
   "routeName": "ESI",
   "time": 8.13
 },
 {
   "busNo": 50,
   "routeName": "S R Nagar",
   "time": 8.15
 },
 {
   "busNo": 50,
   "routeName": "HUDA Maitrivanam",
   "time": 8.15
 },
 {
   "busNo": 50,
   "routeName": "Ameerpet",
   "time": 8.20
 },
 {
   "busNo": 50,
   "routeName": "Punjagutta central",
   "time": 8.23
 },
 {
   "busNo": 50,
   "routeName": "Erramanzil",
   "time": 8.27
 },
 {
   "busNo": 50,
   "routeName": "Taj Krishna",
   "time": 8.30
 },
 {
   "busNo": 50,
   "routeName": "Care hospital",
   "time": 8.33
 },
 {
   "busNo": 50,
   "routeName": "Pension office",
   "time": 8.35
 },
 {
   "busNo": 50,
   "routeName": "Masab tank",
   "time": 8.37
 },
 {
   "busNo": 50,
   "routeName": "Mehidipatnam",
   "time": 8.43
 },
 {
   "busNo": 50,
   "routeName": "Nanal nagar",
   "time": 8.50
 },
 {
   "busNo": 50,
   "routeName": "Tolichowki",
   "time": 8.53
 },
 {
   "busNo": 50,
   "routeName": "Reliance super market",
   "time": 8.58
 },
 {
   "busNo": 50,
   "routeName": "Narayanamma college",
   "time": 9.00
 },
 {
   "busNo": 50,
   "routeName": "Dargah",
   "time": 9.05
 },
 {
   "busNo": 50,
   "routeName": "Delhi Public School",
   "time": 9.09
 },
 {
   "busNo": 50,
   "routeName": "CBIT",
   "time": 9.23
 },
 {
   "busNo": 52,
   "routeName": "Gokul Theatre",
   "time": 8.09
 },
 {
   "busNo": 52,
   "routeName": "ESI",
   "time": 8.13
 },
 {
   "busNo": 52,
   "routeName": "Maitrivanam",
   "time": 8.15
 },
 {
   "busNo": 52,
   "routeName": "Yousufguda",
   "time": 8.23
 },
 {
   "busNo": 52,
   "routeName": "Yousufguda Basti",
   "time": 8.23
 },
 {
   "busNo": 52,
   "routeName": "Ratnadeep",
   "time": 8.30
 },
 {
   "busNo": 52,
   "routeName": "TV9",
   "time": 8.33
 },
 {
   "busNo": 52,
   "routeName": "Annapoorna studio",
   "time": 8.35
 },
 {
   "busNo": 52,
   "routeName": "LVP Eye Hospital",
   "time": 8.37
 },
 {
   "busNo": 52,
   "routeName": "BVBPS cancer hospital",
   "time": 8.41
 },
 {
   "busNo": 52,
   "routeName": "Film Nagar",
   "time": 8.47
 },
 {
   "busNo": 52,
   "routeName": "Dargah",
   "time": 8.55
 },
 {
   "busNo": 52,
   "routeName": "Khajaguda",
   "time": 9.00
 },
 {
   "busNo": 52,
   "routeName": "CBIT",
   "time": 9.23
 },
 {
   "busNo": 54,
   "routeName": "P R Nagar",
   "time": 8.05
 },
 {
   "busNo": 54,
   "routeName": "Moti nagar",
   "time": 8.09
 },
 {
   "busNo": 54,
   "routeName": "Yousufguda",
   "time": 8.20
 },
 {
   "busNo": 54,
   "routeName": "Jubilee check post",
   "time": 8.30
 },
 {
   "busNo": 54,
   "routeName": "Peddamma temple",
   "time": 8.35
 },
 {
   "busNo": 54,
   "routeName": "Madhapur",
   "time": 8.40
 },
 {
   "busNo": 54,
   "routeName": "Hi-tech city",
   "time": 8.47
 },
 {
   "busNo": 54,
   "routeName": "Kothaguda x roads",
   "time": 8.57
 },
 {
   "busNo": 54,
   "routeName": "Gachibowli",
   "time": 9.00
 },
 {
   "busNo": 54,
   "routeName": "CBIT",
   "time": 9.23
 },
 {
   "busNo": 60,
   "routeName": "ICRISAT",
   "time": 8.20
 },
 {
   "busNo": 60,
   "routeName": "Beeramguda",
   "time": 8.23
 },
 {
   "busNo": 60,
   "routeName": "Lingampally",
   "time": 8.30
 },
 {
   "busNo": 60,
   "routeName": "Railway Gate",
   "time": 8.38
 },
 {
   "busNo": 60,
   "routeName": "Gulmohar Park",
   "time": 8.41
 },
 {
   "busNo": 60,
   "routeName": "HCU",
   "time": 8.47
 },
 {
   "busNo": 60,
   "routeName": "Indira Nagar",
   "time": 8.55
 },
 {
   "busNo": 60,
   "routeName": "Gachibowli",
   "time": 9.05
 },
 {
   "busNo": 60,
   "routeName": "CBIT",
   "time": 9.23
 },
 {
   "busNo": 62,
   "routeName": "KP Y Junction",
   "time": 8.05
 },
 {
   "busNo": 62,
   "routeName": "KPHB",
   "time": 8.13
 },
 {
   "busNo": 62,
   "routeName": "JNTU",
   "time": 8.20
 },
 {
   "busNo": 62,
   "routeName": "Nizampet",
   "time": 8.15
 },
 {
   "busNo": 62,
   "routeName": "Hydernagar",
   "time": 8.20
 },
 {
   "busNo": 62,
   "routeName": "Miyapur",
   "time": 8.23
 },
 {
   "busNo": 62,
   "routeName": "Huda Colony",
   "time": 8.30
 },
 {
   "busNo": 62,
   "routeName": "Madina Guda",
   "time": 8.33
 },
 {
   "busNo": 62,
   "routeName": "Chanda Nagar",
   "time": 8.35
 },
 {
   "busNo": 62,
   "routeName": "Lingampally",
   "time": 8.47
 },
 {
   "busNo": 62,
   "routeName": "Railway Gate",
   "time": 8.47
 },
 {
   "busNo": 62,
   "routeName": "Gulmohar Park",
   "time": 8.51
 },
 {
   "busNo": 62,
   "routeName": "HCU",
   "time": 8.55
 },
 {
   "busNo": 62,
   "routeName": "Indira Nagar",
   "time": 9.00
 },
 {
   "busNo": 62,
   "routeName": "Gachibowli",
   "time": 9.05
 },
 {
   "busNo": 62,
   "routeName": "CBIT",
   "time": 9.23
 },
 {
   "busNo": 64,
   "routeName": "Pragathi Nagar",
   "time": 7.50
 },
 {
   "busNo": 64,
   "routeName": "JNTU",
   "time": 8.09
 },
 {
   "busNo": 64,
   "routeName": "Nizampet",
   "time": 8.15
 },
 {
   "busNo": 64,
   "routeName": "Hydernagar",
   "time": 8.20
 },
 {
   "busNo": 64,
   "routeName": "Miyapur",
   "time": 8.23
 },
 {
   "busNo": 64,
   "routeName": "Hafeez pet",
   "time": 8.42
 },
 {
   "busNo": 64,
   "routeName": "Kondapur",
   "time": 8.50
 },
 {
   "busNo": 64,
   "routeName": "Kondapur",
   "time": 8.53
 },
 {
   "busNo": 64,
   "routeName": "Kothaguda X roads",
   "time": 8.56
 },
 {
   "busNo": 64,
   "routeName": "Gachibowli",
   "time": 9.00
 },
 {
   "busNo": 64,
   "routeName": "CBIT",
   "time": 9.23
 },
 {
   "busNo": 66,
   "routeName": "Jeedimetla",
   "time": 7.40
 },
 {
   "busNo": 66,
   "routeName": "Chinthal",
   "time": 7.47
 },
 {
   "busNo": 66,
   "routeName": "IDPL",
   "time": 7.55
 },
 {
   "busNo": 66,
   "routeName": "KP Y Junction",
   "time": 8.05
 },
 {
   "busNo": 66,
   "routeName": "KPHB",
   "time": 8.13
 },
 {
   "busNo": 66,
   "routeName": "JNTU",
   "time": 8.20
 },
 {
   "busNo": 66,
   "routeName": "Nizampet",
   "time": 8.23
 },
 {
   "busNo": 66,
   "routeName": "Hydernagar",
   "time": 8.27
 },
 {
   "busNo": 66,
   "routeName": "Hafeez pet",
   "time": 8.42
 },
 {
   "busNo": 66,
   "routeName": "Kondapur",
   "time": 8.50
 },
 {
   "busNo": 66,
   "routeName": "Kondapur",
   "time": 8.53
 },
 {
   "busNo": 66,
   "routeName": "Kothaguda X roads",
   "time": 8.56
 },
 {
   "busNo": 66,
   "routeName": "Gachibowli",
   "time": 9.00
 },
 {
   "busNo": 66,
   "routeName": "CBIT",
   "time": 9.23
 },
 {
   "busNo": 68,
   "routeName": "Bowenpally",
   "time": 7.47
 },
 {
   "busNo": 68,
   "routeName": "Ferozguda",
   "time": 7.50
 },
 {
   "busNo": 68,
   "routeName": "Balanagar",
   "time": 7.53
 },
 {
   "busNo": 68,
   "routeName": "Shobhana",
   "time": 7.57
 },
 {
   "busNo": 68,
   "routeName": "Narsapur x cross road",
   "time": 8.00
 },
 {
   "busNo": 68,
   "routeName": "KP Y junction",
   "time": 8.05
 },
 {
   "busNo": 68,
   "routeName": "Kukatpally",
   "time": 8.08
 },
 {
   "busNo": 68,
   "routeName": "Vivekandanagar",
   "time": 8.09
 },
 {
   "busNo": 68,
   "routeName": "KPHB",
   "time": 8.13
 },
 {
   "busNo": 68,
   "routeName": "JNTU",
   "time": 8.20
 },
 {
   "busNo": 68,
   "routeName": "Malaysian town ship",
   "time": 8.23
 },
 {
   "busNo": 68,
   "routeName": "Hitech city",
   "time": 8.35
 },
 {
   "busNo": 68,
   "routeName": "Kothaguda x road",
   "time": 8.47
 },
 {
   "busNo": 68,
   "routeName": "ORR junction",
   "time": 8.55
 },
 {
   "busNo": 68,
   "routeName": "CBIT",
   "time": 9.23
 },
 {
   "busNo": 90,
   "routeName": "Mehdipatnam/Jaya residency",
   "time": 8.47
 },
 {
   "busNo": 90,
   "routeName": "Nanal Nagar",
   "time": 8.50
 },
  {
   "busNo": 90,
   "routeName": "CBIT",
   "time": 9.23
 },
 {
   "busNo": 92,
   "routeName": "Mehdipatnam/Jaya residency",
   "time": 8.47
 },
 {
   "busNo": 92,
   "routeName": "Nanal Nagar",
   "time": 8.50
 },
  {
   "busNo": 92,
   "routeName": "CBIT",
   "time": 9.23
 },
 {
   "busNo": 94,
   "routeName": "Mehdipatnam/Jaya residency",
   "time": 8.47
 },
 {
   "busNo": 94,
   "routeName": "Nanal Nagar",
   "time": 8.50
 },
  {
   "busNo": 94,
   "routeName": "CBIT",
   "time": 9.23
 },
 {
   "busNo": 99,
   "routeName": "Mehdipatnam/Jaya residency",
   "time": 8.47
 },
 {
   "busNo": 99,
   "routeName": "Nanal Nagar",
   "time": 8.50
 },
 {
   "busNo": 99,
   "routeName": "CBIT",
   "time": 9.23
 }
];

});
app.controller('attendanceController', function($scope, $cordovaInAppBrowser, $ionicPopup, $timeout){
	
	var options = {
      location: 'yes',
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
	60, 65, 70, 75, 80, 85, 90, 95
   ];
	$scope.cAlert = function(data1){
		if(data1>480){
			var alertPopup = $ionicPopup.alert({
					title: 'Semister Class Limit Exceeds',
					template: "Expected Value Below 480"
				});
				alertPopup.then(function(res) {
					// Custom functionality....
				});	
			}
	};
	$scope.aAlert = function(data2){
		if(data2>480){
			var alertPopup = $ionicPopup.alert({
					title: 'Semister Class Limit Exceeds',
					template: "Expected Value Below 480"
				});
				alertPopup.then(function(res) {
					// Custom functionality....
				});	
			}
	};
   $scope.mineBunk = function(data){
		
         //alert("noc: "+data.noc+", noa: "+data.noa+", rp: "+data.rp);

			if((data.noa>data.noc)||(data.noc>480)||(data.noa>480)){
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
							if(conducted>480){
                        var alertPopup = $ionicPopup.alert({
                           title: 'You cant reach',
                           template: ""
                        });
                        alertPopup.then(function(res) {
                           // Custom functionality....
                        });
								//alert("");
								break;
							}else{
                        var alertPopup = $ionicPopup.alert({
                           title: "you should attend "+ Math.round(i-attended)+" classes",
                           template: ""
                        });
                        alertPopup.then(function(res) {
                           // Custom functionality....
                        });
								//alert("you should attend "+ Math.round(i-attended)+" classes");
								break;
							}
						}
					}
				}else if(p>required){
					for(var i1=attended;i1>0;i1--){
						if(Math.round((i1/conducted)*100)==required){
							if(Math.round((attended-i1)+df*xf)+conducted>=480){
                        var alertPopup = $ionicPopup.alert({
                           title: "Total Classes Exceeded i.e You already had that",
                           template: ""
                        });
                        alertPopup.then(function(res) {
                           // Custom functionality....
                        });
								//alert("Total Classes Exceeded i.e You already had that");
								break;
							}else{
								var alertPopup = $ionicPopup.alert({
                           title: "You Can Bunk : "+Math.round((attended-i1)+df*xf)+" Classes.",
                           template: ""
                        });
                        alertPopup.then(function(res) {
                           // Custom functionality....
                        });
                        //alert("You Can Bunk : "+Math.round((attended-i1)+df*xf)+" Classes.");
								break;
							}
				
						}
					}
				}else{
               var alertPopup = $ionicPopup.alert({
                           title: "Your attendance is now Level",
                           template: ""
                        });
                        alertPopup.then(function(res) {
                           // Custom functionality....
                        });
					//alert("Your attendance is now Level");
				}
				
			}
		
		
   };
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
               //alert(filename);
               $cordovaFileTransfer.download(url, cordova.file.externalRootDirectory + 'Download/' + filename, {}, true).then(function (result) {
                     $scope.hasil = 'Save file on '+cordova.file.externalRootDirectory + 'Download/' + filename+' success!';
                     $scope.mywallpaper=cordova.file.externalRootDirectory + 'Download/' + filename;
               }, function (error) {
                     var alertPopup = $ionicPopup.alert({
                        title: 'Allow Storage Permissions Settings -> App -> CBIT',
                        template: ""
                     });
                     
                     alertPopup.then(function(res) {
                     // Custom functionality....
                     });


                    $scope.hasil = 'Error Download file';
              }, function (progress) {
                    $scope.downloadProgress = (progress.loaded / progress.total) * 100;
               $scope.sym = "%";
               if($scope.downloadProgress>=100){
                  $scope.showConfirm = function() {
   
                  var confirmPopup = $ionicPopup.confirm({
                        title: 'Download Completed',
                        template: 'Find in Downloads Folder'
                     });

                  confirmPopup.then(function(res) {
                     if(res) {
                           $scope.openMyFile = function(){


                              // cordova.plugins.fileOpener2.showOpenWithDialog(
                              //     '/sdcard/Download/'+filename, // You can also use a Cordova-style file uri: cdvfile://localhost/persistent/Download/starwars.pdf
                              //     'application/rar', 
                              //     { 
                              //         error : function(e) { 
                              //             console.log('Error status: ' + e.status + ' - Error message: ' + e.message);
                              //         },
                              //         success : function () {
                              //             console.log('file opened successfully');           
                              //         }
                              //     }
                              // );
                              // /*$cordovaFileOpener2.open(
                              //    '/sdcard/Download/'+filename,
                              //    'application/rar', 
                              //    { 
                              //       error : function(e) { 
                              //          alert('Error status: ' + e.status + ' - Error message: ' + e.message);
                              //       },
                              //       success : function () {
                              //          //alert.log('file opened successfully');           
                              //       }
                              //    }
                              // );*/

                              // Working But Not
                              /*$cordovaFileOpener2.open(
                                 '/sdcard/Download/'+filename,
                                 'application/rar', 
                                 { 
                                    error : function(e) { 
                                       //alert('Error status: ' + e.status + ' - Error message: ' + e.message);
                                    },
                                    success : function () {
                                       //alert.log('file opened successfully');             
                                    }
                                 }
                              );*/
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
             //var targetPath = cordova.file.externalRootDirectory + 'Download/' + filename;
			 
	
			
              $cordovaFileTransfer.download(url, cordova.file.externalRootDirectory + 'Download/' + filename, {}, true).then(function (result) {
                    $scope.hasil = 'Save file on '+cordova.file.externalRootDirectory + 'Download/' + filename+' success!';
                    $scope.mywallpaper=cordova.file.externalRootDirectory + 'Download/' + filename;
              }, function (error) {
                     var alertPopup = $ionicPopup.alert({
                        title: 'Allow Storage Permissions Settings -> App -> CBIT',
                        template: ""
                     });
                     
                     alertPopup.then(function(res) {
                        // Custom functionality....
                     });
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
                        alert.log("file cant be opened");
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


app.controller("placementOrgCtrl", function($scope, $ionicPopup){
	$scope.data = [
  {
    "index":0,
	"name": "Thinktankers (Internship)",
    "spa": "1.5",
    "doi": "05.01.2016",
    "ece": "NA",
    "cse": "7",
    "eee": "NA",
    "it": "3",
    "mech": "NA",
    "prod": "NA",
    "civil": "NA",
    "chem": "NA",
    "bio": "NA",
    "mca": "NA",
    "mtcse": "NA",
    "mtcnis": "NA",
    "meece": "NA",
    "mevlsi": "NA",
    "meeee": "NA",
    "mecadcam": "NA",
    "methermal": "NA",
    "mecivil": "NA",
    "mba": "NA",
    "total": 10
  },
  {
    "index":1,
	"name": "Deloitte (Internship)",
    "spa": "25k PM",
    "doi": "21.01.2016",
    "ece": "NA",
    "cse": "3",
    "eee": "NA",
    "it": "1",
    "mech": "NA",
    "prod": "NA",
    "civil": "NA",
    "chem": "NA",
    "bio": "NA",
    "mca": "NA",
    "mtcse": "NA",
    "mtcnis": "NA",
    "meece": "NA",
    "mevlsi": "NA",
    "meeee": "NA",
    "mecadcam": "NA",
    "methermal": "NA",
    "mecivil": "NA",
    "mba": "NA",
    "total": 4
  },
  {
    "index":2,
	"name": "Biological E. Limited",
    "spa": "1.5",
    "doi": "21.01.2016",
    "ece": "NA",
    "cse": "NA",
    "eee": "NA",
    "it": "NA",
    "mech": "NA",
    "prod": "NA",
    "civil": "NA",
    "chem": "NA",
    "bio": "2",
    "mca": "NA",
    "mtcse": "NA",
    "mtcnis": "NA",
    "meece": "NA",
    "mevlsi": "NA",
    "meeee": "NA",
    "mecadcam": "NA",
    "methermal": "NA",
    "mecivil": "NA",
    "mba": "NA",
    "total": 2
  },
  {
    "index":3,
	"name": " Inspirage",
    "spa": "4.5",
    "doi": "19.01.2016",
    "ece": "1",
    "cse": "1",
    "eee": "NA",
    "it": "0",
    "mech": "NA",
    "prod": "NA",
    "civil": "NA",
    "chem": "NA",
    "bio": "NA",
    "mca": "NA",
    "mtcse": "NA",
    "mtcnis": "NA",
    "meece": "NA",
    "mevlsi": "NA",
    "meeee": "NA",
    "mecadcam": "NA",
    "methermal": "NA",
    "mecivil": "NA",
    "mba": "NA",
    "total": 2
  },
  {
    "index":4,
	"name": "Value Labs",
    "spa": "2.7",
    "doi": "31.01.2016",
    "ece": "NA",
    "cse": "1",
    "eee": "NA",
    "it": "0",
    "mech": "NA",
    "prod": "NA",
    "civil": "NA",
    "chem": "NA",
    "bio": "NA",
    "mca": "1",
    "mtcse": "1",
    "mtcnis": "1",
    "meece": "NA",
    "mevlsi": "NA",
    "meeee": "NA",
    "mecadcam": "NA",
    "methermal": "NA",
    "mecivil": "NA",
    "mba": "NA",
    "total": 4
  },
  {
    "index":5,
	"name": "Factset",
    "spa": "6.5",
    "doi": "15.02.2016",
    "ece": "NA",
    "cse": "2",
    "eee": "NA",
    "it": "0",
    "mech": "NA",
    "prod": "NA",
    "civil": "NA",
    "chem": "NA",
    "bio": "NA",
    "mca": "NA",
    "mtcse": "NA",
    "mtcnis": "NA",
    "meece": "NA",
    "mevlsi": "NA",
    "meeee": "NA",
    "mecadcam": "NA",
    "methermal": "NA",
    "mecivil": "NA",
    "mba": "NA",
    "total": 2
  },
  {
    "index":6,
	"name": "Oracle",
    "spa": "7.5",
    "doi": "18.02.2016",
    "ece": "1",
    "cse": "1",
    "eee": "0",
    "it": "1",
    "mech": "NA",
    "prod": "NA",
    "civil": "NA",
    "chem": "NA",
    "bio": "NA",
    "mca": "NA",
    "mtcse": "NA",
    "mtcnis": "NA",
    "meece": "NA",
    "mevlsi": "NA",
    "meeee": "NA",
    "mecadcam": "NA",
    "methermal": "NA",
    "mecivil": "NA",
    "mba": "NA",
    "total": 3
  },
  {
    "index":7,
	"name": "Heterodrugs (MBA)",
    "spa": "2.4",
    "doi": "20.02.2016",
    "ece": "NA",
    "cse": "NA",
    "eee": "NA",
    "it": "NA",
    "mech": "NA",
    "prod": "NA",
    "civil": "NA",
    "chem": "NA",
    "bio": "NA",
    "mca": "NA",
    "mtcse": "NA",
    "mtcnis": "NA",
    "meece": "NA",
    "mevlsi": "NA",
    "meeee": "NA",
    "mecadcam": "NA",
    "methermal": "NA",
    "mecivil": "NA",
    "mba": "3",
    "total": 3
  },
  {
    "index":8,
	"name": "Huawei",
    "spa": "7.4",
    "doi": "20.02.2016",
    "ece": "2",
    "cse": "5",
    "eee": "NA",
    "it": "1",
    "mech": "NA",
    "prod": "NA",
    "civil": "NA",
    "chem": "NA",
    "bio": "NA",
    "mca": "NA",
    "mtcse": "NA",
    "mtcnis": "NA",
    "meece": "NA",
    "mevlsi": "NA",
    "meeee": "NA",
    "mecadcam": "NA",
    "methermal": "NA",
    "mecivil": "NA",
    "mba": "NA",
    "total": 8
  },
  {
    "index":9,
	"name": "Babycell  (BioTech & MBA)",
    "spa": "7.8",
    "doi": "24.02.2016",
    "ece": "NA",
    "cse": "NA",
    "eee": "NA",
    "it": "NA",
    "mech": "NA",
    "prod": "NA",
    "civil": "NA",
    "chem": "0",
    "bio": "4",
    "mca": "NA",
    "mtcse": "NA",
    "mtcnis": "NA",
    "meece": "NA",
    "mevlsi": "NA",
    "meeee": "NA",
    "mecadcam": "NA",
    "methermal": "NA",
    "mecivil": "NA",
    "mba": "2",
    "total": 6
  },
  {
    "index":10,
	"name": "Godrej & Boyce Mfg. Co. Ltd",
    "spa": "5.5",
    "doi": "27.02.2016",
    "ece": "NA",
    "cse": "NA",
    "eee": "NA",
    "it": "NA",
    "mech": "1",
    "prod": "0",
    "civil": "NA",
    "chem": "NA",
    "bio": "NA",
    "mca": "NA",
    "mtcse": "NA",
    "mtcnis": "NA",
    "meece": "NA",
    "mevlsi": "NA",
    "meeee": "NA",
    "mecadcam": "NA",
    "methermal": "NA",
    "mecivil": "NA",
    "mba": "NA",
    "total": 1
  },
  {
    "index":11,
	"name": "Samsung",
    "spa": "7.5",
    "doi": "08.03.2016",
    "ece": "NA",
    "cse": "3",
    "eee": "NA",
    "it": "1",
    "mech": "NA",
    "prod": "NA",
    "civil": "NA",
    "chem": "NA",
    "bio": "NA",
    "mca": "NA",
    "mtcse": "NA",
    "mtcnis": "NA",
    "meece": "NA",
    "mevlsi": "NA",
    "meeee": "NA",
    "mecadcam": "NA",
    "methermal": "NA",
    "mecivil": "NA",
    "mba": "NA",
    "total": 4
  },
  {
    "index":12,"name": "Pernod -Ricard India Pvt Ltd",
    "spa": "4.0",
    "doi": "25.02.2016",
    "ece": "NA",
    "cse": "NA",
    "eee": "0",
    "it": "NA",
    "mech": "3",
    "prod": "0",
    "civil": "NA",
    "chem": "NA",
    "bio": "NA",
    "mca": "NA",
    "mtcse": "NA",
    "mtcnis": "NA",
    "meece": "NA",
    "mevlsi": "NA",
    "meeee": "NA",
    "mecadcam": "NA",
    "methermal": "NA",
    "mecivil": "NA",
    "mba": "NA",
    "total": 3
  },
  {
    "index":13,"name": "Kent RO Systems Ltd.",
    "spa": "4.2",
    "doi": "05.03.2016",
    "ece": "NA",
    "cse": "NA",
    "eee": "NA",
    "it": "NA",
    "mech": "NA",
    "prod": "NA",
    "civil": "NA",
    "chem": "NA",
    "bio": "NA",
    "mca": "NA",
    "mtcse": "NA",
    "mtcnis": "NA",
    "meece": "NA",
    "mevlsi": "NA",
    "meeee": "NA",
    "mecadcam": "NA",
    "methermal": "NA",
    "mecivil": "NA",
    "mba": "7",
    "total": 7
  },
  {
    "index":14,"name": "Aurobindo Pharma (Chemical)",
    "spa": "3.6",
    "doi": "11.03.2016",
    "ece": "NA",
    "cse": "NA",
    "eee": "NA",
    "it": "NA",
    "mech": "NA",
    "prod": "NA",
    "civil": "NA",
    "chem": "4",
    "bio": "NA",
    "mca": "NA",
    "mtcse": "NA",
    "mtcnis": "NA",
    "meece": "NA",
    "mevlsi": "NA",
    "meeee": "NA",
    "mecadcam": "NA",
    "methermal": "NA",
    "mecivil": "NA",
    "mba": "NA",
    "total": 4
  },
  {
    "index":15,"name": "Bonaven Software Pvt.Ltd",
    "spa": "4.0",
    "doi": "31.03.2016",
    "ece": "NA",
    "cse": "1",
    "eee": "NA",
    "it": "1",
    "mech": "NA",
    "prod": "NA",
    "civil": "NA",
    "chem": "NA",
    "bio": "NA",
    "mca": "NA",
    "mtcse": "NA",
    "mtcnis": "NA",
    "meece": "NA",
    "mevlsi": "NA",
    "meeee": "NA",
    "mecadcam": "NA",
    "methermal": "NA",
    "mecivil": "NA",
    "mba": "NA",
    "total": 2
  },
  {
    "index":16,"name": "Orient Cements",
    "spa": "4.0",
    "doi": "06.04.2016",
    "ece": "NA",
    "cse": "NA",
    "eee": "1",
    "it": "NA",
    "mech": "2",
    "prod": "1",
    "civil": "0",
    "chem": "0",
    "bio": "NA",
    "mca": "NA",
    "mtcse": "NA",
    "mtcnis": "NA",
    "meece": "NA",
    "mevlsi": "NA",
    "meeee": "NA",
    "mecadcam": "NA",
    "methermal": "NA",
    "mecivil": "NA",
    "mba": "NA",
    "total": 4
  },
  {
    "index":17,"name": "GE India Technology",
    "spa": "5.8",
    "doi": "16.04.2016",
    "ece": "NA",
    "cse": "3",
    "eee": "NA",
    "it": "1",
    "mech": "NA",
    "prod": "NA",
    "civil": "NA",
    "chem": "NA",
    "bio": "NA",
    "mca": "NA",
    "mtcse": "NA",
    "mtcnis": "NA",
    "meece": "NA",
    "mevlsi": "NA",
    "meeee": "NA",
    "mecadcam": "NA",
    "methermal": "NA",
    "mecivil": "NA",
    "mba": "NA",
    "total": 4
  },
  {
    "index":18,"name": "Dr.Reddy's Labs",
    "spa": "4.0",
    "doi": "20.04.2016",
    "ece": "NA",
    "cse": "NA",
    "eee": "NA",
    "it": "NA",
    "mech": "NA",
    "prod": "NA",
    "civil": "NA",
    "chem": "NA",
    "bio": "2",
    "mca": "NA",
    "mtcse": "NA",
    "mtcnis": "NA",
    "meece": "NA",
    "mevlsi": "NA",
    "meeee": "NA",
    "mecadcam": "NA",
    "methermal": "NA",
    "mecivil": "NA",
    "mba": "NA",
    "total": 2
  },
  {
    "index":19,"name": "BEL  (Bharat Electronics Limited)",
    "spa": "",
    "doi": "23.04.2016",
    "ece": "3",
    "cse": "NA",
    "eee": "NA",
    "it": "NA",
    "mech": "NA",
    "prod": "NA",
    "civil": "1",
    "chem": "NA",
    "bio": "NA",
    "mca": "NA",
    "mtcse": "NA",
    "mtcnis": "NA",
    "meece": "NA",
    "mevlsi": "NA",
    "meeee": "NA",
    "mecadcam": "NA",
    "methermal": "NA",
    "mecivil": "NA",
    "mba": "NA",
    "total": 4
  },
  {
    "index":20,"name": "Technoforce Solutions Pvt Ltd",
    "spa": "4.5",
    "doi": "05.05.2016",
    "ece": "NA",
    "cse": "NA",
    "eee": "NA",
    "it": "NA",
    "mech": "NA",
    "prod": "NA",
    "civil": "NA",
    "chem": "1",
    "bio": "NA",
    "mca": "NA",
    "mtcse": "NA",
    "mtcnis": "NA",
    "meece": "NA",
    "mevlsi": "NA",
    "meeee": "NA",
    "mecadcam": "NA",
    "methermal": "NA",
    "mecivil": "NA",
    "mba": "NA",
    "total": 1
  },
  {
    "index":21,"name": "Infor",
    "spa": "3.4",
    "doi": "18.05.2016",
    "ece": "NA",
    "cse": "NA",
    "eee": "NA",
    "it": "NA",
    "mech": "NA",
    "prod": "NA",
    "civil": "NA",
    "chem": "NA",
    "bio": "NA",
    "mca": "NA",
    "mtcse": "NA",
    "mtcnis": "0",
    "meece": "0",
    "mevlsi": "0",
    "meeee": "0",
    "mecadcam": "1",
    "methermal": "0",
    "mecivil": "NA",
    "mba": "NA",
    "total": 1
  },
  {
    "index":22,"name": "Aurobindo Pharma (Mechanical)",
    "spa": "3.6",
    "doi": "23.05.2016",
    "ece": "NA",
    "cse": "NA",
    "eee": "NA",
    "it": "NA",
    "mech": "4",
    "prod": "NA",
    "civil": "NA",
    "chem": "NA",
    "bio": "NA",
    "mca": "NA",
    "mtcse": "NA",
    "mtcnis": "NA",
    "meece": "NA",
    "mevlsi": "NA",
    "meeee": "NA",
    "mecadcam": "NA",
    "methermal": "NA",
    "mecivil": "NA",
    "mba": "NA",
    "total": 4
  },
  {
    "index":23,"name": "Progress Software Internship",
    "spa": "15k PM",
    "doi": "02.05.2016",
    "ece": "NA",
    "cse": "1",
    "eee": "NA",
    "it": "1",
    "mech": "NA",
    "prod": "NA",
    "civil": "NA",
    "chem": "NA",
    "bio": "NA",
    "mca": "NA",
    "mtcse": "NA",
    "mtcnis": "NA",
    "meece": "NA",
    "mevlsi": "NA",
    "meeee": "NA",
    "mecadcam": "NA",
    "methermal": "NA",
    "mecivil": "NA",
    "mba": "NA",
    "total": 2
  },
  {
    "index":24,"name": "Commscope Internship",
    "spa": "15k PM",
    "doi": "30.05.2016",
    "ece": "NA",
    "cse": "5",
    "eee": "NA",
    "it": "1",
    "mech": "NA",
    "prod": "NA",
    "civil": "NA",
    "chem": "NA",
    "bio": "NA",
    "mca": "NA",
    "mtcse": "NA",
    "mtcnis": "NA",
    "meece": "NA",
    "mevlsi": "NA",
    "meeee": "NA",
    "mecadcam": "NA",
    "methermal": "NA",
    "mecivil": "NA",
    "mba": "NA",
    "total": 6
  },
  {
    "index":25,"name": "Amazon  (Pooled)",
    "spa": "12.0",
    "doi": "10.6.2016",
    "ece": "NA",
    "cse": "4",
    "eee": "NA",
    "it": "NA",
    "mech": "NA",
    "prod": "NA",
    "civil": "NA",
    "chem": "NA",
    "bio": "NA",
    "mca": "NA",
    "mtcse": "NA",
    "mtcnis": "NA",
    "meece": "NA",
    "mevlsi": "NA",
    "meeee": "NA",
    "mecadcam": "NA",
    "methermal": "NA",
    "mecivil": "NA",
    "mba": "NA",
    "total": 4
  },
  {
    "index":26,"name": "Arecesium (Deshaw) (Pooled)",
    "spa": "15",
    "doi": "15.06.2016",
    "ece": "NA",
    "cse": "4",
    "eee": "NA",
    "it": "1",
    "mech": "NA",
    "prod": "NA",
    "civil": "NA",
    "chem": "NA",
    "bio": "NA",
    "mca": "NA",
    "mtcse": "NA",
    "mtcnis": "NA",
    "meece": "NA",
    "mevlsi": "NA",
    "meeee": "NA",
    "mecadcam": "NA",
    "methermal": "NA",
    "mecivil": "NA",
    "mba": "NA",
    "total": 5
  },
  {
    "index":27,"name": "JP Morgan Code for Good",
    "spa": "6.3",
    "doi": "08.07.2016",
    "ece": "NA",
    "cse": "10",
    "eee": "NA",
    "it": "3",
    "mech": "NA",
    "prod": "NA",
    "civil": "NA",
    "chem": "NA",
    "bio": "NA",
    "mca": "NA",
    "mtcse": "NA",
    "mtcnis": "NA",
    "meece": "NA",
    "mevlsi": "NA",
    "meeee": "NA",
    "mecadcam": "NA",
    "methermal": "NA",
    "mecivil": "NA",
    "mba": "NA",
    "total": 13
  },
  {
    "index":28,"name": "Oracle GBU",
    "spa": "9.0",
    "doi": "28.07.2016",
    "ece": "0",
    "cse": "9",
    "eee": "0",
    "it": "7",
    "mech": "NA",
    "prod": "NA",
    "civil": "NA",
    "chem": "NA",
    "bio": "NA",
    "mca": "NA",
    "mtcse": "NA",
    "mtcnis": "NA",
    "meece": "NA",
    "mevlsi": "NA",
    "meeee": "NA",
    "mecadcam": "NA",
    "methermal": "NA",
    "mecivil": "NA",
    "mba": "NA",
    "total": 16
  },
  {
    "index":29,"name": "Deloitte",
    "spa": "6.25",
    "doi": "03.08.2016",
    "ece": "6",
    "cse": "11",
    "eee": "3",
    "it": "3",
    "mech": "NA",
    "prod": "NA",
    "civil": "NA",
    "chem": "NA",
    "bio": "NA",
    "mca": "2",
    "mtcse": "NA",
    "mtcnis": "NA",
    "meece": "NA",
    "mevlsi": "NA",
    "meeee": "NA",
    "mecadcam": "NA",
    "methermal": "NA",
    "mecivil": "NA",
    "mba": "NA",
    "total": 25
  },
  {
    "index":30,"name": "Microsoft",
    "spa": "9.78",
    "doi": "05.08.2016",
    "ece": "NA",
    "cse": "6",
    "eee": "NA",
    "it": "2",
    "mech": "NA",
    "prod": "NA",
    "civil": "NA",
    "chem": "NA",
    "bio": "NA",
    "mca": "NA",
    "mtcse": "NA",
    "mtcnis": "NA",
    "meece": "NA",
    "mevlsi": "NA",
    "meeee": "NA",
    "mecadcam": "NA",
    "methermal": "NA",
    "mecivil": "NA",
    "mba": "NA",
    "total": 8
  },
  {
    "index":31,"name": "PEGA Systems",
    "spa": "8.13",
    "doi": "08.08.2016",
    "ece": "NA",
    "cse": "5",
    "eee": "NA",
    "it": "5",
    "mech": "NA",
    "prod": "NA",
    "civil": "NA",
    "chem": "NA",
    "bio": "NA",
    "mca": "NA",
    "mtcse": "NA",
    "mtcnis": "NA",
    "meece": "NA",
    "mevlsi": "NA",
    "meeee": "NA",
    "mecadcam": "NA",
    "methermal": "NA",
    "mecivil": "NA",
    "mba": "NA",
    "total": 10
  },
  {
    "index":32,"name": "Next Education Solutions",
    "spa": "5.0",
    "doi": "09.08.2016",
    "ece": "1",
    "cse": "7",
    "eee": "NA",
    "it": "NA",
    "mech": "NA",
    "prod": "NA",
    "civil": "NA",
    "chem": "NA",
    "bio": "NA",
    "mca": "NA",
    "mtcse": "NA",
    "mtcnis": "NA",
    "meece": "NA",
    "mevlsi": "NA",
    "meeee": "NA",
    "mecadcam": "NA",
    "methermal": "NA",
    "mecivil": "NA",
    "mba": "NA",
    "total": 8
  },
  {
    "index":33,"name": "Wells Fargo",
    "spa": "5.5",
    "doi": "11.08.2016",
    "ece": "2",
    "cse": "9",
    "eee": "NA",
    "it": "1",
    "mech": "NA",
    "prod": "NA",
    "civil": "NA",
    "chem": "NA",
    "bio": "NA",
    "mca": "NA",
    "mtcse": "NA",
    "mtcnis": "NA",
    "meece": "NA",
    "mevlsi": "NA",
    "meeee": "NA",
    "mecadcam": "NA",
    "methermal": "NA",
    "mecivil": "NA",
    "mba": "NA",
    "total": 12
  },
  {
    "index":34,"name": "ITC",
    "spa": "8.2",
    "doi": "19.08.2016",
    "ece": "NA",
    "cse": "NA",
    "eee": "0",
    "it": "NA",
    "mech": "2",
    "prod": "0",
    "civil": "NA",
    "chem": "NA",
    "bio": "NA",
    "mca": "NA",
    "mtcse": "NA",
    "mtcnis": "NA",
    "meece": "NA",
    "mevlsi": "NA",
    "meeee": "NA",
    "mecadcam": "NA",
    "methermal": "NA",
    "mecivil": "NA",
    "mba": "NA",
    "total": 2
  },
  {
    "index":35,"name": "NCR Corporation",
    "spa": "5.5",
    "doi": "26.08.2016",
    "ece": "7",
    "cse": "10",
    "eee": "NA",
    "it": "5",
    "mech": "NA",
    "prod": "NA",
    "civil": "NA",
    "chem": "NA",
    "bio": "NA",
    "mca": "NA",
    "mtcse": "NA",
    "mtcnis": "NA",
    "meece": "NA",
    "mevlsi": "NA",
    "meeee": "NA",
    "mecadcam": "NA",
    "methermal": "NA",
    "mecivil": "NA",
    "mba": "NA",
    "total": 22
  },
  {
    "index":36,"name": "Cognizant",
    "spa": "3.5",
    "doi": "02.09.2016",
    "ece": "58",
    "cse": "38",
    "eee": "24",
    "it": "13",
    "mech": "20",
    "prod": "3",
    "civil": "12",
    "chem": "9",
    "bio": "2",
    "mca": "1",
    "mtcse": "NA",
    "mtcnis": "NA",
    "meece": "NA",
    "mevlsi": "NA",
    "meeee": "NA",
    "mecadcam": "NA",
    "methermal": "NA",
    "mecivil": "NA",
    "mba": "NA",
    "total": 180
  },
  {
    "index":37,"name": "Capgemini (Internship)",
    "spa": "12k PM",
    "doi": "08.02.2016",
    "ece": "NA",
    "cse": "NA",
    "eee": "NA",
    "it": "NA",
    "mech": "NA",
    "prod": "NA",
    "civil": "NA",
    "chem": "NA",
    "bio": "NA",
    "mca": "1",
    "mtcse": "2",
    "mtcnis": "NA",
    "meece": "NA",
    "mevlsi": "NA",
    "meeee": "NA",
    "mecadcam": "NA",
    "methermal": "NA",
    "mecivil": "NA",
    "mba": "NA",
    "total": 3
  },
  {
    "index":38,"name": "Infosys",
    "spa": "3.28",
    "doi": "04.09.2016",
    "ece": "63",
    "cse": "41",
    "eee": "23",
    "it": "7",
    "mech": "30",
    "prod": "9",
    "civil": "19",
    "chem": "12",
    "bio": "5",
    "mca": "NA",
    "mtcse": "NA",
    "mtcnis": "NA",
    "meece": "NA",
    "mevlsi": "NA",
    "meeee": "NA",
    "mecadcam": "NA",
    "methermal": "NA",
    "mecivil": "NA",
    "mba": "NA",
    "total": 209
  },
  {
    "index":39,"name": "Infosys Pega Drive",
    "spa": "4.45",
    "doi": "07.09.2016",
    "ece": "NA",
    "cse": "12",
    "eee": "NA",
    "it": "6",
    "mech": "NA",
    "prod": "NA",
    "civil": "NA",
    "chem": "NA",
    "bio": "NA",
    "mca": "NA",
    "mtcse": "NA",
    "mtcnis": "NA",
    "meece": "NA",
    "mevlsi": "NA",
    "meeee": "NA",
    "mecadcam": "NA",
    "methermal": "NA",
    "mecivil": "NA",
    "mba": "NA",
    "total": 18
  },
  {
    "index":40,"name": "Wipro",
    "spa": "3.3",
    "doi": "10.09.2016",
    "ece": "48",
    "cse": "31",
    "eee": "26",
    "it": "17",
    "mech": "28",
    "prod": "6",
    "civil": "6",
    "chem": "3",
    "bio": "3",
    "mca": "NA",
    "mtcse": "NA",
    "mtcnis": "NA",
    "meece": "NA",
    "mevlsi": "NA",
    "meeee": "NA",
    "mecadcam": "NA",
    "methermal": "NA",
    "mecivil": "NA",
    "mba": "NA",
    "total": 168
  },
  {
    "index":41,"name": "DELOITTE TAX (MBA)",
    "spa": "6.2",
    "doi": "13.09.2016",
    "ece": "NA",
    "cse": "NA",
    "eee": "NA",
    "it": "NA",
    "mech": "NA",
    "prod": "NA",
    "civil": "NA",
    "chem": "NA",
    "bio": "NA",
    "mca": "NA",
    "mtcse": "NA",
    "mtcnis": "NA",
    "meece": "NA",
    "mevlsi": "NA",
    "meeee": "NA",
    "mecadcam": "NA",
    "methermal": "NA",
    "mecivil": "NA",
    "mba": "6",
    "total": 6
  },
  {
    "index":42,"name": "Accenture",
    "spa": "3.5",
    "doi": "14.09.2016",
    "ece": "94",
    "cse": "74",
    "eee": "41",
    "it": "23",
    "mech": "31",
    "prod": "15",
    "civil": "24",
    "chem": "17",
    "bio": "18",
    "mca": "3",
    "mtcse": "NA",
    "mtcnis": "NA",
    "meece": "NA",
    "mevlsi": "NA",
    "meeee": "NA",
    "mecadcam": "NA",
    "methermal": "NA",
    "mecivil": "NA",
    "mba": "NA",
    "total": 340
  },
  {
    "index":43,"name": "ION Trading",
    "spa": "12",
    "doi": "18.09.2016",
    "ece": "NA",
    "cse": "1",
    "eee": "NA",
    "it": "0",
    "mech": "NA",
    "prod": "NA",
    "civil": "NA",
    "chem": "NA",
    "bio": "NA",
    "mca": "NA",
    "mtcse": "NA",
    "mtcnis": "NA",
    "meece": "NA",
    "mevlsi": "NA",
    "meeee": "NA",
    "mecadcam": "NA",
    "methermal": "NA",
    "mecivil": "NA",
    "mba": "NA",
    "total": 1
  },
  {
    "index":44,"name": "Pervacio",
    "spa": "12",
    "doi": "20.09.2016",
    "ece": "0",
    "cse": "3",
    "eee": "NA",
    "it": "0",
    "mech": "NA",
    "prod": "NA",
    "civil": "NA",
    "chem": "NA",
    "bio": "NA",
    "mca": "NA",
    "mtcse": "NA",
    "mtcnis": "NA",
    "meece": "NA",
    "mevlsi": "NA",
    "meeee": "NA",
    "mecadcam": "NA",
    "methermal": "NA",
    "mecivil": "NA",
    "mba": "NA",
    "total": 3
  },
  {
    "index":45,"name": "Zensar Pega Drive",
    "spa": "5",
    "doi": "20.09.2016",
    "ece": "NA",
    "cse": "3",
    "eee": "NA",
    "it": "2",
    "mech": "NA",
    "prod": "NA",
    "civil": "NA",
    "chem": "NA",
    "bio": "NA",
    "mca": "NA",
    "mtcse": "NA",
    "mtcnis": "NA",
    "meece": "NA",
    "mevlsi": "NA",
    "meeee": "NA",
    "mecadcam": "NA",
    "methermal": "NA",
    "mecivil": "NA",
    "mba": "NA",
    "total": 5
  },
  {
    "index":46,"name": "Hyundai",
    "spa": "3.5",
    "doi": "21.09.2016",
    "ece": "NA",
    "cse": "NA",
    "eee": "NA",
    "it": "NA",
    "mech": "NA",
    "prod": "NA",
    "civil": "NA",
    "chem": "NA",
    "bio": "NA",
    "mca": "NA",
    "mtcse": "NA",
    "mtcnis": "NA",
    "meece": "NA",
    "mevlsi": "NA",
    "meeee": "NA",
    "mecadcam": "2",
    "methermal": "NA",
    "mecivil": "NA",
    "mba": "NA",
    "total": 2
  },
  {
    "index":47,"name": "Capgemini",
    "spa": "3.5",
    "doi": "23.09.2016",
    "ece": "26",
    "cse": "10",
    "eee": "10",
    "it": "2",
    "mech": "NA",
    "prod": "NA",
    "civil": "NA",
    "chem": "NA",
    "bio": "NA",
    "mca": "NA",
    "mtcse": "NA",
    "mtcnis": "NA",
    "meece": "NA",
    "mevlsi": "NA",
    "meeee": "NA",
    "mecadcam": "NA",
    "methermal": "NA",
    "mecivil": "NA",
    "mba": "NA",
    "total": 48
  },
  {
    "index":48,"name": "TCS Pega Drive",
    "spa": "4.5",
    "doi": "26.09.2016",
    "ece": "NA",
    "cse": "18",
    "eee": "NA",
    "it": "8",
    "mech": "NA",
    "prod": "NA",
    "civil": "NA",
    "chem": "NA",
    "bio": "NA",
    "mca": "NA",
    "mtcse": "NA",
    "mtcnis": "NA",
    "meece": "NA",
    "mevlsi": "NA",
    "meeee": "NA",
    "mecadcam": "NA",
    "methermal": "NA",
    "mecivil": "NA",
    "mba": "NA",
    "total": 26
  },
  {
    "index":49,"name": "iBgroup (Pooled)",
    "spa": "18",
    "doi": "26.09.2016",
    "ece": "NA",
    "cse": "1",
    "eee": "1",
    "it": "NA",
    "mech": "NA",
    "prod": "NA",
    "civil": "NA",
    "chem": "NA",
    "bio": "NA",
    "mca": "NA",
    "mtcse": "NA",
    "mtcnis": "NA",
    "meece": "NA",
    "mevlsi": "NA",
    "meeee": "NA",
    "mecadcam": "NA",
    "methermal": "NA",
    "mecivil": "NA",
    "mba": "NA",
    "total": 2
  },
  {
    "index":50,"name": "CA Technology",
    "spa": "6",
    "doi": "20.10.2016",
    "ece": "NA",
    "cse": "1",
    "eee": "NA",
    "it": "2",
    "mech": "NA",
    "prod": "NA",
    "civil": "NA",
    "chem": "NA",
    "bio": "NA",
    "mca": "NA",
    "mtcse": "NA",
    "mtcnis": "NA",
    "meece": "NA",
    "mevlsi": "NA",
    "meeee": "NA",
    "mecadcam": "NA",
    "methermal": "NA",
    "mecivil": "NA",
    "mba": "NA",
    "total": 3
  },
  {
    "index":51,"name": "Eleation Academy",
    "spa": "5.5",
    "doi": "25.10.2016",
    "ece": "NA",
    "cse": "NA",
    "eee": "NA",
    "it": "NA",
    "mech": "22",
    "prod": "5",
    "civil": "15",
    "chem": "NA",
    "bio": "NA",
    "mca": "NA",
    "mtcse": "NA",
    "mtcnis": "NA",
    "meece": "NA",
    "mevlsi": "NA",
    "meeee": "NA",
    "mecadcam": "NA",
    "methermal": "NA",
    "mecivil": "NA",
    "mba": "NA",
    "total": 42
  },
  {
    "index":52,"name": "Franklin Templeton (MBA)",
    "spa": "3.45",
    "doi": "25.10.2016",
    "ece": "NA",
    "cse": "NA",
    "eee": "NA",
    "it": "NA",
    "mech": "NA",
    "prod": "NA",
    "civil": "NA",
    "chem": "NA",
    "bio": "NA",
    "mca": "NA",
    "mtcse": "NA",
    "mtcnis": "NA",
    "meece": "NA",
    "mevlsi": "NA",
    "meeee": "NA",
    "mecadcam": "NA",
    "methermal": "NA",
    "mecivil": "NA",
    "mba": "13",
    "total": 13
  },
  {
    "index":53,"name": "Virtusa Polaris with Pega",
    "spa": "4",
    "doi": "27.10.2016",
    "ece": "NA",
    "cse": "2",
    "eee": "NA",
    "it": "2",
    "mech": "NA",
    "prod": "NA",
    "civil": "NA",
    "chem": "NA",
    "bio": "NA",
    "mca": "NA",
    "mtcse": "NA",
    "mtcnis": "NA",
    "meece": "NA",
    "mevlsi": "NA",
    "meeee": "NA",
    "mecadcam": "NA",
    "methermal": "NA",
    "mecivil": "NA",
    "mba": "NA",
    "total": 4
  },
  {
    "index":54,"name": "Mobis Technical Center of India",
    "spa": "4.97",
    "doi": "28.10.2016",
    "ece": "",
    "cse": "",
    "eee": "",
    "it": "",
    "mech": "",
    "prod": "NA",
    "civil": "NA",
    "chem": "NA",
    "bio": "NA",
    "mca": "NA",
    "mtcse": "NA",
    "mtcnis": "NA",
    "meece": "NA",
    "mevlsi": "NA",
    "meeee": "NA",
    "mecadcam": "NA",
    "methermal": "NA",
    "mecivil": "NA",
    "mba": "NA",
    "total": 0
  },
  {
    "index":55,"name": "Hexagon Center India Pvt Ltd",
    "spa": "4.85",
    "doi": "01.11.2016",
    "ece": "NA",
    "cse": "3",
    "eee": "NA",
    "it": "0",
    "mech": "0",
    "prod": "1",
    "civil": "1",
    "chem": "NA",
    "bio": "NA",
    "mca": "NA",
    "mtcse": "NA",
    "mtcnis": "NA",
    "meece": "NA",
    "mevlsi": "NA",
    "meeee": "NA",
    "mecadcam": "NA",
    "methermal": "NA",
    "mecivil": "NA",
    "mba": "NA",
    "total": 5
  },
  {
    "index":56,"name": "Verity Knowledge Solutions",
    "spa": "3.5",
    "doi": "02.11.2016",
    "ece": "NA",
    "cse": "NA",
    "eee": "NA",
    "it": "NA",
    "mech": "NA",
    "prod": "NA",
    "civil": "NA",
    "chem": "NA",
    "bio": "NA",
    "mca": "NA",
    "mtcse": "NA",
    "mtcnis": "NA",
    "meece": "NA",
    "mevlsi": "NA",
    "meeee": "NA",
    "mecadcam": "NA",
    "methermal": "NA",
    "mecivil": "NA",
    "mba": "3",
    "total": 3
  },
  {
    "index":57,"name": "Progress Software (Internshop)",
    "spa": "12k PM",
    "doi": "07.11.2016",
    "ece": "NA",
    "cse": "NA",
    "eee": "NA",
    "it": "NA",
    "mech": "NA",
    "prod": "NA",
    "civil": "NA",
    "chem": "NA",
    "bio": "NA",
    "mca": "2",
    "mtcse": "NA",
    "mtcnis": "NA",
    "meece": "NA",
    "mevlsi": "NA",
    "meeee": "NA",
    "mecadcam": "NA",
    "methermal": "NA",
    "mecivil": "NA",
    "mba": "NA",
    "total": 2
  },
  {
    "index":58,"name": "Karvy Stock Broking Ltd   (MBA)",
    "spa": "6",
    "doi": "08.11.2016",
    "ece": "NA",
    "cse": "NA",
    "eee": "NA",
    "it": "NA",
    "mech": "NA",
    "prod": "NA",
    "civil": "NA",
    "chem": "NA",
    "bio": "NA",
    "mca": "NA",
    "mtcse": "NA",
    "mtcnis": "NA",
    "meece": "NA",
    "mevlsi": "NA",
    "meeee": "NA",
    "mecadcam": "NA",
    "methermal": "NA",
    "mecivil": "NA",
    "mba": "2",
    "total": 2
  },
  {
    "index":59,"name": "Amazon",
    "spa": "2.9",
    "doi": "12.11.2016",
    "ece": "0",
    "cse": "0",
    "eee": "0",
    "it": "0",
    "mech": "0",
    "prod": "1",
    "civil": "1",
    "chem": "0",
    "bio": "0",
    "mca": "0",
    "mtcse": "0",
    "mtcnis": "0",
    "meece": "0",
    "mevlsi": "0",
    "meeee": "0",
    "mecadcam": "1",
    "methermal": "0",
    "mecivil": "0",
    "mba": "0",
    "total": 3
  },
  {
    "index":60,"name": "JustDial (MBA)",
    "spa": "3.12",
    "doi": "21.11.2016",
    "ece": "NA",
    "cse": "NA",
    "eee": "NA",
    "it": "NA",
    "mech": "NA",
    "prod": "NA",
    "civil": "NA",
    "chem": "NA",
    "bio": "NA",
    "mca": "NA",
    "mtcse": "NA",
    "mtcnis": "NA",
    "meece": "NA",
    "mevlsi": "NA",
    "meeee": "NA",
    "mecadcam": "NA",
    "methermal": "NA",
    "mecivil": "NA",
    "mba": "9",
    "total": 9
  },
  {
    "index":61,"name": "Bank of America",
    "spa": "4.0",
    "doi": "25.11.2016",
    "ece": "6",
    "cse": "7",
    "eee": "0",
    "it": "2",
    "mech": "3",
    "prod": "0",
    "civil": "1",
    "chem": "1",
    "bio": "2",
    "mca": "0",
    "mtcse": "NA",
    "mtcnis": "NA",
    "meece": "NA",
    "mevlsi": "NA",
    "meeee": "NA",
    "mecadcam": "NA",
    "methermal": "NA",
    "mecivil": "NA",
    "mba": "NA",
    "total": 22
  },
  {
    "index":62,"name": "Dr.Reddy's Labs",
    "spa": "6.5",
    "doi": "20.12.2016",
    "ece": "NA",
    "cse": "NA",
    "eee": "NA",
    "it": "NA",
    "mech": "NA",
    "prod": "NA",
    "civil": "NA",
    "chem": "NA",
    "bio": "5",
    "mca": "NA",
    "mtcse": "NA",
    "mtcnis": "NA",
    "meece": "NA",
    "mevlsi": "NA",
    "meeee": "NA",
    "mecadcam": "NA",
    "methermal": "NA",
    "mecivil": "NA",
    "mba": "NA",
    "total": 5
  },
  {
    "index":63,"name": "GE (Internship)",
    "spa": "21kPM",
    "doi": "22.12.2016",
    "ece": "NA",
    "cse": "NA",
    "eee": "NA",
    "it": "NA",
    "mech": "NA",
    "prod": "NA",
    "civil": "NA",
    "chem": "NA",
    "bio": "NA",
    "mca": "NA",
    "mtcse": "1",
    "mtcnis": "0",
    "meece": "0",
    "mevlsi": "0",
    "meeee": "1",
    "mecadcam": "NA",
    "methermal": "NA",
    "mecivil": "NA",
    "mba": "NA",
    "total": 2
  },
  {
    "index":64,"name": "GE Corporation Consultant Internship M.E",
    "spa": "21kPM",
    "doi": "22.12.2016",
    "ece": "NA",
    "cse": "NA",
    "eee": "NA",
    "it": "NA",
    "mech": "NA",
    "prod": "NA",
    "civil": "NA",
    "chem": "NA",
    "bio": "NA",
    "mca": "NA",
    "mtcse": "1",
    "mtcnis": "0",
    "meece": "0",
    "mevlsi": "0",
    "meeee": "1",
    "mecadcam": "NA",
    "methermal": "NA",
    "mecivil": "NA",
    "mba": "NA",
    "total": 2
  },
  {
    "index":65,"name": "HIL Limited",
    "spa": "4.5",
    "doi": "04.01.2017",
    "ece": "NA",
    "cse": "NA",
    "eee": "NA",
    "it": "NA",
    "mech": "NA",
    "prod": "NA",
    "civil": "NA",
    "chem": "2",
    "bio": "NA",
    "mca": "NA",
    "mtcse": "NA",
    "mtcnis": "NA",
    "meece": "NA",
    "mevlsi": "NA",
    "meeee": "NA",
    "mecadcam": "NA",
    "methermal": "NA",
    "mecivil": "NA",
    "mba": "NA",
    "total": 2
  },
  {
    "index":66,"name": "GE Corporation Consultant Internship M.E",
    "spa": "21kPM",
    "doi": "22.12.2016",
    "ece": "NA",
    "cse": "NA",
    "eee": "NA",
    "it": "NA",
    "mech": "NA",
    "prod": "NA",
    "civil": "NA",
    "chem": "NA",
    "bio": "NA",
    "mca": "NA",
    "mtcse": "1",
    "mtcnis": "0",
    "meece": "0",
    "mevlsi": "0",
    "meeee": "1",
    "mecadcam": "NA",
    "methermal": "NA",
    "mecivil": "NA",
    "mba": "NA",
    "total": 2
  },
  {
    "index":67,"name": "HIL Limited",
    "spa": "4.5",
    "doi": "04.01.2017",
    "ece": "NA",
    "cse": "NA",
    "eee": "NA",
    "it": "NA",
    "mech": "NA",
    "prod": "NA",
    "civil": "NA",
    "chem": "2",
    "bio": "NA",
    "mca": "NA",
    "mtcse": "NA",
    "mtcnis": "NA",
    "meece": "NA",
    "mevlsi": "NA",
    "meeee": "NA",
    "mecadcam": "NA",
    "methermal": "NA",
    "mecivil": "NA",
    "mba": "NA",
    "total": 2
  },
  {
    "index":68,"name": "GE Appliances, Haier, non-GE",
    "spa": "6.4",
    "doi": "09.01.2017",
    "ece": "NA",
    "cse": "1",
    "eee": "NA",
    "it": "0",
    "mech": "NA",
    "prod": "NA",
    "civil": "NA",
    "chem": "NA",
    "bio": "NA",
    "mca": "NA",
    "mtcse": "NA",
    "mtcnis": "NA",
    "meece": "NA",
    "mevlsi": "NA",
    "meeee": "NA",
    "mecadcam": "NA",
    "methermal": "NA",
    "mecivil": "NA",
    "mba": "NA",
    "total": 1
  },
  {
    "index":69,"name": "UBER",
    "spa": "3.7",
    "doi": "16.01.2017",
    "ece": "0",
    "cse": "0",
    "eee": "0",
    "it": "0",
    "mech": "1",
    "prod": "1",
    "civil": "0",
    "chem": "0",
    "bio": "1",
    "mca": "0",
    "mtcse": "0",
    "mtcnis": "0",
    "meece": "0",
    "mevlsi": "0",
    "meeee": "0",
    "mecadcam": "0",
    "methermal": "0",
    "mecivil": "0",
    "mba": "0",
    "total": 3
  },
  {
    "index":70,"name": "ServiceNow",
    "spa": "9.8",
    "doi": "17.01.2017",
    "ece": "NA",
    "cse": "2",
    "eee": "NA",
    "it": "0",
    "mech": "NA",
    "prod": "NA",
    "civil": "NA",
    "chem": "NA",
    "bio": "NA",
    "mca": "NA",
    "mtcse": "NA",
    "mtcnis": "NA",
    "meece": "NA",
    "mevlsi": "NA",
    "meeee": "NA",
    "mecadcam": "NA",
    "methermal": "NA",
    "mecivil": "NA",
    "mba": "NA",
    "total": 2
  },
  {
    "index":71,"name": "ICICI",
    "spa": "3.0",
    "doi": "18.01.2017",
    "ece": "NA",
    "cse": "NA",
    "eee": "NA",
    "it": "NA",
    "mech": "NA",
    "prod": "NA",
    "civil": "NA",
    "chem": "NA",
    "bio": "NA",
    "mca": "NA",
    "mtcse": "NA",
    "mtcnis": "NA",
    "meece": "NA",
    "mevlsi": "NA",
    "meeee": "NA",
    "mecadcam": "NA",
    "methermal": "NA",
    "mecivil": "NA",
    "mba": "4",
    "total": 4
  }
];
   $scope.branches = [
      {
         name:"ECE",
         code:"0",
         companies:[" Inspirage", "\nOracle", "\nHuawei", "\nBEL  (Bharat Electronics Limited)", "\nOracle GBU", "\nDeloitte", 
            "\nNext Education Solutions", "\nWells Fargo", "\nNCR Corporation", "\nCognizant", "\nInfosys", "\nWipro", "\nAccenture", 
            "\nPervacio", "\nCapgemini", "\nMobis Technical Center of India", "\nAmazon", "\nBank of America", "\nUBER"]
      },
      {
         name:"CSE",
         code:"1",
         companies:["Thinktankers (Internship)", "\nDeloitte (Internship)", "\n Inspirage", "\nValue Labs", "\nFactset", "\nOracle", 
            "\nHuawei", "\nSamsung", "\nBonaven Software Pvt.Ltd", "\nGE India Technology", "\nProgress Software Internship", "\nCommscope Internship",
            "\nAmazon  (Pooled)", "\nArecesium (Deshaw) (Pooled)", "\nJP Morgan Code for Good", "\nOracle GBU", "\nDeloitte", "\nMicrosoft", "\nPEGA Systems", 
            "\nNext Education Solutions", "\nWells Fargo", "\nNCR Corporation", "\nCognizant", "\nInfosys", "\nInfosys Pega Drive", "\nWipro", "\nAccenture", 
            "\nION Trading", "\nPervacio", "\nZensar Pega Drive", "\nCapgemini", "\nTCS Pega Drive", "\nIBgroup (Pooled)", "\nCA Technology", 
            "\nVirtusa Polaris with Pega", "\nMobis Technical Center of India", "\nHexagon Center India Pvt Ltd", 
            "\nAmazon", "\nBank of America", "\nGE Appliances, Haier, non-GE", "\nUBER", "\nServiceNow"]
      },
      {
         name:"EEE",
         code:"2",
         companies:["Oracle", "\nPernod -Ricard India Pvt Ltd", "\nOrient Cements", "\nOracle GBU", "\nDeloitte", 
         "\nITC", "\nCognizant", "\nInfosys", "\nWipro", "\nAccenture", "\nCapgemini", 
         "\nIBgroup (Pooled)", "\nMobis Technical Center of India", "\nAmazon", "\nBank of America", "\nUBER"]
      },
      {
         name:"IT",
         code:"3",
         companies:["Thinktankers (Internship)", "\nDeloitte (Internship)", "\n Inspirage", "\nValue Labs", 
         "\nFactset", "\nOracle", "\nHuawei", "\nSamsung", "\nBonaven Software Pvt.Ltd", "\nGE India Technology", "\nProgress Software Internship", 
         "\nCommscope Internship", "\nArecesium (Deshaw) (Pooled)", "\nJP Morgan Code for Good", "\nOracle GBU", "\nDeloitte", "\nMicrosoft", 
         "\nPEGA Systems", "\nWells Fargo", "\nNCR Corporation", "\nCognizant", "\nInfosys", "\nInfosys Pega Drive", "\nWipro", "\nAccenture", "\nION Trading", 
         "\nPervacio", "Zensar Pega Drive", "\nCapgemini", "TCS Pega Drive", "CA Technology", "Virtusa Polaris with Pega", 
         "\nMobis Technical Center of India", "\nHexagon Center India Pvt Ltd", 
         "\nAmazon", "\nBank of America", "\nGE Appliances, Haier, non-GE", "\nUBER", "\nServiceNow"]
      },
      {
         name:"Mechanical",
         code:"4",
         companies:["Godrej & Boyce Mfg. Co. Ltd", "\nPernod -Ricard India Pvt Ltd", "\nOrient Cements", 
         "\nAurobindo Pharma", "\nITC", "\nCognizant", "\nInfosys", "\nWipro", "\nAccenture", "\nEleation Academy", 
         "\nMobis Technical Center of India", "\nHexagon Center India Pvt Ltd", "\nAmazon", "\nBank of America", "\nUBER"]
      },
      {
         name:"Production",
         code:"5",
         companies:["Godrej & Boyce Mfg. Co. Ltd", "\nPernod -Ricard India Pvt Ltd", "\nOrient Cements", "\nITC", 
         "\nCognizant", "\nInfosys", "\nWipro", "\nAccenture", 
         "\nEleation Academy", "\nHexagon Center India Pvt Ltd", "\nAmazon", "\nBank of America", "\nUBER"]
      },
      {
         name:"Civil",
         code:"6",
         companies:["Orient Cements", "\nBEL  (Bharat Electronics Limited)", "\nCognizant", "\nInfosys", "\nWipro", "\nAccenture", 
         "\nEleation Academy", "\nHexagon Center India Pvt Ltd", "\nAmazon", "\nBank of America", "\nUBER"]
      },
      {
         name:"Chemical",
         code:"7",
         companies:["Babycell", "\nAurobindo Pharma", "\nOrient Cements", 
         "\nTechnoforce Solutions Pvt Ltd", "\nCognizant", "\nInfosys", 
         "\nWipro", "\nAccenture", "\nAmazon", "\nBank of America", "\nHIL Limited", "\nHIL Limited", "\nUBER"]
      },
      {
         name:"BioTechnology",
         code:"8",
         companies:["Biological E. Limited", "\nBabycell", "\nDr.Reddy's Labs", "\nCognizant", 
         "\nInfosys", "Wipro", "\nAccenture", "\nAmazon", "\nBank of America", "\nDr.Reddy's Labs", "\nUBER"]
      },
      {
         name:"MCA",
         code:"9",
         companies:["\nValue Labs", "\nDeloitte", "\nCognizant", "\nCapgemini (Internship)", 
         "\nAccenture", "\nProgress Software (Internshop)", "\nAmazon", "\nBank of America", "\nUBER"]
      },
      {
         name:"MTech CSE",
         code:"10",
         companies:["\nValue Labs", "\nCapgemini (Internship)", "\nAmazon", "\nGE (Internship)", 
         "\nGE Corporation Consultant Internship", "\nGE Corporation Consultant Internship", "\nUBER"]
      },
      {
         name:"MTech CNIS",
         code:"11",
         companies:["\nValue Labs", "\nInfor", "\nAmazon", "\nGE (Internship)", 
         "\nGE Corporation Consultant Internship", "\nGE Corporation Consultant Internship", "\nUBER"]
      },
      {
         name:"ME ECE",
         code:"12",
         companies:["\nInfor", "\nAmazon", "\nGE (Internship)", "\nGE Corporation Consultant Internship M.E", 
         "\nGE Corporation Consultant Internship", "\nUBER"]
      },
      {
         name:"ME VLSI",
         code:"13",
         companies:["\nInfor", "\nAmazon", "\nGE (Internship)", "\nGE Corporation Consultant Internship", 
         "\nGE Corporation Consultant Internship", "\nUBER"]
      },
      {
         name:"ME EEE",
         code:"14",
         companies:["Infor", "\nAmazon", "\nGE (Internship)", "\nGE Corporation Consultant Internship", 
         "\nGE Corporation Consultant Internship", "\nUBER"]
      },
      {
         name:"ME CAD CAM",
         code:"15",
         companies:["Infor", "\nHyundai", "\nAmazon", "\nUBER"]
      },
      {
         name:"ME Thermal",
         code:"16",
         companies:["Infor", "\nAmazon", "\nUBER"]
      },
      {
         name:"ME Civil",
         code:"17",
         companies:["Amazon", "\nUBER"]
      },
      {
         name:"MBA",
         code:"18",
         companies:["Heterodrugs", "\nBabycell", "\nKent RO Systems Ltd.", "\nDeloitte Tax", 
         "\nFranklin Templeton", "\nVerity Knowledge Solutions", 
         "\nKarvy Stock Broking Ltd", "\nAmazon", "\nJustDial", "\nUBER", "\nICICI"]
      }
    
   ];

   $scope.group = function(dptc){
      //alert($scope.branches[dptc].companies);
      var alertPopup = $ionicPopup.alert({
         title: $scope.branches[dptc].name,
         template: $scope.branches[dptc].companies
      });
                     
         alertPopup.then(function(res) {
         // Custom functionality....
      });
      
   }

   /*
       "ece",
    "cse",
    "eee",
    "it",
    "mech",
    "prod",
    "civil",
    "chem",
    "bio",
    "mca",
    "mtcse",
    "mtcnis",
    "meece",
    "mevlsi",
    "meeee",
    "mecadcam",
    "methermal",
    "mecivil",
    "mba",
   */




});
app.controller("cbitnewsCtrl", function($scope, $ionicPopup, $http, $cordovaInAppBrowser){

   $http({
      method: "GET",
      url: "http://rohithvutnoor.com/cbitdata/data.json"
   }).then(function(getData){
         $scope.data = getData.data.notifications;
         $scope.links = $scope.data.stories;

      });

});
/*
$http({
      method: "GET",
      url: "http://rohithvutnoor.com/cbitdata/data.json"
   }).then(function(getData){
         $scope.data = getData.data.notifications;
         $scope.links = $scope.data.titles;

      });*/