const slideS = document.querySelectorAll(".slideS");
const kBelt = document.querySelectorAll(".Kcontainer .slide");
const kCon = document.querySelectorAll(".Kcontainer");
const eBelt = document.querySelectorAll(".Econtainer .slide");
const eCon = document.querySelectorAll(".Econtainer");
slideIndex = 0;
left = slideS.length-1
right = 1;


    const oMail = document.getElementById("openMail");
const cMail = document.getElementById("closedMail");
const mail = document.querySelectorAll(".mail");
const letter = document.querySelector(".letter");
const gray = document.querySelector(".grayout");



    slideS.forEach(slide => slide.classList.add("hide"))
document.addEventListener("DOMContentLoaded", initializeSlider ); //DOMContentLoaded waits for all the dom content to load before doing this
function initializeSlider(){

    if(slideS.length > 0){ //checks if there is images
          slideS[slideIndex].classList.add("displaySlide")
            slideS[right].classList.add("sideSlides")
            slideS[left].classList.add("sideSlides")


    if(slideS[right].classList.contains("sideSlides") && slideS[left].classList.contains("sideSlides")){
        slideS[left].classList.remove("slideS")
        slideS[right].classList.remove("slideS")
        slideS[left].classList.remove("hide")
        slideS[right].classList.remove("hide")
    }
        slideS[left].style.order = 1;
        slideS[slideIndex].style.order = 2;
        slideS[right].style.order = 3;


          intervalId = setInterval(nextSlide, 5000); //returns an id so i store it
    }
  
    kBelt.forEach(img => img.addEventListener("mouseover", () => kCon.forEach(k => k.classList.toggle("freeze"))
    ));
    kBelt.forEach(img => img.addEventListener("mouseout", () => kCon.forEach(k => k.classList.toggle("freeze"))
    ));
    eBelt.forEach(img => img.addEventListener("mouseover", () => eCon.forEach(e => e.classList.toggle("freeze"))
    ));
    eBelt.forEach(img => img.addEventListener("mouseout", () => eCon.forEach(e => e.classList.toggle("freeze"))
    ));

cMail.onclick = () =>               {oMail.classList.toggle("hide")
                                     oMail.classList.toggle("openMail")
                                     cMail.classList.toggle("hide")
                                     cMail.classList.toggle("openMail");
                                    


}

oMail.onclick = () => {letter.classList.toggle("showLetter")
                       letter.classList.toggle("hide");
                       gray.classList.toggle("hide");
};

letter.onclick = () => {letter.classList.toggle("showLetter")
                       letter.classList.toggle("hide");
                       gray.classList.toggle("hide");
};
}



function nextSlide(){
    clearInterval(intervalId);
        slideIndex++;

    if(slideIndex == slideS.length){
        slideIndex = 0;

    }

    right=slideIndex+1
    if(right > slideS.length-1){
        right = 0;
    }
    else if(right < 0){
        right = slideS.length-1;
    }

    left=slideIndex-1
    if(left < 0){
        left = slideS.length-1;
    }
    else if(left > slideS.length-1){
        left = 0;
    }

console.log(` ${left} ${slideIndex} ${right} ${slideS.length}`)

    slideS.forEach(slide => slide.classList.remove("displaySlide"))
    slideS.forEach(slide => slide.classList.remove("sideSlides"))
    slideS.forEach(slide => slide.classList.add("hide"))
    slideS.forEach(slide => slide.classList.add("slideS"))



    slideS[slideIndex].classList.add("displaySlide")
    slideS[right].classList.add("sideSlides")
    slideS[left].classList.add("sideSlides")


    if(slideS[right].classList.contains("sideSlides") && slideS[left].classList.contains("sideSlides")){
        slideS[left].classList.remove("slideS")
        slideS[right].classList.remove("slideS")
        slideS[left].classList.remove("hide")
        slideS[right].classList.remove("hide")
    }

    slideS[left].style.order = 1;
slideS[slideIndex].style.order = 2;
slideS[right].style.order = 3;
}

function prevSlide(){
    clearInterval(intervalId);
    slideIndex--;
    if(slideIndex <= -1){
        slideIndex = slideS.length-1;
    }

        right=slideIndex+1
    if(right> slideS.length-1){
        right = 0;
    }
        else if(right < 0){
        right = slideS.length-1;
    }

    left=slideIndex-1
    if(left < 0){
        left = slideS.length-1;
    }
        else if(left > slideS.length-1){
        left = 0;
    }

console.log(` ${left} ${slideIndex} ${right}`)

    slideS.forEach(slide => slide.classList.remove("displaySlide"))
    slideS.forEach(slide => slide.classList.remove("sideSlides"))
    slideS.forEach(slide => slide.classList.add("hide"))
    slideS.forEach(slide => slide.classList.add("slideS"))

    slideS[slideIndex].classList.add("displaySlide")
    slideS[right].classList.add("sideSlides")
    slideS[left].classList.add("sideSlides")




    if(slideS[right].classList.contains("sideSlides") && slideS[left].classList.contains("sideSlides")){
        slideS[left].classList.remove("slideS")
        slideS[right].classList.remove("slideS")
        slideS[left].classList.remove("hide")
        slideS[right].classList.remove("hide")
    }

    slideS[left].style.order = 1;
slideS[slideIndex].style.order = 2;
slideS[right].style.order = 3;
}


