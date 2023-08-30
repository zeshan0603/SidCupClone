
document.addEventListener("DOMContentLoaded", function() {
    const arrow = document.getElementById("arrow");
    const aboutUsPage = document.getElementById("page2"); // ID of the second page

    // Add a click event listener to the arrow element
    arrow.addEventListener("click", function() {
        // Scroll to the about us page smoothly
        aboutUsPage.scrollIntoView({ behavior: "smooth" });
    });
});

const cursorEle = document.querySelector("#cursor");
const cursorBlurEle = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function(dets) {
    // Calculate the new positions with a slight delay
    let newX = dets.x;
    let newY = dets.y;

    // Apply the delayed positions to the cursor elements
    setTimeout(function() {
        cursorEle.style.left = newX  + "px";
        cursorEle.style.top = newY +5 + "px";
        
      
    }, 100); // Adjust the delay value (in milliseconds) as needed
    setTimeout(function() {
      
        
        cursorBlurEle.style.left = newX - 200 + "px";
        cursorBlurEle.style.top = newY - 200 + "px";
    }, 200);
});

// image carousel
const images = document.querySelectorAll('.carousel-img');
const dots = document.querySelectorAll('.dot');
let currentImageIndex = 0;
let intervalId;

function showImage(index) {
    images.forEach(image => image.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    images[index].classList.add('active');
    dots[index].classList.add('active');
    currentImageIndex = index;
}

function changeImage(index) {
    clearInterval(intervalId);
    showImage(index);
    intervalId = setInterval(nextImage, 4000);
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    showImage(currentImageIndex);
}

// Initialize the first image and dot as active
showImage(currentImageIndex);

intervalId = setInterval(nextImage, 4000);


// const h5All = document.querySelectorAll("#nav h5");

// h5All.forEach(function(elem){
//     elem.addEventListener("mouseenter",function(){
//         cursorEle.style.scale ="3"
//         cursorEle.style.border = "1px solid white";
//         cursorEle.style.backgroundColor = "transparent";
//         // cursorEle.style.transition ="all ease 0.5s";
//     })
//     elem.addEventListener("mouseleave",function(){
//         cursorEle.style.scale ="1"
//         cursorEle.style.border = "none";
//         cursorEle.style.backgroundColor = "#96C11E";
//         // cursorEle.style.transition ="all ease 0.5s";
//     })
// });


const cards = document.querySelectorAll('.card'); // Select all card elements
const maxTilt = 10; // Adjust this value for different tilt intensity

document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const angleX = clamp((centerY - mouseY) * 0.03, -maxTilt, maxTilt); // Adjust tilt intensity
        const angleY = clamp((centerX - mouseX) * -0.03, -maxTilt, maxTilt); // Adjust tilt intensity

        card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg)`;
    });
});

function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
}




gsap.to("#nav",{
    backgroundColor : "black",
    height : "95px",
    duration : 0.5,
    scrollTrigger : {
        trigger :"#nav",
        scroller:"body",
        // markers : true,
        start : "top -10%",
        end : "top -11%",
        scrub:1
    }
});

gsap.to("#main",{
    backgroundColor:"rgba(0,0,0,0.85)",
    scrollTrigger:{
        trigger: "#main",
        scroller:"body",
        // markers:true,
        start:"top -25%",
        end:"top -70%",
        scrub: 2
    }
    
});

gsap.from("#about-us img,#about-us-in",{
    y:80,
    opacity :0,
    duration :1,
    // stagger : 0.4,
    scrollTrigger : {
        trigger :"#about-us",
        scroller :"body",
        // markers: true,
        start : "top 60%",
        end : "top 58%",
        scrub: 2
    }
})

gsap.from("#col1",{
    y:-35,
    x:-35,
    scrollTrigger:{
        trigger :"#col1",
        scroller :"body",
        // markers : true,
        start : "top 55%",
        end : "top 45%",
        scrub : 3
    }
})

gsap.from("#col2",{
    y:35,
    x:35,
    scrollTrigger:{
        trigger :"#col1",
        scroller :"body",
        // markers : true,
        start : "top 55%",
        end : "top 45%",
        scrub : 3
    }
})

gsap.from("#page4 h1", {
    y: 30,
    scrollTrigger: {
      trigger: "#page4",
      scroller: "body",
      // markers:true,
      start: "top 70%",
      end: "top 35%",
      scrub: 2,
    },
  });
