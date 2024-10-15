
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


document.querySelector('.aboutMe').addEventListener('click', function() {
    document.getElementById('aboutMe').scrollIntoView({ 
        behavior: 'smooth' 
    });
});

document.querySelector('.resume').addEventListener('click', function() {
    document.getElementById('resume').scrollIntoView({ 
        behavior: 'smooth' 
    });
});


document.querySelector('.projects').addEventListener('click', function() {
    document.getElementById('projects').scrollIntoView({ 
        behavior: 'smooth' 
    });
});


document.querySelector('.experience').addEventListener('click', function() {
    document.getElementById('timeline').scrollIntoView({ 
        behavior: 'smooth' 
    });
});


document.querySelector('.abilities').addEventListener('click', function() {
    document.getElementById('skills').scrollIntoView({ 
        behavior: 'smooth' 
    });
});


$(document).ready(function() {
    $('.burger-wrap').click(function() {
        $('body').toggleClass('nav-open'); 
        console.log("clicked!");
    });
  
    $('.menu-cover').click(function() {
        $('body').removeClass('nav-open');
        console.log("unclicked!");
    });
  });
  

  function myFunction() {
    const aboutMe = document.getElementById("aboutMe");
    aboutMe.scrollIntoView();
  }