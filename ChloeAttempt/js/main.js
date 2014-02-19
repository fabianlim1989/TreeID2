var app = {  
      showAlert: function (message, title) {  
    if (navigator.notification) {  
     navigator.notification.alert(message, null, title, 'OK');  
    } else {  
     alert(title ? (title + ": " + message) : message);  
    }  
      },

     renderHomeView: function() {  
      var today = new Date();  
      var dateTxt = today.getDate() +   
      "." + (today.getMonth()+1) +  
      "." + today.getFullYear();        
      alert(dateTxt);
      alert('firstreached');
      /*
      var data = JSON.parse('data/parks.json');
      alert('reached');
      alert(data);
      */

      /*
      var themvars;

      ($.ajax({
        url: 'data/parks.json',
        dataType: "json",
        success: function (data) {
              alert(data[0].name);
              themvars = data;
        }
      }));*/

      var raw_template = $('#a-comment').html();
      // Compile that into an handlebars template
      var template = Handlebars.compile(raw_template);
      // Retrieve the placeHolder where the Posts will be displayed 
      var placeHolder = $("#dyn_content");
      // Fetch all Blog Posts data from server in JSON
      
      alert('after placeholder');

      $.getJSON("./data/parks.json",function(data,status,xhr){
        alert(data[0].name);
        $.each(data,function(index,element){
          // Generate the HTML for each post
          var html = template(element);
          // Render the posts into the page
          placeHolder.append(html);
        });
      });

        /*
      var data2 = {  
      name: "I am the One",   
      date: dateTxt,  
      comment: [  
           { description: "walking with you."  
           },   
           { description: "eating together."  
           },  
           { description: "driving around town."  
           },  
      ] };
      alert('e');
      alert(data[0].name + '  ' + data[0].id);
      var obj = JSON.parse(data2);
      alert('e2');
      alert(obj.name);
*/

   $('#dyn_content').html(this.homeTemplate(data));       
   },  
   
   initialize: function() {  
      alert('BeforeInitialize');
        var self = this;  
        var source = $("#a-comment").html();  
     self.showAlert('This is how its done','Info');  
     this.homeTemplate = Handlebars.compile(source);  
     this.renderHomeView();  

   }  
 };  
 app.initialize();  