  window.addEventListener('scroll', () => {
    const svg = document.getElementById('mySvg');
    const scrollPosition = window.scrollY; // or use window.pageYOffset for cross-browser compatibility

    // Adjust the fourth value in the viewBox attribute
    // Assuming you want to increase it based on the scroll position
    const newHeight = Math.max(0, scrollPosition); // Prevent negative height
    svg.setAttribute('viewBox', `0 0 929.5 ${newHeight}`);
  });