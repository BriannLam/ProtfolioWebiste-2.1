let maxSvgHeight = 0;
const svg = document.getElementById('line');
const path = document.getElementById('squiggle');

document.addEventListener("DOMContentLoaded", () => {
    let pages = document.getElementsByClassName("page");
    for (let i = 0; i < pages.length; i++) {
        maxSvgHeight += pages[i].offsetHeight;
    }
    updateLine();
});

window.addEventListener('scroll', updateLine);
window.addEventListener('resize', updateLine);

function updateLine() {
    const scrollPosition = window.scrollY;
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    const scrollPercent = Math.min(scrollPosition / maxScroll, 1);
    const newHeight = maxSvgHeight * scrollPercent;

    const centerX = window.innerWidth / 2;
    const squiggleAmplitude = 100; 
    const wavelength = 500; 

    let pathData = `M ${centerX - squiggleAmplitude} 0 `;
    for (let y = 0; y <= newHeight; y += 10) {
        const frequency = 2 * Math.PI / wavelength;
        const xOffset = squiggleAmplitude * Math.sin(frequency * y); 
        pathData += `L ${centerX + xOffset} ${y} `;
    }
    path.setAttribute('d', pathData);
    svg.setAttribute('height', newHeight);
}
