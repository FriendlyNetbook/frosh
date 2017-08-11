
$( window ).resize(function() {
  $('.right').removeClass('right')
  layout();
});

function layout() {
      // Thanks to Mark Avery
      // http://stackoverflow.com/questions/8191015/how-do-i-lay-out-my-content-divs-in-a-similar-manner-to-facebook-timeline
      var adjustArticleHeights = (function () {
        var leftColumnHeight = 100,
          rightColumnHeight = 0,
          $articles = $('#fh5co-timeline article');
        for (var i = 0; i < $articles.length; i++) {

          if (leftColumnHeight > rightColumnHeight) {
            rightColumnHeight += $articles.eq(i).addClass('right').outerHeight(true);
          } else {
            leftColumnHeight += $articles.eq(i).outerHeight(true);
          }
        }
        return $articles;
      })();
};
