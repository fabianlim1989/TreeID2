// device APIs are available
//
function getGPS() {
  navigator.geolocation.getCurrentPosition(onGPSSuccess, onGPSError);
}

// onSuccess Geolocation
//
function onGPSSuccess(position) {
  var element = document.getElementById('geolocation');
  element.innerHTML = 'Latitude: '           + position.coords.latitude              + '<br />' +
                      'Longitude: '          + position.coords.longitude             + '<br />' +
                      'Altitude: '           + position.coords.altitude              + '<br />' +
                      'Accuracy: '           + position.coords.accuracy              + '<br />' +
                      'Altitude Accuracy: '  + position.coords.altitudeAccuracy      + '<br />' +
                      'Heading: '            + position.coords.heading               + '<br />' +
                      'Speed: '              + position.coords.speed                 + '<br />' +
                      'Timestamp: '          + position.timestamp                    + '<br />';
}

// onError Callback receives a PositionError object
//
function onGPSError(error) {
  alert('code: '    + error.code    + '\n' +
        'message: ' + error.message + '\n');
}