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

	function drawImages(){
		var imageIds = ['gear-10', 'gear-6', 'gear-8'];
		var canvasIds = [ 'canvas-' + imageIds[0], 'canvas-' + imageIds[1], 'canvas-' + imageIds[2] ];
		var imgsourceNames = ['images/logo/gear-10.svg','images/logo/gear-6.svg','images/logo/gear-8.svg'];
		var gear10 = document.getElementById(imageIds[0]);
		var gear6 = document.getElementById(imageIds[1]);
		var gear8 = document.getElementById(imageIds[2]);
		var gearElemnentIdArrays = [document.getElementById(imageIds[0]), document.getElementById(imageIds[1]), document.getElementById(imageIds[1])];
		var canvasElementIdArrays = [document.getElementById(canvasIds[0]), document.getElementById(canvasIds[1]), document.getElementById(canvasIds[2]) ];
		for (var i = 0; i < canvasElementIdArrays.length; i++) {
			console.log(canvasElementIdArrays[i]);
		};
		console.log(gear10);
		
		var canvas1 = document.getElementById(canvasIds[0]);
		var ctx1 = canvas1.getContext('2d')
		imageObject1 = new Image();
		console.log('image1');
		imageObject1.onload = function(){
			ctx1.drawImage(imageObject1, 0, 0, 100, 100);
		}
		imageObject1.src = imgsourceNames[0];

		var canvas2 = document.getElementById(canvasIds[1]);
		var ctx2 = canvas2.getContext('2d')
		imageObject2 = new Image();
		console.log('image2');
		imageObject2.onload = function(){
			ctx2.drawImage(imageObject2, 0, 0, 100, 100);
		}
		imageObject2.src = imgsourceNames[1];

		var canvas3 = document.getElementById(canvasIds[2]);
		var ctx3 = canvas3.getContext('2d')
		imageObject3 = new Image();
		console.log('image3');
		imageObject3.onload = function(){
			ctx3.drawImage(imageObject3, 0, 0, 100, 100);
		}
		imageObject3.src = imgsourceNames[2];
		
	}

	function rotateImages(){
		var imageIds = ['gear-10', 'gear-6', 'gear-8'];
		var canvasIds = [ 'canvas-' + imageIds[0], 'canvas-' + imageIds[1], 'canvas-' + imageIds[2] ];
		var canvas1 = document.getElementById(canvasIds[0]);
		var canvas2 = document.getElementById(canvasIds[1]);
		var canvas3 = document.getElementById(canvasIds[2]);

		var ctx1 = canvas1.getContext('2d');
		var ctx2 = canvas2.getContext('2d');
		var ctx3 = canvas3.getContext('2d');

		ctx1.translate(50, 50);
		ctx2.translate(50, 50);
		ctx3.translate(50, 50);

		ctx1.rotate(Math.PI / 180);
		ctx2.rotate(Math.PI / 180);
		ctx3.rotate(Math.PI / 180);

		ctx1.translate(-50, -50);
		ctx2.translate(-50, -50);
		ctx3.translate(-50, -50);

		ctx1.fillStyle = "red";
		ctx1.fillRect(25, 25, 50, 25);
		ctx1.fillStyle = "blue";
		ctx1.fillRect(25, 50, 50, 25);

		ctx2.fillStyle = "red"; 
		ctx2.fillRect(30, 30, 20, 20); 
		ctx2.fillStyle = "blue";
		ctx2.fillRect(50, 50, 20, 20);

		ctx3.fillStyle = "red";
		ctx3.fillRect(25, 25, 50, 25);
		ctx3.fillStyle = "blue";
		ctx3.fillRect(25, 50, 50, 25);

	}

	function main(){
		colorNavigation();
		drawImages();
		rotateImages();
		setInterval(rotateImages, 100);
	}

	main();

});