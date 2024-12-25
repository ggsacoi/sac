addEventListener('DOMContentLoaded', () => {
    const bannier = document.querySelector(".hautdelapage");
    const img = document.querySelector('.ons');
    const mesure = img.width;

        setInterval(() =>{
            if (bannier.scrollLeft + mesure >= bannier.scrollWidth) {
                    bannier.scrollLeft = 0;
            } else {
                bannier.scrollLeft += mesure;
            }

        }, 5000);
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