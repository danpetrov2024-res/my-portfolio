const starfield = document.getElementById("starfield");

    function createStar() {
        const star = document.createElement("div");
        star.classList.add("star");

        
        star.style.top = Math.random() * window.innerHeight + "px";
        star.style.left = Math.random() * window.innerWidth + "px";

        
        star.style.animationDelay = Math.random() * 2 + "s";

        starfield.appendChild(star);

        
        setTimeout(() => {
            star.remove();
        }, 2000);
    }

    
    setInterval(createStar, 50);

