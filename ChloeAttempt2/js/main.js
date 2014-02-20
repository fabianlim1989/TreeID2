var app = {  
  
  showAlert: function (message, title) {  
    if (navigator.notification) {  
     navigator.notification.alert(message, null, title, 'OK');  
   } else {  
     alert(title ? (title + ": " + message) : message);  
   }  
  },

  renderSplashView: function() {  

    alert('after placeholder');




    //retrieve json from external json file
    // $.getJSON ('./data/parks.json', function (json) {
      
    //   alert('gotthisjson');
    //   // alert(json.parks[0].name);


    //   var src = $('#centerContainer-template').html(),
      
    //   template = Handlebars.compile(src),
    //   data = template(json),
    //   html = $('#dyn_content').html(data);
    //   $('ul').listview('refresh');

      

    // })

    $.getJSON ('./data/parks.json', function (json) {
      
      // alert('gotthisjson');
      var src = $('#allparks-template').html(),
      
      template = Handlebars.compile(src),
      data = template(json),
      html = $('body').html(data);
      $('ul').listview('refresh');
      
      $.each(json.parks, function(i) {
          alert(json.parks[i].name);
          alert('good');
          var pagename = json.parks[i].name.toLowerCase().replace(/\s/g, '');
          $('#'+pagename).trigger('pagecreate')
      }); 
    })    


  },   

  initialize: function() {  
    alert('BeforeInitialize');
    var self = this;  
    this.renderSplashView();  

  }  
};

app.initialize();  