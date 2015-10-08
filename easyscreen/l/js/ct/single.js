(function ($) {
  'use strict';
  
  var div = $('.single-wrapper');
  var timeDelay = 5;
  var currentArticleNumber = 0;
  var totalNodelistItems = div.children().length;
  
  function singleNodelist(div) {
	var ele = $(div);
	
	
    console.log(ele.children()[0]);

	hideAllItems(ele);
	showNodelistItems(ele);
  }
  
  function hideAllItems(ele) {
	ele.children().css("display", "none");
	drawItem(ele, false);
  }
  
  function showNodelistItems(ele) {
	setInterval(function() {
      ele.fadeOut(500, function() {
        drawItem(ele, true);
        ele.fadeIn(500);
      });
    }, timeDelay * 1000);
    
  }
  
  function drawItem(ele, nextSlide) {
	if (nextSlide) {
      currentArticleNumber++;
      if (currentArticleNumber >= totalNodelistItems) {
        currentArticleNumber = 0;
      }
    }
    console.log(ele.children());
	//ele.children()[currentArticleNumber].css("display", "block");
    
  }
  
  $(document).ready(function() {
	
	
	singleNodelist($('.single-wrapper'));
  });
  
})(jQuery);

/*
Single = function () {

  var timeDelay = 0;
  var currentArticleNumber = 0;
  var ESS_articles = new Array();

  this.build = function (data) {
    timeDelay = Number(data.switchTimeOut);
    currentArticleNumber = 0;

    ESS_articles = data.articleListData.article;

    container.addClass('single-ct-container');

    Single_DrawPage(container, false);
    Single_Manager(container);
  }

  this.pause = function (parentDom) {
  }

  this.resume = function (parentDom) {
  }

  function Single_Manager(div) {
    var ele = $(div);

    setInterval(function() {
      ele.fadeOut(500, function() {
        Single_DrawPage(ele, true);
        ele.fadeIn(500);
      });
    }, timeDelay * 1000);
  }

  function Single_DrawPage(div, nextSlide) {
    if (nextSlide) {
      currentArticleNumber++;
      if (currentArticleNumber >= ESS_articles.length) {
        currentArticleNumber = 0;
      }
    }

    div.html(createContent(ESS_articles[currentArticleNumber]));
  }

  function createContent(data) {

    template.css('visibility', 'visible');
	
    if (data.readMore != undefined) {
      var readMore = template.find('.readMore');
      //readMore.html(data.readMore);
      readMore.html("læs mere");
      readMore.css('cursor', 'pointer');
      readMore.click(function () {
        $(this).trigger("onCall", {
          type : "openArticle",
          data : {
            artID : data.id
          }
        });
      });
    }

    template.click(function () {
      $(this).trigger("onCall", {
        type : "openArticle",
        data : {
          artID : this.id.split('article_')[1]
        }
     })
    });

    return template;
  }
}
*/