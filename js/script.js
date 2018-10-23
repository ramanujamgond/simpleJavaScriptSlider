
var play = document.getElementById("play");
var stop = document.getElementById("stop");

var sliderImage = document.getElementById("images");

var imageArray = ["img/1.jpg", "img/2.jpg", "img/3.jpg", "img/4.jpg", "img/5.jpg",
				  "img/6.jpg", "img/7.jpg", "img/8.jpg", "img/9.jpg", "img/10.jpg",
				  "img/11.jpg", "img/12.jpg", "img/13.jpg", "img/14.jpg", "img/15.jpg",
				  "img/16.jpg", "img/17.jpg", "img/18.jpg", "img/19.jpg", "img/20.jpg"];

var imageIndex = 0;

function imageSlider() {
	sliderImage.setAttribute("src", imageArray[imageIndex]);
	imageIndex++;
	if (imageIndex >= imageArray.length) {
		imageIndex = 0;
	}
}

var intervalHandle = setInterval(imageSlider, 2000);

stop.onclick =  function() {
	clearInterval(intervalHandle);
};

play.onclick =  function() {
	intervalHandle = setInterval(imageSlider, 2000);
};
