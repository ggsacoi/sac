addEventListener('DOMContentLoaded', () => {
    const buttonleft = document.getElementById("A");
    const buttonright = document.getElementById("B");
    const slider = document.querySelector(".photos");
    const scrollAmount = window.innerWidth;
    
    buttonright.addEventListener("click", ()=> {
        if (slider) { 
            slider.scrollLeft += scrollAmount;
        }
    });

    buttonleft.addEventListener("click", ()=> {
        if (slider) { 
            slider.scrollLeft -= scrollAmount;
        }
    });
});