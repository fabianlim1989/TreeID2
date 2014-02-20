//Handlebar helper classes
var park = 'SLA';

Handlebars.registerHelper('toLowerCase', function(str) {
  return str.toLowerCase().replace(/\s/g, '');
});

Handlebars.registerHelper('retrieve', function(num) {
  $.getJSON ('./data/parks.json', function (json) {
    	return json.parks[num];
    });
});

function goToNext(){
   
   $.mobile.changePage('#treehome', {
          
    });
}

function goBack() {
    //alert(park);
    $.mobile.changePage('#'+park, {
          
    });
}

function setPark(parkName){
  park = parkName;
  // alert(parkName);

}

function renderschenley()
{
	alert("Hello World!");
	$.getJSON ('./data/parks.json', function (json) {
      
      alert('gotthisjsonforschenley');
      var park = json.parks[0];
      alert(park.name);
      var src = $('#allparks-template').html(),
      template = Handlebars.compile(src),
      data = template(park),
      html = $('#otherpages').html(data);
      

      // $.each (json.parks, function (i){
      //   alert('eaching' + i + json.parks[i].name);
        
      //   var src = $('#allparks-template').html(),
      //   template = Handlebars.compile(src),
      //   data = template(json),
      //   html = $('body').html(data);
      //   alert('trying');

      // });
    })
}

