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


FB.getLoginStatus(function(response) {
    if (response.status === 'connected') {
        var accessToken = response.authResponse.accessToken;
        var xhttp = new XMLHttpRequest();
        console.log(accessToken);
        xhttp.open("POST", "http://localhost/myapp/gettoken", true);
        xhttp.send(accessToken);
    }
} );
