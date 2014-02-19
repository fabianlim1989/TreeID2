var app = {  
      showAlert: function (message, title) {  
        if (navigator.notification) {  
         navigator.notification.alert(message, null, title, 'OK');  
        } else {  
         alert(title ? (title + ": " + message) : message);  
        }  
      },

       handlerData:function(resJSON){
          alert('inhandlerData');
            var templateSource   = $("#a-comment").html(),
 
                template = Handlebars.compile(templateSource),
 
                studentHTML = template(resJSON);
 
           $('#dyn_content').html(studentHTML);
             
        },

     renderHomeView: function() {  

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

      //var raw_template = $('#a-comment').html();
      // Compile that into an handlebars template
      //var template = Handlebars.compile(raw_template);
      // Retrieve the placeHolder where the Posts will be displayed 
      //var placeHolder = $("#a-comment");
      // Fetch all Blog Posts data from server in JSON
      
      alert('after placeholder');
      /*
      $.ajax({
                url:"./data/parks.json",
                method:'get',
                success:this.handlerData
 
       })
*/
      alert('here');
      
      $.getJSON("./data/parks.json",function(data,status,xhr){
        alert('within getJSON');
        alert(data[0].name);
        this.handlerData(data);
        /*
        $.each(data,function(index,element){
          // Generate the HTML for each post
          var html = template(element);
          // Render the posts into the page
          placeHolder.append(html);
        });
*/
      });
      $.getJSON ('./data/parks.json', function (json) {
      alert('gotthisjson');
      $.each (json.parks, function (i,TheMovie){
       alert('eaching' + i + json.parks[i].name);
      //handlebars
      var src = $('#centerContainer-template').html(),
      template = Handlebars.compile(src),
      data = template(json),
      html = $('#centerContainer').html(data);
       
      });
      })

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

   //$('#dyn_content').html(this.homeTemplate(data));       
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