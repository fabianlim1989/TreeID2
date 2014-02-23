var watchID = null;

// device APIs are available
//
function watchGPS() {
  // Update every 3 seconds
  //
  var options = { frequency: 5000, enableHighAccuracy: true };
  //navigator.geolocation.getCurrentPosition(onGPSSuccess, onGPSError);
  watchID = navigator.geolocation.watchPosition(onGPSSuccess, onGPSError, options);
  console.log("watch watchID: "+watchID);
}

// onGPSSuccess Geolocation
//
function onGPSSuccess(position) {
  //var element = document.getElementById('geolocation');
  var info =    'Latitude: '           + position.coords.latitude              + '<br />' +
                'Longitude: '          + position.coords.longitude             + '<br />' +
                'Altitude: '           + position.coords.altitude              + '<br />' +
                'Accuracy: '           + position.coords.accuracy              + '<br />' +
                'Altitude Accuracy: '  + position.coords.altitudeAccuracy      + '<br />' +
                'Heading: '            + position.coords.heading               + '<br />' +
                'Speed: '              + position.coords.speed                 + '<br />' +
                'Timestamp: '          + position.timestamp                    + '<br />';
  //element.innerHTML = info;
  console.log(info);
}

// onGPSError Callback receives a PositionError object
//
function onGPSError(error) {
  console.log('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
  if(watchID != null){
    console.log("clear watchID: "+watchID);
    navigator.geolocation.clearWatch(watchID);
    watchID = null;
  }
  alert("Could not retrieve GPS information. Please ensure that your device's GPS is working and try again.");
}