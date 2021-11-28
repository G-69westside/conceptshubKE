var h = document.getElementById("header");
var readout = document.getElementById("readout");
var stuck = false;
var stickPoint = getDistance();

function getDistance() {
  var topDist = h.offsetTop;
  return topDist;
}

window.onscroll = function (e) {
  var distance = getDistance() - window.pageYOffset;
  var offset = window.pageYOffset;
  readout.innerHTML =
    stickPoint + "   " + distance + "   " + offset + "   " + stuck;
  if (distance <= 0 && !stuck) {
    h.style.position = "fixed";
    h.style.top = "0px";
    $(".sticky").addClass("colorbg");
    stuck = true;
  } else if (stuck && offset <= stickPoint) {
    h.style.position = "static";
    $(".sticky").removeClass("colorbg");
    stuck = false;
  }
};
// $(document).ready(function() {
//
//   // Whenever the window is scrolled ...
//   $(window).scroll( function(){
//
//       // Check the location of the object
//       $('.fade-in').each( function(i){
//
//           var bottom_of_object = $(this).offset().top + $(this).outerHeight();
//           var bottom_of_window = $(window).scrollTop() + $(window).height();
//
//           // If the object is inside the window, fade it in!
//           if( bottom_of_window > bottom_of_object ){
//
//               $(this).animate({'opacity':'1'},1000);
//           }
//       });
//   });
// })
