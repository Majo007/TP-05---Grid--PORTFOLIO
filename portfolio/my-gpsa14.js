
const isMobile = window.innerWidth <= 768;   
const docStyle = getComputedStyle(document.documentElement);  

// LOADER  
gsap.to(".loader-bar", {  
    scaleX: 0,  
    stagger: {  
        amount: 0.1,  
        from: "center"  
    },  
});  
gsap.to(".loader", {  
    display: "none",  
    delay: 1  
});  

// Hero Title Animation  
const heroTitle = document.querySelector(".quien-soy-title");  
const heroTitleText = new SplitType(heroTitle, {  
    types: "chars, words",  
    charClass: "title-letter"  
});  
gsap.set(heroTitleText.chars, {  
    opacity: 0,  
    translateY: 100,  
});  
gsap.to(heroTitleText.chars, {  
    opacity: 1,  
    translateY: 0,  
    ease: "back.out(2)",  
    stagger: 0.009,  
    delay: 0.5  
});  

// Event Listeners for Hero Title Letters  
heroTitleText.chars.forEach((letter) => {  
    letter.addEventListener("mouseenter", () => {  
        gsap.to(letter, {  
            translateY: Math.floor(Math.random() * 101) - 110,  
            rotateZ: Math.floor(Math.random() * 101) - 50,  
            translateX: Math.floor(Math.random() * 61) - 30,  
            duration: 0.5,  
            ease: "back.out",  
        });  
        gsap.to(letter, {  
            color: "#" + Math.floor(Math.random() * 16777215).toString(16),  
            duration: 0.1,  
            ease: "back.out",  
        });  
    });  

    letter.addEventListener("mouseleave", () => {  
        gsap.to(letter, {  
            translateY: 0,  
            rotateZ: 0,  
            color: docStyle.getPropertyValue("--clr-secondary"),  
            translateX: 0,  
            delay: 0.5,  
            duration: 0.7,  
            ease: "back.out(4)",  
        });  
        gsap.to(letter, {  
            color: docStyle.getPropertyValue("--clr-black"),  
            delay: Math.random() * (3 - 1.5) + 1.5,  
            duration: 0.5,  
            ease: "back.out",  
        });  
    });  
});  

// Hero Text Animation  
const heroText = document.querySelector(".quien-soy-text");  
const heroTextText = new SplitType(heroText, {  
    types: "chars, words, lines",  
    charClass: "title-letter"  
});  
gsap.set(heroTextText.lines, {  
    opacity: 0,  
    translateY: 100,  
});  
gsap.to(heroTextText.lines, {  
    opacity: 1,  
    translateY: 0,  
    stagger: 0.05,  
    delay: 0.5  
});  

// Header Animation  
gsap.from(".main-header", {  
    scaleX: 0,  
    ease: "back.out(1)",  
    delay: 0.25,  
});  

// Nav Items Animation  
gsap.from(".nav-item", {  
    translateX: 200,  
    translateY: -100,  
    opacity: 0,  
    delay: 0.75,  
    ease: "back.out(1)",  
    stagger: {  
        amount: 0.1,  
    }  
});  

// Logo Animation  
const logo = document.querySelector(".logo");  
const logoText = new SplitType(logo, {  
    types: "chars, words",  
    charClass: "logo-letter"  
});  
gsap.set(logoText.chars, {  
    opacity: 0,  
    translateY: -100,  
});  
gsap.to(logoText.chars, {  
    opacity: 1,  
    translateY: 0,  
    stagger: 0.01,  
    ease: "back.out(3)",  
    delay: 1,  
});  

// Event Listeners for Logo Letters  
logoText.chars.forEach((letter) => {  
    letter.addEventListener("mouseenter", () => {  
        gsap.to(letter, {  
            translateY: -10,  
            duration: 0.5,  
            ease: "back.out",  
            color: docStyle.getPropertyValue("--clr-secondary")  
        });  
    });  

    letter.addEventListener("mouseleave", () => {  
        gsap.to(letter, {  
            translateY: 0,  
            delay: 0.3,  
            ease: "back.out(5)",
        })
    })
})