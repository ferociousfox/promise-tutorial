  function get(url){
    return new Promise(function(resolve, reject) {
      var xhttp = new XMLHttpRequest();
      xhttp.open("GET", url, true) {
      xhttp.onload = function() {
        if(xttp.status == 200){
          resolve(JSON.parse(xttp.response));
        } else {
          reject(xttp.statusText);
        }
      };
      xhttp.onerror = function(){
        reject(xhttp.statusText;)
      };
      xhttp.send();
    });
  }

  let promise = get(url);
  promise.then(function(whatever){
    return get("new url for api");
  }).then(function(that url){
    console.log(that url);
  }).catch(function(error){
      console.log(error);
  });



//jquery way


$.get("url").then(function(something) {
  console.log(something);
  return $.get("url2");
}).then(function(somethingelse){
  console.log(somethingelse);
})
