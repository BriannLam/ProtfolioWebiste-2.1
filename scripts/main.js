
AOS.init();

document.addEventListener("DOMContentLoaded", function() {
    // Add a click event listener to the burger-wrap element
    document.querySelector('.burger-wrap').addEventListener('click', function() {
        // Toggle the 'nav-open' class on the body element
        document.body.classList.toggle('nav-open');
        console.log("clicked!");
        
    });

    // Add a click event listener to the menu-cover element
    document.querySelector('.menu-cover').addEventListener('click', function() {
        // Remove the 'nav-open' class from the body element
        document.body.classList.remove('nav-open');
        console.log("unclicked!");
    });
});


// Select all links with the class 'scroll'
document.querySelectorAll('.menuItem').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault(); // Prevent the default link behavior
      
      // Get the target section's position
      const targetSection = document.querySelector(this.getAttribute('href'));
      
      // Smooth scroll to the section
      window.scrollTo({
          top: targetSection.offsetTop,
          behavior: 'smooth' // Enable smooth scrolling
      });
  });
});





  // function scrollAboutMe() {
  //   const aboutMe = document.getElementById("aboutMe");
  //   aboutMe.scrollIntoView();
  // }
  // function scrollResume() {
  //   const resume = document.getElementById("resume");
  //   resume.scrollIntoView();
  // }
  // function scrollProject() {
  //   const project = document.getElementById("project");
  //   project.scrollIntoView();
  // }
  // function scrollSkills() {
  //   const skills = document.getElementById("skills");
  //   skills.scrollIntoView();
  // }
