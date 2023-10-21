let touchStartX = 0; //start touching point
let touchEndX = 0; //end touching point

const checkDirection = () => {
	//function for checking direction (you can set the treshold if the touchHandler is too sensitive [default 40 px])
	let swipeSecure = touchEndX - touchStartX; //take the diference between the starting and ending point
	if (swipeSecure < 0 && swipeSecure < -40) {
		//compairing the value with the treshold of 40 px
		rightBtnHandler(); // an example function for right button handler
	} else if (swipeSecure > 0 && swipeSecure > 40) {
		leftBtnHandler(); // an example function for left button handler
	}
};

const slideTouch = document.querySelector("textSlider");
slideTouch.addEventListener("touchstart", (e) => {
	//"touchstard" event for mobile device
	touchStartX = e.changedTouches[0].screenX;
});

slideTouch.addEventListener("touchend", (e) => {
	touchEndX = e.changedTouches[0].screenX;
	checkDirection(); //we trigger function with any touchend event
});
