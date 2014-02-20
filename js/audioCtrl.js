  //helper to get the local filepath
  function getAbsolutePath(src) {
    var path = window.location.pathname;
    path = path.substr( path, path.length - 10 );
    return 'file://' + path + src;
  }

  // Audio player
  //
  var my_media = null;
  var mediaTimer = null;

  //change only this var to toggle debug mode
  //
  var debugMode = false;

  // Set audio position
  //
  function setAudioPosition(position) {
    document.getElementById('audio_position').innerHTML = position;
  }

  // Play audio
  //
  function playAudio(src) {
    // Create Media object from src
    if(my_media == null){
      my_media = new Media(src, onMediaSuccess, onMediaError);
      if(debugMode){
        alert("src: "+src);
      }
    } 

      // Play audio
      my_media.play();

      // Update my_media position every second
      if (mediaTimer == null) {
        mediaTimer = setInterval(function() {
          // get my_media position
          my_media.getCurrentPosition(
            // success callback
            function(position) {
              if (position > -1) {
                setAudioPosition((position) + " sec");
              }
            },
            // error callback
            function(e) {
              console.log("Error getting pos=" + e);
              setAudioPosition("Error: " + e);
            }
          );
        }, 1000);
      }
  }

  // Pause audio
  //
  function pauseAudio() {
    if (my_media) {
      my_media.pause();
    }
    if(debugMode){
      alert("audioPaused");
    }
  }

  // Stop audio
  //
  function stopAudio() {
    if (my_media) {
      my_media.stop();
      my_media.release();
      my_media = null;
    }
    clearInterval(mediaTimer);
    mediaTimer = null;
  }

  // onSuccess Callback
  //
  function onMediaSuccess() {
    if(my_media){
      my_media.release();
      my_media = null;
    }
    console.log("playAudio():Audio Success");
    if(debugMode){
      alert("Success & released");
    }
  }

  // onError Callback
  //
  function onMediaError(error) {
    alert('code: '    + error.code    + '\n' +
          'message: ' + error.message + '\n');
    if (my_media) {
      my_media.release();
      my_media = null;
    }
  }

  // Set audio position
  //
  function setAudioPosition(position) {
    document.getElementById('audio_position').innerHTML = position;
  }

  // device APIs are available, however, needs to be placed further behind to allow API to run first
  //
  function onDeviceReady() {
    playAudio(getAbsolutePath('audio/bird.mp3'));
  }