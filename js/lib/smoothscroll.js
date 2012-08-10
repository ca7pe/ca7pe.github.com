// jQuery SmoothScroll | Version 11-03-14
$(document).ready(function() {

   $('a[href*=#]').click(function() {

      // duration in ms
      var duration=400;

      // easing values: swing | linear
      var easing='easeOutCirc';

      // get / set parameters
      var newHash=this.hash;
      var target=$(this.hash+', a[name='+this.hash.slice(1)+']').offset().top;
      var oldLocation=window.location.href.replace(window.location.hash, '');
      var newLocation=this;

      // make sure it's the same location      
      if(oldLocation+newHash==newLocation)
      {
         // set selector
         if($.browser.safari) var animationSelector='body:not(:animated)';
         else var animationSelector='html:not(:animated)';

         // animate to target and set the hash to the window.location after the animation
         $(animationSelector).animate({ scrollTop: target }, duration, easing, function() {

            // add new hash to the browser location
            window.location.href=newLocation;
         });

         // cancel default click action
         return false;
      }
   });

});