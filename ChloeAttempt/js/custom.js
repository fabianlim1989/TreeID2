Handlebars.registerHelper('toLowerCase', function(str) {
  return str.toLowerCase().replace(/\s/g, '');;
});