FB.getLoginStatus(function(response) {
	if (response.status === 'connected') {
		var accessToken = response.authResponse.accessToken;
		var xhttp = new XMLHttpRequest(); 
		console.log(accessToken);
		xhttp.open("POST", "http://localhost:8000/myapp/gettoken", true);
		xhttp.setRequestHeader("X-CSRFToken", csrftoken);
		xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
		xhttp.send(JSON.stringify({"accessToken":accessToken}));
	} 
} );


const request = new Request(
    "http://localhost:8000/myapp/gettoken",
    {headers: {'X-CSRFToken': csrftoken}}
);
fetch(request, {
    method: 'POST',
    mode: 'same-origin' 
}).then(function(response) {
    
});



var xhttp = new XMLHttpRequest(); 
console.log(accessToken);
xhttp.open("POST", "http://localhost:8000/myapp/gettoken", true);
xhttp.setRequestHeader("X-CSRFToken", csrftoken);
xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
xhttp.send(JSON.stringify({"accessToken":accessToken}));
