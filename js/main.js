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

$(document).on("mobileinit",function() {
    $.mobile.autoInitializePage = false;
}); 

document.addEventListener("deviceready", onDeviceReady, false);

// device APIs are available, however, needs to be placed further behind to allow API to run first
//
function onDeviceReady() {
  app.initialize();
  document.addEventListener("backbutton", onBackKeyDown, false);
  playAudio(getAbsolutePath('audio/bird.mp3')); 
}

// Handle the back button
//
function onBackKeyDown() {
  stopAudio();
  if(window.history.length){
    console.log(window.history);
    window.history.back();  
  }
}

// app.initialize();  