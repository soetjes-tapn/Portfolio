document.addEventListener("DOMContentLoaded", function(event) { 
    setTimeout(function() {
      document.getElementById("welcome-message").style.display = "none";
      document.getElementById("content").style.display = "block";
    }, 1000);
  });
  