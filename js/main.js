var parsedJSON = null;
var app = {  
  
  showAlert: function (message, title) {  
    if (navigator.notification) {  
     navigator.notification.alert(message, null, title, 'OK');  
   } else {  
     alert(title ? (title + ": " + message) : message);  
   }  
  },

  renderSplashView: function() {  

    //alert('after placeholder');
    
    $.getJSON ('./data/data.json', function (json) {
      
      // alert('gotthisjson');

      //takes allparks-template as the source template
      var src = $('#allparks-template').html();
      
      //compiles it to make it a template
      template = Handlebars.compile(src);

      //for use later
      parsedJSON = json;

      //puts the json data (parks data) into the template
      data = template(json);

      //'unloads' all this stuff into the <body> tag
      html = $('body').html(data);
      
      $.mobile.changePage('#splash', {
          
      });
    })    
    
  },   

  initialize: function() {  
    console.log('BeforeInitialize'); // instead of alert()
    var self = this;  
    this.renderSplashView();  

  }  
};
// app.initialize();
// end of app

$(document).on("mobileinit",function() {
    $.mobile.autoInitializePage = false;
}); 

// Handle the menu button
//
function onMenuKeyDown() {
  $.mobile.changePage('#setting', {
          
  });
}

// device APIs are available, however, needs to be placed further behind to allow API to run first
//
function onDeviceReady() {
  app.initialize();
  playAudio(getAbsolutePath('audio/bird.mp3'));
  $(document).on("pagechange", function () {
    console.log("pagechange");
    stopAudio();
  });
  
  document.addEventListener("menubutton", onMenuKeyDown, false);
}

document.addEventListener("deviceready", onDeviceReady, false);

function searchNearbyTree(position){
  /*var info =    'Latitude: '           + position.coords.latitude              + '<br />' +
                'Longitude: '          + position.coords.longitude             + '<br />' +
                'Altitude: '           + position.coords.altitude              + '<br />' +
                'Accuracy: '           + position.coords.accuracy              + '<br />' +
                'Altitude Accuracy: '  + position.coords.altitudeAccuracy      + '<br />' +
                'Heading: '            + position.coords.heading               + '<br />' +
                'Speed: '              + position.coords.speed                 + '<br />' +
                'Timestamp: '          + position.timestamp                    + '<br />';
  */
  console.log(parsedJSON);
  var userPos = new LatLon(position.coords.latitude, position.coords.longitude);
  var result = "";
  for (var i = parsedJSON.trees.length - 1; i >= 0; i--) {
    var point = new LatLon(parsedJSON.trees[i].latitude, parsedJSON.trees[i].longitude);
    var distKM = userPos.distanceTo(point);   // in km
    var distMILES = (distKM/1.60934); // in miles
    console.log("distMILES: "+distMILES);
    if(distMILES <= 0.2){
      console.log(parsedJSON.trees[i].name + " is nearby");
      result += parsedJSON.trees[i].name + " is nearby.<br/>";
    }
  };

  var element = document.getElementById('locbasedresult');
  element.innerHTML = result;

}