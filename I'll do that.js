addEventListener('DOMContentLoaded', () => {
    const buttonleft = document.getElementById("A");
    const buttonright = document.getElementById("B");
    const slider = document.querySelector(".photos");
    const img = document.querySelector('.ones');
     // Ensure the image dimensions are properly loaded
     img.onload = () => {
        const scrollAmount = img.offsetWidth; // Get the exact width of the image

        buttonright.addEventListener("click", () => {
            if (slider) { 
                slider.scrollLeft += scrollAmount; // Scroll right by the image width
            }
        });

        buttonleft.addEventListener("click", () => {
            if (slider) { 
                slider.scrollLeft -= scrollAmount; // Scroll left by the image width
            }
        });
    };
    
    // If the image is already loaded (for cached images)
    if (img.complete) {
        img.onload();
    }
});