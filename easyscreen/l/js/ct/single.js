(function ($) {
  'use strict';
  
  var div = $('.active .single-wrapper');
  
  var currentArticleNumber = 0;
  var totalNodelistItems = div.children().length;
  
  function singleNodelist(div) {
	var ele = $(div);
    totalNodelistItems = div.children().length;
	showNodelistItems(ele, totalNodelistItems);
  }
  
  function showNodelistItems(ele, num) {
	var timeDelay = ele.attr('data-ct-duration');
	setInterval(function() {
      ele.fadeOut(500, function() {
        drawItem(ele, true, num);
        ele.fadeIn(500);
      });
    }, timeDelay * 1000);
  }
  
  function drawItem(ele, nextSlide, num) {
	var currentSlideDiv;
	if (nextSlide) {
      currentArticleNumber++;
      if (currentArticleNumber >= num) {
        currentArticleNumber = 0;
      }
	  
    }
	currentSlideDiv = $(ele.children()[currentArticleNumber]);
	ele.children().css("display", "none");
	currentSlideDiv.css("display", "block");    
  }
  
  $(document).ready(function() {
    singleNodelist($('.active .single-wrapper'));
  });
  
})(jQuery);
