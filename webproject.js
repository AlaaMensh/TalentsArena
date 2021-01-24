/*button to display block items*/

$(document).ready(function(){
	$(".i_icon").click(function(){
		$(".nav-List").slideToggle();
		$(".nav-List").css("backgroundColor","rgba(0, 0, 0, 0.4)");
	});
});
///////////////////////////////////////////////////////
$(window).scroll(function(){
	var sc= $(this).scrollTop();
	if(sc > 300){
		$("header").addClass("sticky");
	}
	else
	{
		$("header").removeClass("sticky");

	}
});
/////////////////////////////////////////////////////
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}
/*
$(document).ready(function(){
  // Add smooth scrolling to all links
  $(".top_button").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});*/

// When the user clicks on the button, scroll to the top of the document
/*function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}*/