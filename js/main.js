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

    $.getJSON ('./data/parks.json', function (json) {
      
      // alert('gotthisjson');

      //takes allparks-template as the source template
      var src = $('#allparks-template').html();
      
      //compiles it to make it a template
      template = Handlebars.compile(src);

      //puts the json data (parks data) into the template
      data = template(json);

      //'unloads' all this stuff into the <body> tag
      html = $('body').html(data);

      //ensures that the elements li in the unordered list get jquery formatting
      
      // $.each(json.parks, function(i) {
      //     alert(json.parks[i].name);
      //     // alert('good');
          
      //     //sets the pagename correctly (trimming and removing spaces)
      //     var pagename = json.parks[i].name.toLowerCase().replace(/\s/g, '');
          
      //     //creates a new page for each park
      //     //$('#'+pagename).trigger('pagecreate')
      //     //doesn't seem necessary after all
      // }); 

      
      $.mobile.changePage('#splash', {
          
      });

    })    


  },   

  initialize: function() {  
    alert('BeforeInitialize');
    var self = this;  
    this.renderSplashView();  

  }  
};

$(document).on("mobileinit",function() {
    $.mobile.autoInitializePage = false;
}); 

document.addEventListener("deviceready", app.initialize(), false);
// app.initialize();  