document.addEventListener("DOMContentLoaded", function () {
    var images = document.querySelectorAll(".background .Back");
    var currentIndex = 0;
  
    function hideAllImages() {
      for (var i = 0; i < images.length; i++) {
        images[i].style.display = "none";
      }
    }
  
    function showNextImage() {
      hideAllImages();
      currentIndex++;
      if (currentIndex >= images.length) {
        currentIndex = 0;
      }
      images[currentIndex].style.display = "block";
    }
  
    hideAllImages();
    showNextImage();
  
    // Set an interval to change the image every 3 seconds
    setInterval(showNextImage, 3000);
  });
  
  var modal = document.getElementById('id01');
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
  
  function loginPage(form) {
    if (form.uname.value === "Paniv_Kapoor" && form.psw.value === "password") {
      window.location.assign("home.html");
      return false; // Prevent form submission
    } else {
      alert("Incorrect details. Please try again.");
      return false; // Prevent form submission
    }
  }
  
  function scrollToAboutSection() {
    var aboutSection = document.getElementById("about-section");
    aboutSection.scrollIntoView({ behavior: "smooth" });
  }
  
  function scrollToReviewSection() {
    var reviewSection = document.getElementById("review");
    reviewSection.scrollIntoView({ behavior: "smooth" });
  }
  
  function checkDeviceType() {
    if (window.innerWidth < 1500) { 
      alert("Error: Please open this website on a laptop or larger screen for the best experience.");
    }
  }

  window.onload = function() {
    checkDeviceType();
  };

  window.onresize = function() {
    checkDeviceType();
  };
