addEventListener('DOMContentLoaded', () => {
    const buttonleft = document.getElementById("A");
    const buttonright = document.getElementById("B");
    const slider = document.querySelector(".photos");
    const img = document.querySelector('.ones');
    const scrollAmount = img.width;
    let currentTranslateX = 0;
    
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
    const banderole = document.querySelector(".gauchedelapage");
    const image = document.querySelector('.band');
    const size = image.height;

        setInterval(() =>{
            if (banderole.scrollTop + size >= banderole.scrollHeight) {
                    banderole.scrollTop = 0;
            } else {
                banderole.scrollTop += size;
            }

        }, 5000);
});