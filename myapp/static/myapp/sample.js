(function(d, s, id){
   var js, fjs = d.getElementsByTagName(s)[0];
   if (d.getElementById(id)) {return;}
   js = d.createElement(s); js.id = id;
   js.src = "https://connect.facebook.net/en_US/sdk.js";
   fjs.parentNode.insertBefore(js, fjs);
 }(document, 'script', 'facebook-jssdk'));

window.fbAsyncInit = function() {

      FB.init({
        appId      : '56833887771',
        xfbml      : true,
        version    : 'v10.0'
      });

      FB.AppEvents.logPageView();

};

function getAccessToken(response) {
    var accessToken = response.authResponse.accessToken;
    var xhttp = new XMLHttpRequest();
    console.log(accessToken);
    xhttp.open("POST", "http://localhost:8000/myapp/gettoken", true);
    xhttp.setRequestHeader("X-CSRFToken", csrftoken);
    xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhttp.send(JSON.stringify({"accessToken":accessToken}));
    window.location.replace("http://localhost:8000/");
}

//FB.getLoginStatus(function(response) {
//    if (response.status === 'connected') {
//        var accessToken = response.authResponse.accessToken;
//        var xhttp = new XMLHttpRequest();
//        console.log(accessToken);
//        xhttp.open("POST", "http://localhost:8000/myapp/gettoken", true);
//        xhttp.setRequestHeader("X-CSRFToken", csrftoken);
//        xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
//        xhttp.send(JSON.stringify({"accessToken":accessToken}));
//    }
//} );


