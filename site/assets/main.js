$(document).ready(function(){
	var thisFile = window.location.href.split("/");
	var fileName = thisFile[thisFile.length -1];
	var listOfURLs = ['home.html', 'about.html', 'contact.html','order.html','signup.html'];
	for (var i = 0; i < listOfURLs.length; i++) {
		console.log(listOfURLs[i].toString() == fileName.toString());
	};
});