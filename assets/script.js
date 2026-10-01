function selectBannerImageSrc (ImageSrcIndex) {
	switch (ImageSrcIndex){
	case 0 :
		bannerImageShown.src = "./assets/images/slideshow/slide1.jpg";
		break
	case 1 :
		bannerImageShown.src = "./assets/images/slideshow/slide2.jpg";
		break
	case 2 :
		bannerImageShown.src = "./assets/images/slideshow/slide3.jpg";
		break
	case 3 :
		bannerImageShown.src = "./assets/images/slideshow/slide4.png";
		break
	}
}
function selectBannerImageTagline (ImageTaglineIndex) {
	tagLineText.innerHTML = slides[ImageTaglineIndex].tagLine
}
function selectDot (ImageDotIndex) {
	dotUnselected[ImageDotIndex].classList.add("dot_selected")
}

function deselectDot () {
	let dotSelected = document.querySelector (".dot_selected")
	dotSelected.classList.remove("dot_selected")
}

function selectBannerImage (ImageIndex) {
	selectBannerImageSrc(ImageIndex)
	selectBannerImageTagline (ImageIndex)
	selectDot (ImageIndex)
}

function leftArrow () {
	bannerImageIndex -= 1
    if (bannerImageIndex === -1) {
        bannerImageIndex = 3
    }
    deselectDot ()
	selectBannerImage (bannerImageIndex)
}

function rightArrow () {
	bannerImageIndex += 1
    	if (bannerImageIndex === 4) {
        	bannerImageIndex = 0
    	}
    deselectDot ()
	selectBannerImage (bannerImageIndex)
}