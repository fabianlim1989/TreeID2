var watchID = null;

// device APIs are available
//
function watchGPS() {
  // Update every 3 seconds
  //
  var options = { frequency: 3000 };
  //navigator.geolocation.getCurrentPosition(onGPSSuccess, onGPSError);
  watchID = navigator.geolocation.watchPosition(onGPSSuccess, onGPSError, options);
  console.log("watchID: "+watchID);
}

// onGPSSuccess Geolocation
//
function onGPSSuccess(position) {
  var element = document.getElementById('geolocation');
  var info =    'Latitude: '           + position.coords.latitude              + '<br />' +
                'Longitude: '          + position.coords.longitude             + '<br />' +
                'Altitude: '           + position.coords.altitude              + '<br />' +
                'Accuracy: '           + position.coords.accuracy              + '<br />' +
                'Altitude Accuracy: '  + position.coords.altitudeAccuracy      + '<br />' +
                'Heading: '            + position.coords.heading               + '<br />' +
                'Speed: '              + position.coords.speed                 + '<br />' +
                'Timestamp: '          + position.timestamp                    + '<br />';
  element.innerHTML = info;
  console.log(info);
}

// onGPSError Callback receives a PositionError object
//
function onGPSError(error) {
  alert('code: '    + error.code    + '\n' +
        'message: ' + error.message + '\n');
}