var detectmobile = function() { 
 if( navigator.userAgent.match(/Android/i)
 || navigator.userAgent.match(/webOS/i)
 || navigator.userAgent.match(/iPhone/i)
 || navigator.userAgent.match(/iPad/i)
 || navigator.userAgent.match(/iPod/i)
 || navigator.userAgent.match(/BlackBerry/i)
 || navigator.userAgent.match(/Windows Phone/i)
 ){
    return true;
  }
 else {
    return false;
  }
}

var detectmobile2 = function() {
   if(window.innerWidth <= 1080 && window.innerHeight <= 1920) {
     return true;
   } else {
     return false;
   }
}

console.info("document.location = " + document.location)
if(document.location == "https://nanomotion.github.io/#ignore-mobile") {
} else {
 if(detectmobile() && detectmobile2()) {
   console.info("User is on a mobile device; switching to mobile view");
   document.location = "https://nanomotion.github.io/mobile/outdated.html"
 }
}
