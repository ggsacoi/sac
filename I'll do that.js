addEventListener('DOMContentLoaded', () => {
    const buttonleft = document.getElementById("A");
    const buttonright = document.getElementById("B");
    const slider = document.querySelector(".photos");
    const img = document.querySelector('.ones');
    let scrollAmount = img.offsetWidth;
    if(img.style.width === '40vw' || img.style.width === '100vw'){
        scrollAmount = img.offsetWidth;
    };
    
    buttonright.addEventListener("click", ()=> {
        if (slider) { 
            slider.scrollLeft += scrollAmount;

        }
    });

    buttonleft.addEventListener("click", ()=> {
        if (slider) { 
            slider.scrollLeft -= img.offsetWidth;
        }
    });
});