$(document).ready(function(){
	function colorNavigation(){
		var thisFile = window.location.href.split("/");
		var fileName = thisFile[thisFile.length -1];
		var links = $('#nav').children().children();
		console.log(links);
		for (var i = 0; i < links.length; i++) {
			if (links[i].id == fileName) {
				links[i].style.color="#ff0000";
			};
		};
	}

	function logThings(){
		console.log($('#gear-10'));
		console.log($('#gear-6'));
		console.log($('#gear-8'));
	}

	function drawImages(){
		var imageIds = ['gear-10', 'gear-6', 'gear-8'];
		var canvasIds = [ 'canvas-' + imageIds[0], 'canvas-' + imageIds[1], 'canvas-' + imageIds[2] ];
		var gear10 = document.getElementById(imageIds[0]);
		var gear6 = document.getElementById(imageIds[1]);
		var gear8 = document.getElementById(imageIds[2]);
		var gearElemnentIdArrays = [document.getElementById(imageIds[0]), document.getElementById(imageIds[1]), document.getElementById(imageIds[1])];
		for (var i = 0; i < gearElemnentIdArrays.length; i++) {
			console.log(gearElemnentIdArrays[i]);
		};
	}

	function runAll(){
		colorNavigation();
		logThings();
		drawImages();
	}

	runAll();
});