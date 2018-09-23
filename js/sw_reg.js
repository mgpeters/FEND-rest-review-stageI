if (navigator.serviceWorker) {
    navigator.serviceWorker.register('sw.js')
    .then(function(registration){
      console.log(`Registration success!! scope: ${registration.scope}`);
    }).catch(function(error){
      console.log(`SW reg failed! Here's the error: ${error}`);
    });
  }