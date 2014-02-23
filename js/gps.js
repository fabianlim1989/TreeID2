var watchID = null;
var element = null;
// device APIs are available
//
function startLocBased() {
  if(watchID == null){
    // Update every 5 seconds, enable high accuracy
    //
    var options = { frequency: 5000, enableHighAccuracy: true };
    element = document.getElementById('geolocation');
    element.innerHTML = "Loading...";
    //navigator.geolocation.getCurrentPosition(onGPSSuccess, onGPSError);
    watchID = navigator.geolocation.watchPosition(onGPSSuccess, onGPSError, options);
    console.log("watch watchID: "+ watchID);
  }
}

// onGPSSuccess Geolocation
//
function onGPSSuccess(position) {
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
  console.log('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
  if(watchID != null){
    console.log("clear watchID: "+ watchID);
    navigator.geolocation.clearWatch(watchID);
    watchID = null;
  }
  element.innerHTML = "Error retrieving GPS information. Please ensure that your device's GPS is working and try again.";
}

function stopLocBased(){
  if(watchID != null){
    console.log("clear watchID: "+ watchID);
    navigator.geolocation.clearWatch(watchID);
    watchID = null;
  }
  element.innerHTML = "Stopped! <br/> Click \'START WALKING!\' to begin...";
}